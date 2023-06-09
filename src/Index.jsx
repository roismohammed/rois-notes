import { Component } from "react";
import Guest from "./layout/Guest";
import { Link } from "react-router-dom";
import axios from "axios";
class Index extends Component {
    state = {
        buku: []
    }

    componentDidMount() {
        axios.get('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan/')
            .then((res) => {
                this.setState({
                    buku: res.data
                })
            })
    }
    render() {
        return (
            <Guest>
                <div className="page pt-5">
                    <div className="page-wrapper p-3 ">
                        <div className="page-body ">
                            <div className="container-xl d-flex justify-content-center ">
                                <div className="text-center p-3">
                                    <img
                                        style={{ width: '80px' }}
                                        src="./roes.png"
                                        alt="Muhammad Rois" />

                                    <h1
                                        style={{
                                            marginTop: '-0px',
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
                                <div className="col-md-6 pt-3">
                                    <h3>Catatanku</h3>
                                 {this.state.buku.map(data => (
                                       <div key={data.id} className="list-group list-group-flush" style={{ color: ' #55585A' }}>
                                       <Link
                                           style={{ color: ' #55585A', fontSize: '16px' }}
                                           className="list-group-item list-group-item-action border-top hover"
                                           aria-current="true"
                                           to={'/detail/' + data.id}
                                       >
                                           {data.judul}
                                       </Link>
                                      
                                   </div>
                                 ))}
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