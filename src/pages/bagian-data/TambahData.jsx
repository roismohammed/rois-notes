import { Component } from "react";
import Admin from "../../layout/Admin";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
class TambahData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            namaBuku: '',
            judul: '',
            tanggal: '',
            isiBuku: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan', {
            namaBuku: this.state.namaBuku,
            judul: this.state.judul,
            tanggal: this.state.tanggal,
            isiBuku: this.state.isiBuku
        }).then(() => {
            toast("Data telah tersimpan!");
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e);
    }

    handleEditorChange = (content) => {
        this.setState({ isiBuku: content })
    }


    render() {
        return (
            <Admin>
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.handleSubmit} className="was-validated">
                            <h1>Tambah Data</h1>
                            <div className="col-md-4">
                                <label>Judul:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukkan judul buku"
                                    name="judul"
                                    onChange={this.handleChange} required/>
                                <div className="invalid-feedback">Judul harus di isi</div>

                                <label>Tanggal Di Buat:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Masukkan Tannggal "
                                    name="tanggal"
                                    onChange={this.handleChange}
                                />

                            </div>
                                <label htmlFor="">Isi Buku:</label>
                                <Editor
                                    apiKey="858j7u18k8wb7pt41w5urjfpeusf47tsp1fjysx244w7pz1h"
                                    onEditorChange={this.handleEditorChange} />

                            <button className="btn btn-secondary position-top-center" onClick={this.notify} >Simpan</button>
                            <ToastContainer />

                            <div>
                                <Link to={'/data/'}>
                                    <button className="btn btn-secondary">Liat Data</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Admin>
        );
    }
}
export default TambahData;