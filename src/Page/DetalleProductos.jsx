import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'
const clp = new Intl.NumberFormat("es-CL");



const DetalleProductos = () => {

    const {dataPizza} = useContext(MyContext)
    // console.log(dataPizza)
        const { id } = useParams()

    const pizzaDetail = dataPizza.find(pizzaitem => pizzaitem.id == id)

// console.log(pizzaDetail)
  return (
    <div >

        <h1>Pizza {pizzaDetail.name}</h1>
        <hr />
        <div className='detailPizza'>
            <div className='card'>
                <img src={pizzaDetail.img} alt="" />
            </div>
            <div className='card'>
                <h3>Detalle:</h3>
                <p>{pizzaDetail.desc}</p>
                <p className='fs-3 text fw-bold'>${clp.format(pizzaDetail.price)}</p>
                <div>
                    <button className='btn btn-warning btn-sm'>Añadir al carro</button>
                </div>
                
            </div>
            <div>
               
            </div>
            
        </div>
       
       
 
    </div>
  )
}

export default DetalleProductos
