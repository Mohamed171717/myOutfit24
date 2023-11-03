
import color1 from "../photos/color1.jpg"
import color2 from "../photos/color2.jpg"
import color3 from "../photos/color3.jpg"
import color4 from "../photos/color4.jpg"
import color5 from "../photos/color5.jpg"
import color6 from "../photos/color6.jpg"
import color7 from "../photos/color7.jpg"
import color8 from "../photos/color8.jpg"

function Matching() {

    return( 
    <>
    <div className="matching">
        <h2 className="main-title"><span className="log">Color Match </span></h2>
        <div className="container">
            <div className="box">
                <div className="image">
                    <img src={color1} alt="$" />
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={color2} alt="$" />
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={color3} alt="$" />
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={color4} alt="$" />
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={color5} alt="$" />
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={color6} alt="$" />
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={color7} alt="$" />
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={color8} alt="$" />
                </div>
            </div>
        </div>
    </div>
    </>
    )
};

export default Matching;