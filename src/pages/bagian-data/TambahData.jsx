import { Component } from "react";
import Admin from "../../layout/Admin";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
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
            console.log('Berhasil ')
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
        this.setState({isiBuku:content})
    }


    render() {
        return (
            <Admin>
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.handleSubmit}>
                            <h1>Tambah Data</h1>
                            <div className="col-md-4">
                                <label>Nama Buku:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukkan nama buku"
                                    name="namaBuku"
                                    onChange={this.handleChange}
                                />

                                <label>Judul:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukkan judul buku"
                                    name="judul"
                                    onChange={this.handleChange} />


                                <label>Tanggal Di Buat:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Masukkan Tannggal "
                                    name="tanggal"
                                    onChange={this.handleChange}
                                />

                                <label htmlFor="">Isi Buku:</label>
                                <Editor 
                                apiKey="858j7u18k8wb7pt41w5urjfpeusf47tsp1fjysx244w7pz1h"
                                onEditorChange={this.handleEditorChange} />
                            </div>

                            <button className="btn btn-secondary">Simpan</button>

                        </form>
                    </div>
                </div>
            </Admin>
        );
    }
}
export default TambahData;