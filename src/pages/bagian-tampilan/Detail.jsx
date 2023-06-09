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
            <div className="container pt-5">
                <div className="row">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 pt-5">
                            <Link to={'/'}>Beranda</Link>
                            <h1>Isi Buku  | {detail.judul} </h1>
                            <div className="list-group list-group-flush" style={{ color: ' #55585A' }}>
                            <p style={{fontSize:'16px'}} dangerouslySetInnerHTML={{__html:detail.isiBuku}}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}