import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Productos from './Productos'


const HomePage = () => {
  const {dataPizza, setDataPizza} = useContext(MyContext)
  
  return (
    <div>
        <h1>Home Page</h1>
          <div className='container mt-5'>
            <div className='row d-flex justify-content-between gap-5'>
              {/* {dataPizza.map(pizza =><Productos key={pizza.id} pizza={pizza}/>)} */}
              {dataPizza.map(pizza =><Productos key={pizza.id} {...pizza}/>)}
            </div>
          </div>
        
    </div>
  )
}

export default HomePage
