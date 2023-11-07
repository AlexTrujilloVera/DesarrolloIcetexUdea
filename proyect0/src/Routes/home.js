import Eshop from "../Components/eShop";
import index from "../Components/index";
import ProductList from "../Components/products";

function Home(){
    return(
        <>
        <index canSearch={true}></index>
        <Eshop></Eshop>
        </>
    );
}

export default Home;