import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const endpoint='http://localhost:8000/api/product'


const EditProduct = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [cost, setCost] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()
    
    const update =async(e) => {
        e.preventDefault()
        await axios.put (`${endpoint}/${id}`, {
            description: description,
            price:price,
            cost:cost,
            stock:stock
          })
          navigate('/')
    }

    useEffect ( () => {
        const getProductById = async()=>{
            try {
                const response = await axios.get(`${endpoint}/${id}`);
                const { description, price, cost, stock } = response.data;
                setDescription(description);
                setPrice(price);
                setCost(cost);
                setStock(stock);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
   
        };
        getProductById()
    }, [id]);

    return (
      <div>
          <h3>Edit Product</h3>
          <form onSubmit={update}>
              <div className='mb-3'>
                  <label className='form-label'>Description</label>
                  <input value={description} onChange={ (e)=>setDescription(e.target.value)} 
                  type ='text' className='form-control' />
              </div>
  
              <div className='mb-3'>
                  <label className='form-label'>Price</label>
                  <input value={price} onChange={ (e)=>setPrice(e.target.value)} 
                  type ='text' className='form-control' />
              </div>
  
              <div className='mb-3'>
                  <label className='form-label'>Cost</label>
                  <input value={cost} onChange={ (e)=>setCost(e.target.value)} 
                  type ='text' className='form-control' />
              </div>
  
              <div className='mb-3'>
                  <label className='form-label'>Stock</label>
                  <input value={stock} onChange={ (e)=>setStock(e.target.value)} 
                  type ='text' className='form-control' />
              </div>
             
  
             <button type='submit' className='btn btn-primary'>Store</button>
                 
          </form>
      </div>
    )
  }
export default EditProduct
