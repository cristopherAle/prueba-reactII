import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Pizza from '../assets/img/Pizza.svg'
const clp = new Intl.NumberFormat("es-CL");

const Productos = ({desc, id, img, ingredients, name, price }) => {
   
 const navigate = useNavigate()

   const HandleClick = ()=>{
    navigate(`detalle/${id}`)
   }


  return (
    <>
      <div className="container card p-3" style={{width: "16rem"}}>

          <img src={img}className="card-img-top" alt="Imagen de Pizza"/>
            <div className="card-body">
              <h5 className="card-title">Pizza {name}</h5>
   
              <hr />
             <h5>Ingredientes:</h5>
              <ul className="listIngredient">
                 {ingredients.map((ingredient, index) => (
                  
                  <li key={index}>
                    <img className='imgLi' src={Pizza} alt="imagen Pizza" />
                   {ingredient} 
                  
                  </li>
                ))}
              </ul>

              <hr />

              <h5 className="card-title">${clp.format(price)}</h5>
              <div>
                  <button className='btn btn-warning'
                  onClick={HandleClick}
                  >Detalle</button>
                  <button className='btn btn-warning'>
                    <Link to="/carrito" style={{textDecoration:'none', color:'black'}}>Añadir al Carro</Link>
                  </button>
              </div>
              
            </div>
          </div>
    </>
  )
}

export default Productos
