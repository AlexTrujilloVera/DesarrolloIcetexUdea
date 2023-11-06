function Producto(props){
    return(
        <li class="list-group-item d-flex justify-content-beetween align-item-start">
            <div class="ms-2 me-auto">
                <div class ="fw-bold">{props.name}</div>
                {props.description}
            </div>
            <spam class ="badge bg-primary rounded-pill">{props.price}</spam>
        </li>
    );
}

export default function Cart(){
    return(
        <div className="col-4">
        <h2 className="d-flex justify-content-center">carrito compras</h2>
        <ol class="list-group list-group-numbered">
        <Producto name ="Hosting" description ="venta de dominio y hosting" price ={450}>
        </Producto> 
        </ol>
         </div>
    );
}