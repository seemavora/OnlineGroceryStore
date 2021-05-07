import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Inventory.css";
import MaterialTable from "material-table";

const dataList = [
   { id: 1, product: 'Chocolate', weight: '20 oz', price: '$3.00', quantity: 30},
   { id: 2, product: 'Chicken Nuggets', weight: '4 lbs', price: '$5.00', quantity: 40 },
]

function Inventory(props) {
  const [data, setData] = useState(dataList);

  const columns = [
    //[columns, setColumns] = useState
    {
      title: "ID",
      field: "id",
      type: "numeric",
    },
    {
      title: "Product",
      field: "product",
      editComponent: (props) => (
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
    { title: "Weight", field: "weight"},
    { title: "Price", field: "price" },
    { title: "Quantity", field: "quantity", type: "numeric" },
  ];

  return (
    <MaterialTable
      title="Admin Inventory Table"
      columns={columns}
      data={data}
      options={{
        search: true,
        paging: false,
        filtering: false,
        sorting: true,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              resolve();
            }, 1000);
          }),

        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
}

export default Inventory;


