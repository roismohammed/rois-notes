import { Fragment } from "react";

export default function Header() {
    return (
        <Fragment>
            <header className="navbar navbar-expand-sm navbar-light d-print-none">
                <div className="container-xl">
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        <a href="#">
                            <img
                                src="https://preview.tabler.io/static/logo.svg"
                                width={110}
                                height={32}
                                alt="Tabler"
                                className="navbar-brand-image"
                            />
                        </a>
                    </h1>
                    <div className="navbar-nav flex-row order-md-last">
                        <div className="nav-item">
                            <a href="#" className="nav-link d-flex lh-1 text-reset p-0">
                                <span
                                    className="avatar avatar-sm"
                                    style={{ backgroundImage: 'src/img/rois.jpeg' }}
                                />
                                <div className="d-none d-xl-block ps-2">
                                    <div>Roess</div>
                                    <div className="mt-1 small text-muted">Web Designer</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </header>

        </Fragment>
    )
} 