import { Link } from "react-router-dom"
import { Filter } from "./Filter"

const profuctFiltered = ({products , filterState , handleFilterChange}) => (
<>
<div>
  <label> Buscar </label>
  <input 
  className="form-control" 
  type="text" 
  value={filterState}
  onChange={handleFilterChange}
    /> 
</div>
<br/>

<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {filterState === ""
      ? products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "300px",
              margin: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "20px", textAlign: "center" }}>
              <img
                src={product.img}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain"
                }}
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p>Precio: {product.price}</p>
              <p>Stock: {product.stock}</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
            <div style={{ padding: "10px", textAlign: "center" }}>
              <Link to= "/detalle" >
              <button className="btn btn-primary">Ver Detalle</button>
              </Link>
            </div>
          </div>
        ))
      : 
      
      products
          .filter((prod) =>
            prod.name.toLowerCase().includes(filterState.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              style={{
                width: "300px",
                margin: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ padding: "20px", textAlign: "center" }}>
                <img
                  src={product.img}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    borderBottom: "1px solid #eee",
                    marginBottom: "10px",
                  }}
                  alt={product.name}
                />
                <h4>{product.name}</h4>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
                <button className="btn btn-primary">Comprar</button>
              </div>
              <div style={{ padding: "10px", textAlign: "center" }}>
                <Link to={`/detalle/${product.id} `  } >
                <button className="btn btn-primary">Ver Detalle</button>
                </Link>
              </div>
            </div>
          ))}
    
    
  </div>
    

</>

)





export const ItemList = ({products}) => {
  return (

    <Filter products={products} >
      {profuctFiltered}
    </Filter>
)
}

 