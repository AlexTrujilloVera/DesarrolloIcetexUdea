import { useState } from "react";

function Producto(props){
    return(
        <li class="list-group-item d-flex justify-content-beetween align-item-start">
            <div class="ms-2 me-auto">
                <div class ="fw-bold">{props.name}</div>
                {props.description}
            </div>
            <span class ="badge bg-primary rounded-pill">{props.price}</span>
        </li>
    );
}

export default function Cart(props){
    const[total, setTotal] = useState(0);
    return(
        <div className="col-4 mh-100" style = {{maxHeight:300 + "px !important"}}>
        <h2 className="d-flex justify-content-center">carrito compras</h2>
        <ol class="list-group list-group-numbered" id="list">
        {props.selectedItems.map(item) => {
            setTotal(total + item.price)
                return (
                    <Producto 
                    name={item.name} 
                    description={item.description}
                    price={item.precio}
                    ></Producto>
                );
            })} 
        </ol>
            <div className="d-flex justify-content-evenly col-12 mt-2">
                <button type="button" class="btn btn-outline-dark">
                    total:{total}</button>
                <button type="button" class="btn btn-sucess">PAGAR</button>
            </div>
         </div>
    );
}