import "./navBar.css"

function NavBar() {
    return (
        <div className="navBar">
            <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
            <div class="container-fluid">
            <a className="navbar-brand" href="#"><img className="nav_logo" src="./assets/navlogo.png" alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Claude</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Overview</a></li>
                            <li><a class="dropdown-item" href="#">Team</a></li>
                            <li><a class="dropdown-item" href="#">Enterprise</a></li>
                            <li><a class="dropdown-item" href="#">API</a></li>
                            <li><a class="dropdown-item" href="#">Pricing</a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Research</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Company</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Careers</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            
        </div>
    )
}

export default NavBar;