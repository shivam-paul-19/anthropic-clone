import "./lowerCard.css"

function LowerCards() {
    return (
        <div className="low-card">
            <div className="cards f">
                <div className="inner inner-f">
                    <div className="inner-con">
                        <p className="in-head">Talk to Claude</p>
                        <p className="in-con">Claude is fast, capable, and truly conversational. Work with Claude to help you do your best work</p><br />
                        <a href="https://claude.ai/"><button type="button" class="btn btn-dark">Try claude</button></a>
                    </div>
                    <img src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F18687444e3a5db47080c1019b3fbd705312e40e1-2112x1344.png&w=3840&q=75" alt="" height={250}/>
                </div>
            </div>
            <div className="cards l">
                <div className="inner inner-l">
                    <div className="inner-con">
                        <p className="in-head">Build with Claude</p>
                        <p className="in-con">Use the API to integrate Claude into you and your customer workflows to let AI transform your business</p><br />
                        <a href="https://console.anthropic.com/"><button type="button" class="btn btn-light">Get API access</button></a>
                    </div>
                    <img src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F4198620f5b983ab23207c8e02ad1bbcf5c0c4702-1160x916.png&w=1200&q=75" alt="" height={250} />
                </div>
            </div>
        </div>
    )
}

export default LowerCards;