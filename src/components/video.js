
import video from "../photos/video.mp4"

function Video() {

    return( 
    <>
    <div className="video">
        <video autoPlay muted loop>     
            <source src={video} type="video/mp4" />  
        </video>
        <div className="links">
            <a className="sign" href="$">Sign Up</a>
            <a className="lg" href="$">Log In</a>
        </div>
    </div>
    </>
    )
};

export default Video;
