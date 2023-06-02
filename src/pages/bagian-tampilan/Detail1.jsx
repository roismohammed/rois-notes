import { Link } from "react-router-dom";
import Guest from "../../layout/Guest";

export default function Detail1() {
    return (
        <Guest>
            <div className="container ">
                <div className="row d-flex justify-content-center p-3">
                    <div className="col-md-6">
                        <h1>Buku Pemrograman</h1>
                        <div className="list-group list-group-flush">
                            <Link
                                to={'/detail'}
                                className="list-group-item list-group-item-action active"
                                aria-current="true"
                            >
                                Buku pemrograman
                            </Link>
                            <a href="#" className="list-group-item list-group-item-action">
                                A second link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A third link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A fourth link item
                            </a>
                            <a className="list-group-item list-group-item-action disabled">
                                A disabled link item
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}