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
                            <div className="container-xl d-flex justify-content-center ">
                                <div className="text-center p-3">
                                    <img
                                        style={{ width: '150px' }}
                                        src="src/img/rois.png"
                                        alt="Muhammad Rois" />
                                    <h1 style={{marginTop:'-30px',fontWeight:'bold',fontSize:'26px'}}>Muhammad.Rois</h1>
                                
                                </div>

                            </div>

                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 pt-5">
                                    <h3>Catatanku</h3>
                                    <div className="list-group list-group-flush">
                                        <a
                                            href="#"
                                            className="list-group-item list-group-item-action active"
                                            aria-current="true"
                                        >
                                            Buku pemrograman
                                        </a>
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
                    </div>
                </div>

                <div className="text-center ">
                    <Footer />
                </div>


            </Guest>
        );
    }
}

export default Index;