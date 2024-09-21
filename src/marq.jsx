import CompanyMarquee from "./companiesMarq"
import "./marq.css"

function Marque() {
    return (
        <div className="marqSec">
            <h1>Leading companies build <br /> 
                with Claude</h1><br /><br />
            <CompanyMarquee />
            <br /><br />
            <a href="https://www.anthropic.com/customers"><button type="button" class="btn btn-outline-dark">Read customer stories</button></a>
        </div>
    )
}

export default Marque;