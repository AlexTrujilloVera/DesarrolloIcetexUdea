import { useState } from "react";
import { json } from "react-router-dom";

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
   let total = 0;

   function pay(){
    let venta = {
        products: props.selectItems,
        total: total,
    }
fetch("/pay",{
    headers:{
        "Content-type": "Application/json",
    },
method:"POST",
    body:JSON.stringify(venta),
});
}
    return(
        <div className="col-4 mh-100" style = {{maxHeight:300 + "px !important"}}>
        <h2 className="d-flex justify-content-center">carrito compras</h2>
        <ol class="list-group list-group-numbered" id="list">
        {props.selectedItems.map(item) => {
            total += item.price;
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
                <button type="button" class="btn btn-sucess" onClick={pay}>PAGAR</button>
            </div>
         </div>
    );
}