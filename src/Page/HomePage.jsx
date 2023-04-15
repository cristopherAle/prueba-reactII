import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Productos from './Productos'


const HomePage = () => {
  const {dataPizza} = useContext(MyContext)
  
  return (
    <div className='container'>
        <h1>Nuestros Productos</h1>
        <hr />
          <div className='container mt-5'>
            <div className='row d-flex justify-content-between gap-5'>
              {dataPizza.map(pizza =><Productos key={pizza.id} {...pizza}/>)}
            </div>
          </div>
        
    </div>
  )
}

export default HomePage
