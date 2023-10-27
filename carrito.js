class Carrito{
    constructor(productos){
        this.productos = productos;
        this.itemseleccionados = [];
    }
        agregarItem(id){  
            this.itemseleccionados.push(this.productos[id]);
            this.mostrarItems();
            }
        EliminarItem(id){   
            this.mostrarItems();
            }
        mostrarItems(){
            let productosCodigoHTML ="";
            for (let i = 0; i <this.itemseleccionados.length; i++) {
                let productoSeleccionado = `<li class="list-group-item d-flex flex-row justify-content-evenly align-item-center">
                <p>Pagina Web</p> 
                <p><i>$10.000</i></p>
                <button type="button" class="btn btn-danger">ELiminar</button>
            </li>`;

            productosCodigoHTML += productoSeleccionado;

document.getElementById("carrito-compras-lista").innerHTML = productosCodigoHTML;
            }
    }
    }