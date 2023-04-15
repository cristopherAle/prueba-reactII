import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'
const clp = new Intl.NumberFormat("es-CL");

const DetalleProductos = (props) => {
  const {dataPizza} = useContext(MyContext);
  const { id } = useParams();
  const pizzaDetail = dataPizza.find(pizzaitem => pizzaitem.id === id);


// console.log(pizzaDetail)
  return (
    <div >

        <h1>Pizza {pizzaDetail.name}</h1>
        <hr />
        <div className='detailPizza p-3'>
            <div className='card p-3'>
                <img src={pizzaDetail.img} alt="" />
            </div>
            <div className='card p-3'>
                <h3>Detalle:</h3>
                <p>{pizzaDetail.desc}</p>
                <p className='fs-3 text fw-bold'>${clp.format(pizzaDetail.price)}</p>
                    <div>
                      <button className='btn btn-warning btn-sm'> 
                        <Link to="/carrito" style={{textDecoration:'none', color:'black'}}>Añadir al Carro</Link>
      
                      </button>   
                    </div>
            </div>
        </div>
    </div>
    
  )
}

export default DetalleProductos
