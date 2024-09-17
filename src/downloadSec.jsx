import "./downloadSec.css"

function DownloadSection() {
    return (
        <div className="down">
            <div className="down-img"></div>
            <div className="down-con">
                <h4 className="down-head">Take Claude with you</h4>
                <p className="down-para">Talk to Claude, anywhere you go. Brainstorm ideas, get answers, and analyze images on the go. The Claude apps put the power of frontier intelligence in your back pocket.</p>
                <img src="./assets/gplay.png" alt="" height={50}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img src="./assets/App-Store.png" alt="" height={50}/>
            </div>
        </div>
    )
}

export default DownloadSection;