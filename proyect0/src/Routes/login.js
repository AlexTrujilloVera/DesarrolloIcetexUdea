import login from "../Routes/registro";

function Login(){

    function enviardatos(){
        event.preventDefault();

        fetch("/login",{
            method:"post",
            headers:{
                "Content-type": "Application/json",
            },
            body: JSON.stringify(){
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        
        })
    })
}
    return(
        <>
        <div className="container">
        <form className="col-4 d-flex flex-column justify-content-around" onSubmit={"enviardatos"}>
           <label>usuarios</label>
           <input id="username"></input>
           <label>contraseña</label>
           <input type="password" id="password"></input>
           <input type="submit" value="iniciar sesion"></input>
        </form>

        </div>
        </>
    )
}