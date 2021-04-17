import React from 'react';
import MaterialTable from 'material-table'

export const Table=()=>{   
    const data = [
        { id: 1, product: 'Strawberries', price: '$3.00', quantity: 30},
        { id: 2, product: 'Chicken Nuggets', price: '$10.00', quantity: 40 },
    ] 

    const columns = [       
     {
       title: 'ID', field: 'id', type: 'numeric',
     },
     
     { title: 'Product', field: 'product'},
     
     { title: 'Price', field: 'price' },
     { title: 'Quantity', field: 'quantity', type: 'numeric' },
   ];
    return(
        <div> 
            <MaterialTable title = "Admin Inventory"
            data = {data}
            columns = {columns}
            />
        </div>
    )
}