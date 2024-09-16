import "./card.css"

function CapaCard({title, image, des}) {
    return (
        <div className="capa-card">
            <img src={image} alt="" height={200}/>
            <p className="card-title">{title}</p>
            <p className="card-con">{des}</p>
        </div>
    )
}

export default CapaCard;