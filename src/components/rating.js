
import rate1 from "../photos/rate1.png"
import rate2 from "../photos/rate2.png"
import rate3 from "../photos/rate3.jpg"
import { 
    FaStar, 
    FaRegStar, 
    FaArrowDown 
} from "react-icons/fa6"

function Rating() {

    return( 
    <>
    <div className="rating">
        <h2 className="main-title"><span className="log">Ratings</span></h2>
        <h3 className="title">This Rating Based On Quality And Best Price</h3>
        <div className="container">
            <div className="box">
                <img src={rate1} alt="$" />
                <h3>Shirt</h3> 
                <hr />   
                <div className="rate">
                    <div className="icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <span>Good</span>
                </div>
                <hr />
                <div className="info">
                    <a href="$">Details</a> 
                    <FaArrowDown className="i" />
                </div>
            </div>
            <div className="box">
                <img src={rate2} alt="$" />
                <h3>Shoes</h3>
                <hr />
                <div className="rate">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>Excellent</span>
                </div> 
                <hr />     
                <div className="info">
                    <a href="$">Details</a> 
                    <FaArrowDown className="i" />
                </div>
            </div>
            <div className="box">
                <img src={rate3} alt="$" />
                <h3>Watch</h3>
                <hr />
                <div className="rate">
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <span>Bad</span>
                </div> 
                <hr />              
                <div className="info">
                    <a href="$">Details</a> 
                    <FaArrowDown className="i" />
                </div>
            </div>
        </div>
    </div> 
    </>
    )
};

export default Rating;
