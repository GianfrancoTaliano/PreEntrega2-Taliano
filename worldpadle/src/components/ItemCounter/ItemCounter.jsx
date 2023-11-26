
import { useCounter } from "../../hooks/useCounter"



export const ItemCounter = ({initial=1 , stock= 5 , onAdd }) => {

    const {counter , handleRestar , handleSumar} =useCounter( initial , stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
<div className="w-25">
    <label>{counter}</label>
    <button onClick={handleSumar} className="btn btn-primary mr-2">+</button>
    <button onClick={handleRestar} className="btn btn-danger mr-2">-</button>
    <button onClick={handleOnAdd} className="btn btn-success">Agregar al Carrito</button>
</div>

    )
}
