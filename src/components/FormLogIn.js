import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

export function FormLogIn() {
    const [formType, setFormType] = useState("email");
    const [formValue, setFormValue] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const navigate = useNavigate();

    const toggleFormType = () => {
        if (formType === <FormattedMessage id="login.email" />) {
            setFormType(<FormattedMessage id="login.password" />);
            setFormValue("");
        } else {
            setFormType(<FormattedMessage id="login.email" />);
            setFormValue("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.value;

        console.log(value);
        if (value === "" || value === null) {
            alert(<FormattedMessage id="login.valid-value" />);
        } else {
            if (formType === "email") {
                // Aquí puedes realizar validaciones adicionales si es necesario
                setFormValue(value);
                toggleFormType();
            } else {
                navigate("/card")
                toggleFormType();
            }
        }
    };

    return (
        <div className="formulario">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="formInput" className="form-label custom-label">
                            {formType === "email" ? "Acceder" : "Contraseña"}
                        </label>
                        {formType === "email" && (
                            <p className="form-label"><FormattedMessage id="login.use-your-uniandes-accound" /></p>
                        )}
                        <input
                            name="input"
                            type={formType}
                            className="form-control"
                            id="formInput"
                            aria-describedby="emailHelp"
                            value={formValue}
                            onChange={(e) => setFormValue(e.target.value)}
                        />
                        {warningMessage && (
                            <div className="text-danger">{warningMessage}</div>
                        )}
                        <div id="emailHelp" className="form-text">
                        <FormattedMessage id="login.forgot-password" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={warningMessage}>
                        {formType === "email" ? "Siguiente" : "Iniciar Sesión"}
                    </button>
                </form>
            </div>
        </div>
    );
}