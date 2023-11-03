
import logo5 from "../photos/logo5.png"

function Header() {

    return( 
    <>
    <header>
        <div className="container">
            <div className="logo">
                <img src={logo5} alt=""/>
                <a href="$" className="text">My Outfit</a>
            </div>
            <ul className="main-nav">
                <li><a href="$">Home</a></li>
                <li><a href="$">Styles</a></li>
                <li><a href="$">Rates</a></li>
                <li><a href="$">More</a></li>
            </ul>
        </div>
    </header>
    </>
    )
};

export default Header;