import "./style.css"
import {Link} from "react-router-dom"

function CardDev(props) {
    
    function verficarListaTechs() {
        
        if (typeof props.listaTech === "string") {
            
            return JSON.parse(props.listaTech)

        } else {
            
            return props.listaTech

        }
    }

    return (
        <div className="card_dev">

            <div className="grupo_contato">
                <img src={"http://localhost:3000/static" + props.foto} alt=""></img>

                <div className="contato_dev">

                    <Link to={"/perfil/" + props.id}>
                        <h2>{props.nome}</h2>
                    </Link>
                    <p>{props.email}</p>

                </div>
            </div>
            <div className="techs">
                {verificarListaTechs()}
            </div>
        </div>
    )
}