import "./newsCard.css"

function NewsCard({info, date}) {
    return (
        <div className="news-card">
            <p>Announcement</p>
            <h3 className="info">{info}</h3>
            <p className="date">{date}</p>
        </div>
    )
}

export default NewsCard;