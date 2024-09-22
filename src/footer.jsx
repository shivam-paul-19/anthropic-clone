import "./footer.css"
import FooterContent from "./footCon";

function Footer() {
    const items = ["Claude", "API", "Team", "Pricing", "Research", "Company", "Customers", "News", "Careers"];
    const items1 = ["Press Inquiries", "Support", "Status", "Twitter", "LinkedIn", "Availability"];
    const items2 = [
        "Terms of Service - Consumer",
        "Terms of Service - Commercial",
        "Privacy Policy",
        "Usage Policy",
        "Responsible Disclosure Policy",
        "Compliance",
        "Privacy Choices"
    ];
      
    return (
        <div className="footer">
            <img src="https://i.ibb.co/d2DX6Yr/anth-logo-white.png" alt="" height={35}/>
            <div className="link-sec">
                <FooterContent links={items}/>
                <FooterContent links={items1}/>
                <FooterContent links={items2}/>
                <FooterContent links={["© 2024 Anthropic PBC"]}/>
            </div>
        </div>
    )
}

export default Footer;