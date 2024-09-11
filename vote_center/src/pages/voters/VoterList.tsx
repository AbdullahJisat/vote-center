import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import Modal from "../../components/Modal.tsx";
import toast, { Toaster } from 'react-hot-toast';
import Pagination from "../../components/Pagination.tsx";
import Search from "../../components/Search.tsx";
import ApiUrl from "../../config/ApiUrl.tsx";
import Table from "../../components/Table.tsx";
import {Loading} from "../../layout/Loading.tsx";

interface Voter {
    id: number;
    name: string;
    phone: string;
    image: string;
    stay_in_position: number;
}

const VoterList = () => {

    const API_URL = "voters";

    const [voters, setVoterList] = useState<Voter[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedVoter, setSelectedVoter] = useState<Voter | null>(null);
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState({query: '', stay: ''})



    useEffect(() => {
        getVoters(page, search)
    }, [page, search])

    const handleSearch = (query: string, stay: string) => {
        setSearch({query, stay});
        setPage(1);
    };

    const getVoters = async (page, search) => {
        try {
            const response = await ApiUrl
                .get(`${API_URL}?page=${page}&search=${encodeURIComponent(search.query)}&stay=${encodeURIComponent(search.stay)}`);


            console.log(response);
            setVoterList(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const voterStayInPositon = (stay) => (
        stay == 1 ? "Expatriate" : "Deshi"
    )

    const openVoterDetailsModal = (voter: Voter) => {
        setSelectedVoter(voter); // Set the selected voter when the button is clicked
    };

    const setVoterForModal = selectedVoter && (
        <table className="table">
            <tbody>
            <tr>
                <th>Name:</th>
                <td>{selectedVoter.name}</td>
            </tr>
            <tr>
                <th>Phone:</th>
                <td>{selectedVoter.phone}</td>
            </tr>
            <tr>
                <th>Image:</th>
                <td>
                    <img
                        src={selectedVoter.image}
                        alt={selectedVoter.name}
                        style={{ height: "50px", width: "50px" }}
                    />
                </td>
            </tr>
            <tr>
                <th>Stay:</th>
                <td>{selectedVoter.stay_in_position === 1 ? "Expatriate" : "Deshi"}</td>
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
                getVoters()
            })
    }

    if (loading) return <Loading/>

    return (
        <>
            <div><Toaster position="top-right" reverseOrder={false}/></div>
            <Modal id="voter-details" modalBody={setVoterForModal}/>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <Link
                                            to={`/voters/create`}
                                            className="btn btn-block btn-info btn-sm"
                                        >
                                            Add
                                        </Link>
                                    </h3>

                                    <Search onSearch={handleSearch} options={<><option value="1">Expatriate</option>
                                        <option value="0">Deshi</option></>}/>
                                </div>

                                <div className="card-body table-responsive p-0">
                                    <Table thead={<tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Image</th>
                                        <th>Stay</th>
                                        <th>Action</th>
                                        </tr>} tbody={
                                        voters?.data?.map((voter) => (
                                        <tr key={voter.id}>
                                        <td>{voter.id}</td>
                                        <td>{voter.name}</td>
                                        <td>{voter.phone}</td>
                                        <td>
                                            <img
                                                src={voter.image}
                                                alt={voter.name}
                                                style={{height: "50px", width: "50px"}}
                                            />
                                        </td>
                                        <td>
                                                    <span
                                                        className="badge badge-info">{voterStayInPositon(voter.stay_in_position)}</span>
                                        </td>
                                        <td>
                                            <div className="d-flex" style={{gap: "1rem"}}>
                                                <Link to={`/voters/${voter.id}`}
                                                      className="text-success"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <a className="text-danger" type="button"
                                                   onClick={e => handleDelete(voter.id)}>
                                                    <i
                                                        className="fas fa-trash"
                                                    ></i>
                                                </a>
                                                <a
                                                    className="text-info"
                                                    type="button"
                                                    data-toggle="modal"
                                                    data-target="#voter-details"
                                                    onClick={() => openVoterDetailsModal(voter)} // Trigger modal on click
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
                                        voters={voters}
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

export default VoterList
