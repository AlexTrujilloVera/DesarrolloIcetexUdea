import { useEffect, useState } from "react";

function ProductElement(props){
    
    function addToCart(){
    props.add((arrayViejito)=>[...arrayViejito, {name:props.name, price:props.price,description:props.description}]);
            
    }
    return(
        <div class="card col-3 m-3">
            <img src="..." class ="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
               <P class="card-text">{props.description}</P>
               <div className="d-flex justify-content-around col-12">
               <button class ="btn btn-primary">{props.price}</button>
               <button type ="button" class="btn btn-success" onClick={addToCart}>
                Comprar
                </button>
                </div>
                </div>
        </div>

    );
}

export default function ProductList(props){
    const [products,setProducts] = useState([products]);
    let products = [{
        name:"dominios y hosting",
        price: 400,
        description: "adquiere el servicio ya",
    },
    {
        name:"creacion de pagina web",
        price: 200,
        description: "tu pagina en tu sitio",
    },
    {
        name:"posicionamiento",
        price: 1100,
        description: "rankea tu pagina en google",
    },

];
useEffect(()=>{
   fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" ,
   Headers:{
    accept:"application/json",
   },
   method:"GET",
   Node: "cors",
})
   .then(response => response.json())
    .then ((data)) =>{
      products.push({
        name:data.strDrink, 
        description:`Tiene${data.strCategory.lenght}`,
    });
    },[]; 
   return(
        <div className="col-8 f-flex-wrap justify-content-around">
            <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>
            {products.map(products) => {
                return (
                <ProductElement 
                name={products.name} 
                price={products.price} 
                description={products.description}
                add={props.setSelectItem}
                >
                </ProductElement>
                );                
            })}
        </div>
    );
}