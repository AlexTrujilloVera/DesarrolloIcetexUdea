let listaProductos = [
    {
        name: "Dominio & Hosting",
        precio: 320000,
        descripcion:"el cliente compra su servicio de dominio y hosting",
        img:"/images/creacionpaginas.jpg",
    },
{
        name: "crear pagina web",
        precio: 1000000,
        descripcion:"el cliente compra su pagina web a su gusto adicional se le hacen a la medida",
        img:"./images/posicionamiento.jpg",
},
{
        name: "posicionar pagina web",
        precio: 400000,
        descripcion:"el cliente compra su posicionamiento web",
        img:"/images/ventahosting.jpg",       
},
];
function hiceClick(id){
  eCommerceShop.agregarItem(id);
}

function eliminarClick(id){
  eCommerceShop.EliminarItem(id);

}


function mostrarProductos() {
  let productosCodigoHTML = "";
  for (let i = 0; i < listaProductos.length; i++) {
    let producto = `<div class="card d-flex" style="width: 18rem">
    <img 
    src="${listaProductos[i].img}" 
    class="card-img-top d-flex align-self-center" 
    alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${listaProductos[i].name}</h5>
      <p class="card-text">
      ${listaProductos[i].descripcion}
      </p>
      <p class="card-text">${listaProductos[i].precio}</p>
    <a href="#" class="btn btn-primary" onclick="hiceClick(${i});">Comprar</a>
    </div>
    </div>`;
    productosCodigoHTML += producto;

   }
  document.getElementById("Catalogo-productos").innerHTML=productosCodigoHTML;
}
 mostrarProductos();

 let eCommerceShop = new Carrito(listaProductos);