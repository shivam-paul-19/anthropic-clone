import "./whysec.css"
import Whycard from "./whyCard";

function WhySection() {
    return (
        <div className="why-sec">
            <div className="why-head">
                <h1>Why Claude?</h1>
                <p>Anthropic builds frontier AI models backed by uncompromising integrity.</p>
            </div>
            <Whycard 
                cardHead={"Secure"}
                cardPara={"With accessibility via AWS and GCP, SOC 2 Type II certification, and HIPAA compliance options, Claude adheres to the security practices your enterprise demands."}
                color={["rgb(235, 219, 188)", "rgb(240, 239, 234)"]} 
                image={[
                    "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F46100ba230bc5524e956d0efa5954992cbe2f54f-800x800.png&w=640&q=75",
                    "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F8ba8cd8a16343a0568a41b074f759f98b5e1012a-800x800.png&w=640&q=75"
                ]}
                head={["Featured paper", "Featured post"]}
                des={["Many-shot jailbreaking", "Challenges in red teaming AI systems"]} 
            />
            <div className="hrLine"></div>
            <Whycard 
                cardHead={"Trustworthy"}
                cardPara={"Claude combines best-in-class jailbreak resistance and misuse prevention to mitigate brand risk for our customers."}
                color={["rgb(230, 228, 221)", "rgb(235, 219, 188)"]} 
                image={[
                    "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fd9f8bcbb959a6b08160fecdf82fd532a95d550ac-800x800.png&w=640&q=75",
                    "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F8dfc14664736799681e78b53ce2022c63413738f-800x800.png&w=640&q=75"
                ]}
                head={["Featured paper", "Featured paper"]}
                des={["Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned", "Evaluating and Mitigating Discrimination in Language Model Decisions"]} 
            />
            <div className="hrLine"></div>
            <Whycard 
                cardHead={"Reliable"}
                cardPara={"Claude empowers you to deploy AI to business critical use cases, with very low hallucination rates and very high accuracy over long documents."}
                color={["rgb(204, 120, 92)", "rgb(240, 239, 234)"]} 
                image={[
                    "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F49c835d157ac068f9034cdb12d96cdcf6aaa773e-800x800.png&w=640&q=75",
                    "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F2104d325522c79f1f985ace66f7a82acde605b1d-1600x1600.png&w=640&q=75"
                ]}
                head={["Featured post", "Featured paper"]}
                des={["Claude's Character", "Question Decomposition Improves the Faithfulness of Model-Generated Reasoning"]} 
            />
        </div>
    )
}

export default WhySection;