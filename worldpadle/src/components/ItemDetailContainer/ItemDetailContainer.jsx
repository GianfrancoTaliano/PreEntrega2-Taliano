import { useEffect, useState } from "react";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { useParams } from "react-router-dom";
import { mFetch } from "../../helpers/mFetch";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetail } from "./ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();


  useEffect(() => {
    mFetch(pid)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []); 




  return (


<ItemDetail product={product}  />
  )
}


