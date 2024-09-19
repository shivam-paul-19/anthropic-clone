import "./model.css";

function Model() {
    return (
        <div className="model">
            <div className="model-hd">
                <h1>The Claude model <br /> family</h1>
                <p className="hd-pr">Right-sized for any task, the Claude family of models <br /> offers the best combination of speed and performance.</p>
            </div><br />
            <div className="model-box">
                <div className="inner-model-box">
                    <div className="inner-model-box-2">
                        <span class="badge rounded-pill text-bg-dark">Light & fast</span><br /><br />
                        <h3 className="inner-cont-hd hd">Haiku</h3>
                        <p className="inner-cont-pr pr">Our fastest model that can execute lightweight actions, with industry-leading speed.</p>
                    </div>
                    <div className="in-content">
                    <div className="in-cont">
                        <span class="badge rounded-pill text-bg-dark">Hard-working</span><br /><br />
                        <h3 className="in-cont-hd hd">Sonnet</h3>
                        <p className="in-cont-pr pr">Our best combination of performance and speed for efficient, high-throughput tasks.</p>
                    </div>
                    </div>
                </div>
                <div className="out-content">
                    <div className="out-cont">
                        <span class="badge rounded-pill text-bg-dark">Powerful</span><br /><br />
                        <h3 className="out-cont-hd hd">Opus</h3>
                        <p className="out-cont-pr pr">Our highest-performing model, which can handle complex analysis, longer tasks with many steps, and higher-order math and coding tasks.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;