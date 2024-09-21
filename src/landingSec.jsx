import "./landing.css";

function LandingSection() {
    return (
        <div className="land-con">
            <div className="content">
                <h1 className="main-head">Meet Claude</h1>
                <p className="main-content">Claude is AI for all of us. Whether you're brainstorming alone or building with a team of thousands, Claude is here to help.</p>
                <a href="https://claude.ai/"><button type="button" class="btn btn-dark land-btns">Try Claude</button></a>
                <a href="https://console.anthropic.com/"><button type="button" class="btn btn-light land-btns">Get API access</button></a>
            </div>
            <img src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1c42a8de70b220fc1737f6e95b3c0373637228db-1319x1512.gif&w=1920&q=75" alt="" height={650} />
        </div>
    )
}

export default LandingSection;