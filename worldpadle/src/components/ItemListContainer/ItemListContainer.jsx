import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {ItemListContainer} from './ItemListContainer'
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
    
          <ItemList productos={productos} />
  
    );
  }

