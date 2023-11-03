
import style1 from "../photos/style1.png"
import style2 from "../photos/style2.png"
import style3 from "../photos/style3.jpg"
import style4 from "../photos/style4.png"

function Styles() {

    return( 
    <>
    <div className="styles">
        <h2 className="main-title"><span className="log">Styles</span></h2>
        <div className="container">
            <div className="box">
                <div className="image ">
                    <img src={style1} alt="$" />
                </div>
                <div className="subject">
                    <h3>classNameic Style</h3>
                    <p>Lorem ipsum dolor sit abet consectetur adipisicing edit. Cum, libero.</p>
                </div>
                <div className="link">
                    <a href="$">Read More</a>
                </div>
            </div>
            <div className="box">
                <div className="image ">
                    <img src={style2} alt="$" />
                </div>
                <div className="subject">
                    <h3>Formal Style</h3>
                    <p>Lorem ipsum dolor sit abet consectetur adipisicing edit. Cum, libero.</p>
                </div>
                <div className="link">
                    <a href="$">Read More</a>
                </div>
            </div>
            <div className="box">
                <div className="image ">
                    <img src={style3} alt="$" />
                </div>
                <div className="subject">
                    <h3>Training Style</h3>
                    <p>Lorem ipsum dolor sit abet consectetur adipisicing edit. Cum, libero.</p>
                </div>
                <div className="link">
                    <a href="$">Read More</a>
                </div>
            </div>
            <div className="box">
                <div className="image ">
                    <img src={style4} alt="$" />
                </div>
                <div className="subject">
                    <h3>Casual Style</h3>
                    <p>Lorem ipsum dolor sit abet consectetur adipisicing edit. Cum, libero.</p>
                </div>
                <div className="link">
                    <a href="$">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </>
    )
};

export default Styles;
