
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { CartContainer } from './components/CartContainer/CartContainer'
import { ItemCounter } from './components/ItemCounter/ItemCounter'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const onAdd = (cantidad) => {
    console.log( "la cantidad seleccionada es:", cantidad)
  }
  return (
    <BrowserRouter>
    <div className="container" >
     <NavBar />
     <Routes>


      <Route path='/' element={<ItemListContainer greeting="Bienvenido" />} />
      <Route path='/cart' element={<CartContainer/>} />  
      <Route path='/detalle/:pid' element={<ItemDetailContainer />} /> 


     </Routes>

     <ItemCounter initial={1} stock={6} onAdd={onAdd} />
     </div>
     </BrowserRouter>
  )
}

export default App
