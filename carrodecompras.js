class carrito{
    constructor(productos){
        this.productos = productos;        
        this.itemseleccionados = [];
    }
        agregaritem(id){   
            this.itemseleccionados.push(this.productos[id]);
            this.mostraritems();    
            }
        eliminaritem(id){   
            console.log(this.itemseleccionados);    
            this.itemseleccionados.slice(id, 1);
            console.log(this.itemseleccionados.splice(id,1));
            this.mostraritems();
        }
        mostraritems(){
        let productoscodigohtml = "";
        let total = 0;
        for(let i = 0; i < this.itemseleccionados.length; i++){
            let productoseleccionado = `<li class="list-group-item d-flex flex-row justify-content-evenly align-items-center">
            <img 
            src="${this.itemseleccionados[i].img}" 
            class="item-img" 
            alt="..."
            />
            <p>${this.itemseleccionados[i].name}</p>
            <p><i>${this.itemseleccionados[i].precio}</i></p>
          <button type="button" class="btn btn-outline-danger" onclick="eliminarclick(${i});">Eliminar</button>
          </li>`;
          productoscodigohtml += productoseleccionado;
          total += this.itemseleccionados[i].precio;
        }
        document.getElementById("carrito-compras-lista").innerHTML = productoscodigohtml;
        console.clear();
        console.log(total);
      }
    }