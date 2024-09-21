import "./graph.css"

function GraphSection() {
    return (
        <div className ="graph-sec">
            <div className="graph-con">
                <h5><span class="badge rounded-pill text-bg-dark">New</span></h5>
                <p className="graph-head">Introducing Claude 3.5 Sonnet</p>
                <p className="graph-para">Raising the industry bar for intelligence with the speed and price required for high-volume use cases at scale.</p><br />
                <a href="https://www.anthropic.com/news/claude-3-5-sonnet"><button type="button" class="btn btn-dark">Read the blog post</button></a>
            </div>
            <img src="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F76c9587c5833e3d047b803ba9639eddd4752c3dc-995x800.png&w=1080&q=75" alt="" height={400}/>
        </div>
    )
}

export default GraphSection;