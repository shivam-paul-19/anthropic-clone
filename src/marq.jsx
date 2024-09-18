import CompanyMarquee from "./companiesMarq"
import "./marq.css"

function Marque() {
    return (
        <div className="marqSec">
            <h1>Leading companies build <br /> 
                with Claude</h1><br /><br />
            <CompanyMarquee />
            <br /><br />
            <button type="button" class="btn btn-outline-dark">Read customer stories</button>
        </div>
    )
}

export default Marque;