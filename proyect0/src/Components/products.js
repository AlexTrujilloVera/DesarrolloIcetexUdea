function ProductElement(props){
    return(
        <div class="card col-3">
            <img src="..." class ="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
               <P class="card-text">{props.description}</P>
               <button class ="btn btn-primary">{props.price}</button>
            </div>
        </div>

    );
}

export default function ProductList(){
    return(
        <div className="col-8 f-flex-wrap justify-content-around">
            <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>
            <ProductElement name="Hosting" description="adquiere tu servicio ya" price={450}></ProductElement>
            <ProductElement></ProductElement>
            <ProductElement></ProductElement>
        </div>
    );
}