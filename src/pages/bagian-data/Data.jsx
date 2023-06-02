import axios from "axios";
import { Component } from "react";

class Data extends Component {
    state = {
        buku: []
    }

    componentDidMount() {
        axios.get('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan')
            .then((res) => {
                this.setState({
                    buku: res.data
                })
            })
    }

    handleDelete = (id) => {
        axios.delete('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan/' + id)
            .then(() => {
                alert('Berhasil')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Data</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama Buku</th>
                            <th scope="col">Judul Buku</th>
                            <th scope="col">Tanggal Di Buat</th>
                            <th scope="col">Isi buku</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {this.state.buku.map(data => {
                        return (
                            <tbody key={data.id}>
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.namaBuku}</td>
                                    <td>{data.judul}</td>
                                    <td>{data.tanggal}</td>
                                    <td>{data.isiBuku}</td>
                                    <td>
                                        <button onClick={() => this.handleDelete(data.id)}>Hapus</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>

            </div>
        );
    }
}

export default Data;