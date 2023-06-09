import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditData() {
    const { id } = useParams()
    const [edit, setEdit] = useState([])

    useEffect(() => {
        axios.get('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan' + id)
            .then((res) => {
                setEdit(res.data)
            })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan' + id, {
            judul: edit.judul,
            tanggal: edit.tanggal,
            isiBuku: edit.isiBuku
        }).then(() => {
            toast("Data telah tersimpan!");
        }).catch(() => {
            alert('gagal di edit')
        })
    }

    const handleChange = (e) => {
        setEdit({
            [e.target.value] : e.target.name
        })
    }

    const handleEditorChange = (content) => {
        this.setEdit({isiBuku:content})
    }
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit} className="was-validated">
                    <h1>Halaman Edit</h1>
                    <div className="col-md-4">
                        <label>Judul:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan judul buku"
                            name="judul"
                            onChange={handleChange} required />
                        <div className="invalid-feedback">Judul harus di isi</div>

                        <label>Tanggal Di Buat:</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Masukkan Tannggal "
                            name="tanggal"
                            onChange={handleChange}
                        />

                        <label htmlFor="">Isi Buku:</label>
                        <Editor
                            apiKey="858j7u18k8wb7pt41w5urjfpeusf47tsp1fjysx244w7pz1h"
                            onEditorChange={handleEditorChange} />
                    </div>

                    <button className="btn btn-secondary" onClick={this.notify} >Simpan</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}