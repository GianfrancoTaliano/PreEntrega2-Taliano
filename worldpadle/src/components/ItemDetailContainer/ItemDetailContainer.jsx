import { useEffect, useState } from "react";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();


  useEffect(() => {
    mFetch(pid)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []); 

  const onAdd = (cantidad) => {
    console.log("la cantidad seleccionada es:", cantidad);
  }


  return (
    <div className="row">
      <div className="col-12 text-center mt-5">
        <h1>Detalle del Producto</h1>
      </div>
      <div className="col-12">
        <img src={product.img} alt={product.name} className="img-fluid" />
        <h2>{product.name}</h2>
        <div className="col-6 mt-5">
          <h4>Descripcion: {product.description} </h4>
          <h4>Precio: {product.price}</h4>
          <h4>Stock: {product.stock}</h4>
          <ItemCounter onAdd={onAdd} initial={1} stock={product.stock} />
        </div>
      </div>
    </div>
  );
};
