
import shirt from "../photos/t-shirt.gif"
import shoes from "../photos/shoes.gif"
import short from "../photos/short.gif"
import glasses from "../photos/glasses.gif"
import bracelet from "../photos/bracelet.gif"
import sweeter from "../photos/sweater.gif"

function Market() {

    return( 
    <>
    <div className="market">
        <h2 className="main-title"><span className="log">Market</span></h2>
        <div className="container">
            <div className="box">
                <div className="title"><a href="$">T-Shirts</a></div>
                <img src={shirt} alt="$" />
                <div className="price">
                    <span className="amount">$15</span>
                </div>
                <div className="buy"><a href="$">Buy Now</a></div>
            </div>
            <div className="box">
                <div className="title"><a href="$">Shoes</a></div>
                <img src={shoes} alt="$" />
                <div className="price">
                    <span className="amount"><del>%35</del>$25</span>
                </div>
                <div className="buy"><a href="$">Buy Now</a></div>
            </div>
            <div className="box">
                <div className="title"><a href="$">Glasses</a></div>         
                <img src={glasses} alt="$" />
                <div className="price">
                    <span className="amount">$35</span>
                </div>
                <div className="buy"><a href="$">Buy Now</a></div>
            </div>
            <div className="box">
                <div className="title"><a href="$">Shorts</a></div>              
                <img src={short} alt="$" />
                <div className="price">
                    <span className="amount">$5</span>
                </div>
                <div className="buy"><a href="$">Buy Now</a></div>
            </div>
            <div className="box">
                <div className="title"><a href="$">Sweater</a></div>
                <img src={sweeter} alt="$" />
                <div className="price">
                    <span className="amount"><del>%15</del>$10</span>
                </div>
                <div className="buy"><a href="$">Buy Now</a></div>
            </div>
            <div className="box">
                <div className="title"><a href="$">Bracelets</a></div>
                <img src={bracelet} alt="$" />
                <div className="price">
                    <span className="amount"><del>%25</del>$20</span>
                </div>
                <div className="buy"><a href="$">Buy Now</a></div>
            </div>
        </div>
    </div>
    </>
    )
};

export default Market;