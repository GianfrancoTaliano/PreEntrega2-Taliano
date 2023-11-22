

export const Item = ({ img , price , stock , name }) => {
    return (
        <div className= "card w-25">
            <div className="card-body p-0 tex-center">
                <img src={img} className="card-img-top w-100" alt="imagen" />
                <h4>{name}</h4>
                <p> Precio: {price}</p>
                <p> Stock: {stock}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary"> Detalle </button>
            </div>
        </div>
    )
}
