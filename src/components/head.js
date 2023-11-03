
import { 
    FaEnvelope, 
    FaPhoneVolume, 
    FaFacebook, 
    FaWhatsapp, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa6';

function Head() {

    return( 
        <>
        <div className="head">
        <div className="container">
            <div className="info"> 
                <a href="$">< FaEnvelope style={{marginRight: "5px"}} /> example@gmail.com</a>
                <a href="$"><FaPhoneVolume style={{margin: "0 7px"}} />+55 255 6758 88</a>
            </div>
            <div className="icons">
                <a href="$" className="facebook"><FaFacebook className="i" /></a>
                <a href="$" className="whatsapp"><FaWhatsapp className="i" /></a>
                <a href="$" className="twitter"><FaTwitter className="i" /></a>
                <a href="$" className="youtube"><FaYoutube className="i" /></a>
            </div>
        </div>
        </div> 
        </>
    )
};

export default Head;