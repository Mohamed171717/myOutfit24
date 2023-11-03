

import main1 from "../photos/main1.png";
import { FaMagnifyingGlass } from 'react-icons/fa6';

function Landing() {

    return( 
    <>
    <div className="landing">
        <div className="container">
            <div className="search">
                <form id="search">
                    <button type="button"><FaMagnifyingGlass /></button>
                    <input type="search" placeholder="Search" />
                </form>
            </div>
            <div className="info">
                <h1>Welcome To <span>My Outfit</span></h1>
                <p>Lorem ipsum dolor sit, abet consectetur adipisicing edit. Seep, quam!</p>
            </div>
            <div className="image">
                <img src={main1} alt="$" />
            </div>
        </div>
    </div> 
    </>
    )
};

export default Landing;