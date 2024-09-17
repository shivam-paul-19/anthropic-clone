import "./whycard.css"

function Whycard({cardHead, cardPara, color, image, des, head}) {
    return (
        <>
            <div className="why-card">
                <div className="why-card-con">
                    <h3 className="why-card-head">{cardHead}</h3>
                    <p className="why-card-para">{cardPara}</p>
                </div>
                <div className="why-card-img" style={{
                    backgroundColor: color[0], 
                    backgroundImage: `url(${image[0]})`,
                    backgroundSize: "cover"
                }}>
                    <h4>{des[0]}</h4> 
                    <p>{head[0]}</p>
                </div>
                <div className="why-card-img" style={{
                    backgroundColor: color[1], 
                    backgroundImage: `url(${image[1]})`,
                    backgroundSize: "cover"
                }}>
                    <h4>{des[1]}</h4> 
                    <p>{head[1]}</p>
                </div>
            </div>
        </>
    )
}

export default Whycard;