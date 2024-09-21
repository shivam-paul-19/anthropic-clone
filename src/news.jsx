import NewsCard from "./newsCard";
import "./news.css"

function News() {
    return (
        <div className="news-sec">
            <div className="news-head">
                <h1 className="news-head-title">Company News</h1>
                <a className="see-all" href="https://www.anthropic.com/news?subjects=announcements"><p>See All</p></a>
            </div><br />
            <div className="news-cards-sec">
                <NewsCard info={"Salesforce teams up with Anthropic to enhance Einstein capabilities with Claude"}/>
                <NewsCard info={"Artifacts are now generally available"} date={"Aug 27, 2024"}/>
                <NewsCard info={"Expanding our model safety bug bounty program"} date={"Aug 8, 2024"} />
            </div>
        </div>
    )
}

export default News;