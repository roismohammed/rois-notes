import { Link, useParams } from "react-router-dom";
import Guest from "../../layout/Guest";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Detail1() {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        axios.get('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan/' + id)
            .then((res) => {
                setDetail(res.data)
            })
    })
    return (
        <Guest>
            <div className="container ">
                <div className="row d-flex justify-content-center p-3">
                    <div className="col-md-6">
                    <Link to={'/'}>Beranda</Link>
                        <h1>Buku Pemrograman</h1>
                        <div className="list-group list-group-flush">
                            <Link
                                to={'/detail'}
                                className="list-group-item list-group-item-action active"
                                aria-current="true"
                            >{detail.namaBuku}
                            </Link>
                            <a href="#" className="list-group-item list-group-item-action">
                                CSS
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                Javascript
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                Bootstrap
                            </a>
                            <a className="list-group-item list-group-item-action ">
                                A disabled link item
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}