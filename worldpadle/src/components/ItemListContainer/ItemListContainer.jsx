import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"


export const ItemListContainer = ({greeting}) => {
   const [productos , setProducts] = useState([])

   const {cid} = useParams()

    useEffect(() => {
      if (cid) {
        mFetch()
          .then(result => setProducts(result.filter(product => product.category === cid)))
          .catch(error => console.log(error))
      }
          else {
        mFetch()
          .then(result => setProducts(result))
          .catch(error => console.log(error))
      }
    }, [cid])


    return (
      <div>
        <h2> {greeting}</h2>
        <ItemList productos={productos} />
      </div>
    ) 
  }

