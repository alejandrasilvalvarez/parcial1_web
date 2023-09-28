import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function FormLogIn() {

    const [formTitle, setFormTitle] = useState("Acceder");

    const navigate = useNavigate();
    const submitt = e => {
        e.preventDefault();
        const email = e.target.email.value;

        console.log(email);
        if(email==="" || email===null){
            setFormTitle("Acceder");
        }
        else if (email!=="") {
            setFormTitle(e.target.email.value);
            navigate( "/cardPassword" , {
                title: email,
              })
        } else {
            setFormTitle("Acceder");
        }
    }
    

    return (
        <div className='formulario'>
            <div>
                <form onSubmit={submitt}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">{formTitle}</label>
                        <p for="exampleInputEmail1" class="form-label">Usa tu cuenta uniandes</p>
                        <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>


        </div>
    )
}
