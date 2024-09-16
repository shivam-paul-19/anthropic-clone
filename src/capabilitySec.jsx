import "./capabilitySec.css"
import CapaCard from "./capaCard";

function CapabilitySection() {
    return (
        <div className="capa">
            <h1 className="capa-head">Claude’s capabilities</h1>
            <div className="capa-content">
                <CapaCard 
                    image="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F917e321db9a92c976731ae620d3a5b2090aa7849-447x446.png&w=640&q=75" 
                    title="Advanced reasoning"
                    des="Claude can perform complex cognitive tasks that go beyond simple pattern recognition or text generation"
                />
                <CapaCard 
                    image="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F03b379d4ad85f640645d1fcea8e0f961a599b127-447x446.png&w=640&q=75"
                    title="Vision analysis"
                    des="Transcribe and analyze almost any static image, from handwritten notes and graphs, to photographs"
                />
                <CapaCard 
                    image="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F4564ee0f071ffb6376a9bb51fb9050d0d6398dbb-447x446.png&w=640&q=75" 
                    title="Code generation"
                    des="Start creating websites in HTML and CSS, turning images into structured JSON data, or debugging complex code bases"
                />
                <CapaCard 
                    image="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fcfc775a807665b1478f0e3047b28363dfb146c93-447x446.png&w=640&q=75" 
                    title="Multilingual processing"
                    des="Translate between various languages in real-time, practice grammar, or create multi-lingual content"
                />
            </div>
        </div>
    )
}

export default CapabilitySection;