import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const endpoint='http://localhost:8000/api/product'

const CreateProduct = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [cost, setCost] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    
    const store =async (e) => {
        e.preventDefault()
        try {
            await axios.post(endpoint, {
                description: description,
                price: price,
                cost: cost,
                stock: stock
            });
            
            navigate('/');
        } catch (error) {
            console.error('Error adding product:', error.message);
            // Aquí podrías manejar el error de alguna manera si lo deseas, como mostrar un mensaje al usuario
        }
    }

    return (
    <div>
        <h3>Create Product</h3>
        <form onSubmit={store}>
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

export default CreateProduct
