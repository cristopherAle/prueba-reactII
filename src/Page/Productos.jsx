import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
const clp = new Intl.NumberFormat("es-CL");

const Productos = ({desc, id, img, name, price }) => {
   
  const navigate = useNavigate()

   const HandleClick = ()=>{
    navigate(`detalle/${id}`)
   }
  return (
    <>
      
          <div className="container card" style={{width: "16rem"}}>

          <img src={img}className="card-img-top" alt="Imagen de Pizza"/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              {/* <p className="card-text">{desc}</p> */}
              <hr />
              <h5 className="card-title">${clp.format(price)}</h5>
              <div>
                    <button className='btn btn-warning'
                    onClick={HandleClick}
                    >Detalle</button>
                    <button className='btn btn-warning'>Añadir al carro</button>
              </div>
              
            </div>
          </div>
    </>
  )
}

export default Productos
