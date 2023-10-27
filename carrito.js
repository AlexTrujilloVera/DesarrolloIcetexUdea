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
            this.itemseleccionados.splice(id, 1);
            this.mostrarItems();
            }
        mostrarItems(){
            let productosCodigoHTML ="";
            for (let i = 0; i <this.itemseleccionados.length; i++) {
                let productoSeleccionado = `<li class="list-group-item d-flex flex-row justify-content-evenly align-item-center">
                <p>${this.itemseleccionados[i].name}</p> 
                <p>${this.itemseleccionados[i].precio}</p>
                <button type="button" class="btn btn-danger" onclick="eliminarClick(${i});">ELiminar</button>
            </li>`;

            productosCodigoHTML += productoSeleccionado;

document.getElementById("carrito-compras-lista").innerHTML = productosCodigoHTML;
            }
    }
    }