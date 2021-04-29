import React, { useState }  from "react";
import './TransactionHistory.css';
import MaterialTable from 'material-table'

const dataList = [
   { date:'5/10/21', product: 'Chocolate', weight: '3 oz', total: '$5.00'},
   { date: '4/3/20', product: 'Chicken Nuggets', weight: '5 lbs', total: '$10.00'},
]

function TransactionHistory(props) {

   const [data, setData] = useState(dataList); 

   const columns = [       //[columns, setColumns] = useState
     {
       title: 'Date', field: 'date',
     },
     {  
       title: 'Product', field: 'product',
       editComponent: props => (
         <input
           type="text"
           value={props.value}
           onChange={e => props.onChange(e.target.value)}
         />
       )
     },
     //{ title: 'Quantity', field: 'quantity', type: 'numeric' },
     { title: 'Weight', field: 'weight'},
     { title: 'Total', field: 'total' },
   ];

   return (
     <MaterialTable
       title="Admin Transaction History Table"
       columns={columns}
       data={data}
       options = {{
         search: true,
         paging: false,
         filtering: false,
         sorting: true,  
       }}
      //  editable={{
      //    onRowAdd: newData =>
      //      new Promise((resolve, reject) => {
      //        setTimeout(() => {
      //          setData([...data, newData]);
               
      //          resolve();
      //        }, 1000)
      //      }),

      
      //    onRowUpdate: (newData, oldData) =>
      //      new Promise((resolve, reject) => {
      //        setTimeout(() => {
      //          const dataUpdate = [...data];
      //          const index = oldData.tableData.id;
      //          dataUpdate[index] = newData;
      //          setData([...dataUpdate]);
      //          resolve();
      //        }, 1000)
      //      }),

      //    onRowDelete: oldData =>
      //      new Promise((resolve, reject) => {
      //        setTimeout(() => {
      //          const dataDelete = [...data];
      //          const index = oldData.tableData.id;
      //          dataDelete.splice(index, 1);
      //          setData([...dataDelete]);
      //          resolve();
      //        }, 1000)
      //      }),
      //  }}
     />
   )
 }

 export default TransactionHistory;

