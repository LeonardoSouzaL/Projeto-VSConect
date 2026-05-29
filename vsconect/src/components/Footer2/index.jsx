import "./style.css"
import FooterComponent from "../FooterComponent"

function Footer2() {
    return (
        <footer id="footer2">
            <div className="container rodape">
                <FooterComponent/>

                <p>
                    Todos os direitos reservados ©.
                </p>
            </div>
        </footer>
    );
}

export default Footer2;