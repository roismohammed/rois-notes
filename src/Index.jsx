import { Component } from "react";
import Guest from "./layout/Guest";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

class Index extends Component {

    render() {
        return (
            <Guest>
                <div className="page">
                    <Header />
                    <div className="page-wrapper p-3">
                        <div className="page-body ">
                            <div className="container-xl d-flex justify-content-center">
                                <div className="text-center">
                                    <img
                                        style={{ width: '150px' }}
                                        src="src/img/rois.png"
                                        alt="Muhammad Rois" />

                                    <h1 style={{ fontSize: '25px', marginTop: '-30px', fontWeight: 'bold' }}>Muhammad.Rois</h1>

                                    <div style={{ width: '400px' }}>
                                        <p style={{ fontSize: '16px', color: '#55585A' }}>Hai selamat datang buku catatanku, Buku ini berisi tulisan bahasa pemrograman dan buku lainnya.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 pt-5">
                                    <h3>Catatanku</h3>
                                    <table className="table">
                                        <thead className="sticky-top">
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Default</th>
                                                <td></td>
                                                <td></td>
                                                <td>Cell</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                    <div className="text-center fixed-bottom">
                        <Footer />
                    </div>
                

            </Guest>
        );
    }
}

export default Index;