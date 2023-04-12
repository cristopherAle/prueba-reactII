import React from 'react'
import { NavLink } from 'react-router-dom'
import Carrito from '../assets/img/Carrito.svg'
import Pizza from '../assets/img/Pizza.svg'
import Mammamia from '../assets/img/mamma-mia.svg'


const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning mb-4" >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"> <img className='imgNavBar' alt="Imagen Navbar" 
                src={Pizza}></img> Pizzeria <img src={Mammamia} alt="" /> </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                    <span className="navbar-toggler-icon"></span>
                                <NavLink className={({isActive})=> isActive ? 'activo' : ''} aria-current="page" to="carrito">
                                    <img className='imgNavBar' alt="Imagen Carrito" src={Carrito}></img>
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'activo' : ''} to="pokepage">Favoritos</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div> 

            </div>
        </nav>

      
    </div>
  )
}

export default NavBar
