import Logo from '../../assets/Logo.png';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo"></img>
            <p>Proyecto creado por Maria Trinidad Quiroz, Diciembre 2022 <i className="fa-solid fa-heart fa-2xs"></i> </p>
            <div></div>
            <ScrollToTop smooth />
        </footer>
    )
}

export default Footer;