
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { MyContext } from './context/MyContext';
import Footer from './Page/Footer';
import AppRouter from './Router/AppRouter'

const urlJson = './data/pizzas.json'

function App() {
const [dataPizza, setDataPizza] = useState([])


const getPizzas = async() =>{
    const res = await fetch(urlJson);
    const data = await res.json()
    setDataPizza(data)
}
useEffect(()=> {
  getPizzas()
},[])
  return (
    <div>
      
    <MyContext.Provider value={{dataPizza, setDataPizza}}>
        <NavBar />
        <AppRouter />
        <Footer />
      
    </MyContext.Provider>

        
    </div>
  );
}

export default App;
