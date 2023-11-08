import React, {useState} from "react";
import ReactDOM from "react-dom/client";

function registro(){
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    })

    const handleInput =(e) =>{
        const{name,value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    };

    const enviarFormulario = (e) =>{
        e.preventDefault();

        fetch("localhost/Registro" ,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(formData),
        });

    }; 
    return(
        <div className="formulario-registro container d-flex flex-column-col4 vh-100 justify-content-center">
          <form>
            <input type="text" placeholder="usuario" value={formData.username} name="username" onChange={handleInput}></input>
            <input type="password" placeholder="contraseña" value={formData.password} name="password" onChange={handleInput}></input>
            <input type="submit"  value={"ingresar"}></input>
            </form>
        </div>
    );
}

export {registro};