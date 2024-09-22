import "./navBar.css"

function NavBar() {
    return (
        <div className="navBar">
            <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
            <div class="container-fluid">
            <a className="navbar-brand" href="#"><img className="nav_logo" src="https://i.ibb.co/zbfdN6M/navlogo.png" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <div class="dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Claude</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Overview</a></li>
                            <li><a class="dropdown-item" href="https://www.anthropic.com/team">Team</a></li>
                            <li><a class="dropdown-item" href="https://www.anthropic.com/enterprise">Enterprise</a></li>
                            <li><a class="dropdown-item" href="https://www.anthropic.com/api">API</a></li>
                            <li><a class="dropdown-item" href="https://www.anthropic.com/pricing">Pricing</a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://www.anthropic.com/research">Research</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://www.anthropic.com/company">Company</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://www.anthropic.com/careers">Careers</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://www.anthropic.com/news">News</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            
        </div>
    )
}

export default NavBar;