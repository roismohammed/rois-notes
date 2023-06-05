import { Component } from "react";
import Guest from "./layout/Guest";
import { Link } from "react-router-dom";
import axios from "axios";
class Index extends Component {
    state = {
        buku:[]
    }

    componentDidMount(){
        axios.get('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan')
        .then((res) => {
            this.setState({
                buku:res.data
            })
        })
    }
    render() {
        return (
            <Guest>
                <div className="page">
                    <div className="page-wrapper p-3 ">
                        <div className="page-body ">
                            <div className="container-xl d-flex justify-content-center ">
                                <div className="text-center p-3">
                                    <img
                                        style={{ width: '150px' }}
                                        src="./rois.png"
                                        alt="Muhammad Rois" />

                                    <h1
                                        style={{
                                            marginTop: '-30px',
                                            fontWeight: 'bold',
                                            fontSize: '26px'
                                        }}>Muhammad.Rois</h1>

                                    <div >
                                        <p style={{ fontSize: '16px', color: ' #55585A' }} >Hai selamat datang di buku catatanku, Buku ini berisi tulisan pemrograman dan buku tentang IT atau lainnya.

                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 pt-5">
                                    <h3>Catatanku</h3>
                                    <div className="list-group list-group-flush" style={{ color: ' #55585A' }}>
                                        <Link
                                            style={{ color: ' #55585A', fontSize: '16px' }}
                                            to={'/detail1/'}
                                            className="list-group-item list-group-item-action active hover"
                                            aria-current="true"
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
                </div>
            </Guest>
        );
    }
}

export default Index;