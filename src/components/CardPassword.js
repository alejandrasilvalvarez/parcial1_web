import { useNavigate } from "react-router-dom";




export function CardPassword() {
    const navigate = useNavigate();
    const submitt = e => {
        e.preventDefault();
        const pass = e.target.password.value;

        if (pass!= null || pass !="") {
            navigate("/card")
        }
    }
    return (
        <div className="formulario">
            <div >
            <form onSubmit={submitt}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">itemId.title</label>
                        <p for="exampleInputEmail1" class="form-label">Usa tu cuenta uniandes</p>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input name="password" type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>

    )
}