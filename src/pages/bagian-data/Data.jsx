import axios from "axios";
import { Component } from "react";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

class Data extends Component {
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

    handleDelete = (id) => {
        axios.delete('https://63f175f8ff1b45a1a44c803d.mockapi.io/Catatan/' + id)
            .then(() => {
                alert('Berhasil')
                this.componentDidMount()
            })
    }

    handleSearch = (e) => {
        if (e.target.value !== '') {
            let bukuDiFilter = this.state.buku.filter((buku) => {
                return buku.judul.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
            })
            this.setState({
                buku: bukuDiFilter
            })
        } else (
            this.componentDidMount()
        )
    }

    render() {
        return (
            <div className="container pt-5" id="atas">
                <h1>Data</h1>
                <input type="text" className="form-control" placeholder="Search.." onChange={this.handleSearch} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Judul Buku</th>
                            <th scope="col">Tanggal Di Buat</th>
                            <th scope="col">Isi buku</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    {this.state.buku && this.state.buku.length > 0 ?
                        this.state.buku.map(data => {
                            return (
                                <tbody key={data.id}>
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.judul}</td>
                                        <td>{data.tanggal}</td>
                                        <td dangerouslySetInnerHTML={{ __html: data.isiBuku }}></td>
                                        {/* <td>
                                        <button className="btn btn-secondary" onClick={() => this.handleDelete(data.id)}>Hapus</button>
                                    </td> */}

                                        <td>
                                            <Link to={'/edit/' + data.id}>
                                                <button className="btn btn-secondary">Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                        :
                        <p className="text-center">tidak ada data</p>
                    }
                </table>
                <div className="text-end">
                    <div className="fixed-bottom float-end p-5 ">
                        <a href="#atas">
                            <TbArrowBigUpLineFilled style={{ backgroundColor: 'grey', borderRadius: '10%', color: 'black', width: '40px', height: '35px' }} />
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Data;