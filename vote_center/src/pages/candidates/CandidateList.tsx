import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import Modal from "../../components/Modal.tsx";
import toast, { Toaster } from 'react-hot-toast';
import Pagination from "../../components/Pagination.tsx";
import Search from "../../components/Search.tsx";
import ApiUrl from "../../config/ApiUrl.tsx";
import Table from "../../components/Table.tsx";
import {Loading} from "../../layout/Loading.tsx";

interface Candidate {
    id: number;
    name: string;
    phone: string;
    image: string;
    symbol: number;
}

const CandidateList = () => {

    const API_URL = "candidates";

    const [candidates, setCandidateList] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState({query: '', stay: ''})
    const [isOpenModal, setOpenModal] = useState(false)



    useEffect(() => {
        getCandidates(page, search)
    }, [page, search])

    const handleSearch = (query: string, stay: string) => {
        setSearch({query, stay});
        setPage(1);
    };

    const getCandidates = async (page, search) => {
        try {
            const response = await ApiUrl
                // .get<{ candidates: Candidate[] }>(`${API_URL}?page=${page}`)
                .get(`${API_URL}?page=${page}&search=${encodeURIComponent(search.query)}&stay=${encodeURIComponent(search.stay)}`);


            console.log(response);
            setCandidateList(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const openCandidateDetailsModal = (candidate: Candidate) => {
        setSelectedCandidate(candidate); // Set the selected candidate when the button is clicked
    };

    const setCandidateForModal = selectedCandidate && (
        <table className="table">
            <tbody>
            <tr>
                <th>Name:</th>
                <td>{selectedCandidate.name}</td>
            </tr>
            <tr>
                <th>Phone:</th>
                <td>{selectedCandidate.phone}</td>
            </tr>
            <tr>
                <th>Image:</th>
                <td>
                    <img
                        src={selectedCandidate.image}
                        alt={selectedCandidate.name}
                        style={{ height: "50px", width: "50px" }}
                    />
                </td>
            </tr>
            <tr>
                <th>Symbol:</th>
                <td>{selectedCandidate.symbol}</td>
            </tr>
            </tbody>
        </table>
    );



    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return
        }
        axios.delete(`${API_URL}/${id}`)
            .then((response) => {
                console.log(response.data.message)
                toast.success(response.data.message)
                getCandidates()
            })
    }

    if (loading) return <Loading/>

    return (
        <>
            <div><Toaster position="top-right" reverseOrder={false}/></div>
            <Modal id="candidate-details" modalBody={setCandidateForModal}/>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <Link
                                            to={`/candidates/create`}
                                            className="btn btn-block btn-info btn-sm"
                                        >
                                            Add
                                        </Link>
                                    </h3>

                                    <Search onSearch={handleSearch} />
                                </div>

                                <div className="card-body table-responsive p-0">
                                    <Table thead={<tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Image</th>
                                        <th>Symbol</th>
                                        <th>Action</th>
                                    </tr>} tbody={
                                        candidates?.data?.map((candidate) => (
                                            <tr key={candidate.id}>
                                                <td>{candidate.id}</td>
                                                <td>{candidate.name}</td>
                                                <td>{candidate.phone}</td>
                                                <td>
                                                    <img
                                                        src={candidate.image}
                                                        alt={candidate.name}
                                                        style={{height: "50px", width: "50px"}}
                                                    />
                                                </td>
                                                <td>{candidate.symbol}</td>
                                                <td>
                                                    <div className="d-flex" style={{gap: "1rem"}}>
                                                        <Link to={`/candidates/${candidate.id}`}
                                                              className="text-success"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>
                                                        <a className="text-danger" type="button"
                                                           onClick={e => handleDelete(candidate.id)}>
                                                            <i
                                                                className="fas fa-trash"
                                                            ></i>
                                                        </a>
                                                        <a
                                                            className="text-info"
                                                            type="button"
                                                            data-toggle="modal"
                                                            data-target="#candidate-details"
                                                            onClick={() => openCandidateDetailsModal(candidate)} // Trigger modal on click
                                                        >
                                                            <i className="fas fa-eye"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    } />
                                </div>

                                <div className="card-footer clearfix">
                                    <Pagination
                                        candidates={candidates}
                                        onPageChange={(page) => setPage(page)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidateList
