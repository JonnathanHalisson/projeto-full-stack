import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div>
            <Link to="/">Inicial <br/></Link>
            <Link to="/faculdade">faculdade<br/></Link>
            <Link to="/noticias">noticias<br/></Link>
        </div>
    )
}

export default Navbar