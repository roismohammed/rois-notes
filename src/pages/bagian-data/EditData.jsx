import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from "../../layout/Admin";

export default function EditData() {
    const { id } = useParams()
    const [edit, setEdit] = useState({})
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan/' + id)
            .then((res) => {
                setEdit(res.data)
                setContent(res.data.isiBuku);
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan/' + id, {
            judul: edit.judul,
            tanggal: edit.tanggal,
            isiBuku: content,
        })
            .then(() => {
                toast("Data telah tersimpan!");
            })
            .catch(() => {
                alert('Gagal di edit')
            })
    }

    const handleChange = (e) => {
        setEdit({
            [e.target.name]: e.target.value
        })
    }

    const handleEditorChange = (content) => {
        setContent(content);
    };
    
    
    return (
        <Admin>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <h1>Halaman Edit</h1>
                        <div className="col-md-4">
                            <label>Judul:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Masukkan judul buku"
                                name="judul"
                                value={edit.judul}
                                onChange={handleChange}
                            />
                            <label>Tanggal Di Buat:</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Masukkan Tanggal"
                                name="tanggal"
                                value={edit.tanggal}
                                onChange={handleChange}
                            />

                            <label htmlFor="">Isi Buku:</label>
                            <Editor
                                apiKey="858j7u18k8wb7pt41w5urjfpeusf47tsp1fjysx244w7pz1h"
                                onEditorChange={handleEditorChange}
                                value={content}
                                initialValue={content} // Meng Menggunakan state 'content' untuk value
                            />
                        </div>

                        <tr>
                            <td>
                                <button className="btn btn-secondary">Update</button>
                                <ToastContainer />
                            </td>
                            <td>
                                <Link to={'/data/'}>
                                    <button className="btn btn-secondary">Liat Data</button>
                                </Link>
                            </td>
                        </tr>
                    </form>
                </div>
            </div>
        </Admin>
    )
}
