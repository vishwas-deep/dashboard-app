import { useState } from 'react';
import './products.scss'
import DataTable from '../../components/dataTable/DataTable';
import { productColumns } from './productData';
import { productRows } from '../../data';
import AddData from '../../components/addData/AddData';


const Products = () => {
    
    const [open, updateOpen] = useState(false);
    
  return (
      <div className='products'>
          {/* user's info */}
          <div className='products__info'>
              <h1>Products</h1>
              <button onClick={()=>updateOpen(true)}>Add New Product</button>
          </div>
          
          {/* table */}
          <DataTable slug={"products"} columns={productColumns} rows={productRows} />   
          
          {/* add user overlay */}
          {open && <AddData slug={'product'} columns={productColumns} updateOpen={updateOpen} />}
    </div>
  )
}

export default Products