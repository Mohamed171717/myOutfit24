
import logo from "../photos/logo.png"
import main from "../photos/main.jpg"
import {  
    FaFacebook, 
    FaWhatsapp, 
    FaTwitter, 
    FaYoutube,
    FaMapLocationDot,
    FaClockRotateLeft,
    FaPhoneVolume,
    FaHeart,
    FaRegCopyright
} from 'react-icons/fa6';

function Footer() {

    return( 
    <>
    <div className="footer">
        <div className="image">
            <img src={logo} alt="$" />
        </div>
        <div className="container">
            <div className="box icon">
                <ul className="social">
                    <li>
                        <a href="$" className="facebook">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="$" className="whatsapp">
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li>
                        <a href="$" className="twitter">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="$" className="youtube">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
                <p className="text">Lorem ipsum dolor sit abet consectetur adipisicing edit. Veritas, valutas!</p>
            </div>
            <div className="box">
                <div className="line">
                    <FaMapLocationDot className="i" style={{marginRight: "5px", color: "#d9d9d9"}} />
                    <div className="info">egypt, cairo, Lorem ipsum dolor sit abet</div>
                </div>
                <div className="line">
                    <FaClockRotateLeft className="i" style={{marginRight: "5px", color: "#d9d9d9"}}/>
                    <div className="info">egypt, cairo, Lorem ipsum dolor sit abet</div>
                </div>
                <div className="line">
                    <FaPhoneVolume className="i" style={{marginRight: "5px", color: "#d9d9d9"}}/>
                    <div className="info">egypt, cairo, Lorem ipsum dolor sit abet</div>
                </div>
            </div>
            <div className="box footer-gallery">
                <img src={main} alt="$" />
            </div>
        </div>
        <p className="copyright"> made with
            <span><FaHeart style={{marginLeft: "3px"}}/>
            </span> by My Outfit<FaRegCopyright style={{fontSize: "10px", marginLeft: "2px"}}/> 2023
        </p>
    </div>
    </>
    )
};

export default Footer;