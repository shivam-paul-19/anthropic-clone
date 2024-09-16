import "./footCon.css";

function FooterContent({links}) {
    return (
        <div className="foot-con">
            <ul className="foot-list">
                {links.map((l) => <li className="foot-link">{l}</li>)}
            </ul>
        </div>
    )
}

export default FooterContent;