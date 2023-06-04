import { Fragment } from "react";
import { GiOpenBook } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Fragment>
            <header className="navbar navbar-expand-sm navbar-light d-print-none">
                <div className="container-xl">
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        <Link to={'/'} className="nav-link navbar-brand-image">
                            <a>
                                <GiOpenBook style={{ height: '40px', width: '40px',hover:'red' }} />
                            </a>
                            <h2 className="mt-3">Rois.notes</h2>
                        </Link>
                    </h1>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="nav-item">
                            <Link to={'/contact'} className="nav-link d-flex lh-1 text-reset p-0">
                                <span
                                    className="avatar avatar-sm"
                                    style={{ backgroundImage: 'src/img/rois.jpeg' }}
                                />
                                <div className="d-none d-xl-block ps-2">
                                    <div>Roess</div>
                                    <div className="mt-1 small text-muted">Web Designer</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </header>

        </Fragment>
    )
} 