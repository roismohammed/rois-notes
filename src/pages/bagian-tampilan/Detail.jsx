import { Link, useParams } from "react-router-dom";
import Guest from "../../layout/Guest";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {
    const { id } = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios.get('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan/' + id)
            .then((res) => {
                setDetail(res.data)
            }).catch((err) => {
                console.log(err)
            })
    })
    return (
        <Guest>
            <div className="container">
                <div className="row">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 pt-5">
                            <Link to={'/'}>Beranda</Link>
                            <h1>Daftar Buku </h1>
                            <div className="list-group list-group-flush" style={{ color: ' #55585A' }}>
                                <Link
                                    style={{ color: ' #55585A', fontSize: '16px' }}
                                    className="list-group-item list-group-item-action active hover"
                                    aria-current="true"
                                    to={'/detail/:id'}
                                >
                                    Buku pemrograman
                                </Link>
                                <Link className="list-group-item list-group-item-action" style={{ color: ' #55585A', fontSize: '16px' }}>
                                    Buku Teknik Komputer Jaringan (TKJ)
                                </Link>
                                <Link className="list-group-item list-group-item-action" style={{ color: ' #55585A', fontSize: '16px' }}>
                                    Buku Belajar edit Video
                                </Link>
                                <Link className="list-group-item list-group-item-action" style={{ color: ' #55585A', fontSize: '16px' }}>
                                    Buku Tentang Informasi Teknologi (IT)
                                </Link>
                                <Link className="list-group-item list-group-item-action " style={{ color: ' #55585A', fontSize: '16px' }}>
                                    A disabled link item
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}