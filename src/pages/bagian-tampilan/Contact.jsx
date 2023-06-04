import { Component } from "react";
import Guest from "../../layout/Guest";
import { RiFacebookCircleFill } from "react-icons/ri";
class Contact extends Component {
    render() {
        return (
            <Guest>
                <div className="container">
                    <div style={{ backgroundColor: '#e2e8f0', marginTop: '20px' }}>
                        <h1 className="text-center border-bottom p-3">Contact Us</h1>
                        <div className="">
                            <div className="row p-5">
                                <div className="col-md-6 p-3">
                                    <h2>About Me</h2>
                                    <h3> Frontend Developer!</h3>
                                    <p>Halo, nama saya Muhammad Rois. Saya seorang Junior Front-End Programmer dengan keahlian dalam pengembangan menggunakan bahasa pemrograman seperti JavaScript, Bootstrap, dan ReactJS. Saya juga memiliki pengalaman dalam desain dan implementasi database, serta integrasi sistem dengan layanan pihak ketiga seperti API dan platform lainnya.</p>

                                    {/* bagian skill */}
                                    <h4 className="p-3">
                                        <div className="sosmed">
                                            <RiFacebookCircleFill style={{ width: '25px', height: '25px' }} />
                                            Muhammad Rois
                                        </div>
                                    </h4>

                                </div>
                                {/* bagian form input */}
                                <div className="col-md-6 p-3">
                                    <div className="form">
                                        <h2>Kirim pesan anda</h2>
                                        <label htmlFor="">Nama Anda :</label>
                                        <input type="text" className="form-control" placeholder="Masukkan Nama " />

                                        <label htmlFor="">E-mail Anda :</label>
                                        <input type="text" className="form-control" placeholder="Masukkan Alamat Email " />

                                        <label htmlFor="">Pesan Anda :</label>
                                        <textarea id="" cols="30" rows="10" className="form-control"></textarea>

                                        <button className="btn btn-secondary">Post</button>
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

export default Contact;