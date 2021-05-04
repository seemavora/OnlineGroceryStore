import React, { useState }  from "react";
import './TransactionHistory.css';
import MaterialTable from 'material-table'

const dataList = [
   { id: 1, date:'5/10/21', product: 'Chocolate', weight: '3 oz', quantity: '5', total: '$5.00', date:'5/10/21'},
   { id: 2, date: '4/3/20', product: 'Chicken Nuggets', weight: '5 lbs', quantity: '3', total: '$10.00'},
   { id: 3, date: '4/3/20', product: 'Egg Rolls', weight: '5 oz', quantity: '7', total: '$3.00', parentId: 2},
   { id: 4, date: '6/15/21',product: 'Burgers', weight: '2 lb', quantity: '1', total: '$5.50'},
   { id: 5, date: '6/15/21',product: 'Fries', weight: '10 oz', quantity: '2', total: '$2.75', parentId:4},
]

function TransactionHistory(props) {
  
   const [data, setData] = useState(dataList); 

   const columns = [ 
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
     { title: 'Quantity', field: 'quantity'},
     { title: 'Weight', field: 'weight'},
     { title: 'Total', field: 'total',  },

   ];
   
   return (
     <MaterialTable
       title="Admin Transaction History Table"
       columns={columns}
       data={data}
       parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
       options = {{
         search: true,
         paging: false,
         filtering: false,
         sorting: true,  
        //  selection:true,
       }}
     />
   )
 }
 export default TransactionHistory;

