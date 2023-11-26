
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
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

      <Route path='/' element={<ItemListContainer greeting="Bienvenidos" />} />
      <Route path='/category/:cid' element={<ItemListContainer greeting="Bienvenidos" />} />
      <Route path='/detalle/:pid' element={<ItemDetailContainer />} /> 
      <Route path= '*' element={<Navigate to="/" />} /> 


     </Routes>

  
     </div>
     </BrowserRouter>
  )
}

export default App
