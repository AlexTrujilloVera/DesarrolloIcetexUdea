let listado = [
    {
        nombre: "Dominio & Hosting",
        precio: 320000,
        descripcion:"el cliente compra su servicio de dominio y hosting",
        img:"",
    },
{
        nombre: "crear pagina web",
        precio: 1000000,
        descripcion:"el cliente compra su pagina web",
        img:"",
},
{
        nombre: "posicionar pagina web",
        precio: 400000,
        descripcion:"el cliente compra su posicionamiento web",
        img:"",       
},
];

function hiceclick(id){
  console.log("diste click", id);
comercio.agregaritem(id);
}
function eliminarclick(id){
comercio.eliminaritem(id);
}
function mostrarproductos() {
    let productoscodigohtml = "";
    for (let i = 0; i < listado.length; i++) {
      let producto = `<div class="row row-cols-1 row-cols-md-4 g-1">
      <div class="card text-center" >
      <img src="${listado[i].img}" 
      class="card-img-top" 
      alt="">
      <div class="card-body">
          <h5 class="card-title">${listado[i].nombre}</h5>
          <p class="card-text">
            ${listado[i].descripcion}
          </p>
          <p class="card-text">${listado[i].precio}</p>
           <a href="#" class="btn btn-primary" onclick="hiceclick(${i});">AGREGAR AL CARRITO</a>
        </div>
        </div>`;
      productoscodigohtml += producto;
    }
    document.getElementById("catalogo-productos").innerHTML = productoscodigohtml;
  }
   mostrarproductos();
let comercio = new carrodecompras(listado);
