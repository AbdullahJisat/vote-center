import {useEffect, useState} from "react"
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

interface Voter {
    id?: number;
    name: string;
    phone: string;
    image: string;
    stay_in_position: number;
}

const EditVoter = () => {
    const {id} = useParams();
    const API_URL = "https://localhost/vote_center_api/public/api/voters";

    const [formData, setFormData] = useState<Voter>({
        name: "",
        phone: "",
        image: "",
        stay_in_position: 0,
    });


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [buttonAction, setButtonAction] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API_URL}/${id}`)
            .then((response) => {
                setFormData(response.data);
                setLoading(false);
                setButtonAction(false);
            })
            .catch((err) => {
                setError(err.response?.data?.errors || "Failed to load voter data.");
                setLoading(false);
                setButtonAction(false);
            });
    }, [id]);

    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            stay_in_position: e.target.checked ? 1 : 0,
        }));
    };

    const handleReset = () => {
        setFormData({
            name: "",
            phone: "",
            image: "",
            stay_in_position: 0,
        });
        (document.getElementById("image") as HTMLInputElement).value = "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`${API_URL}/${formData.id}`, formData)
            .then((response) => {
                console.log(response.data.message);
                navigate("/voters");
                toast.success(response.data.message)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setError(response.data.errors)
                }
            })
    };

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Edit Voter</h3>
                                <Link to={`/voters`} className="btn btn-success float-right">Back to List</Link>
                            </div>
                            {loading ? (
                                <div className="loading">Loading voter data...</div>
                            ) : (
                                <>
                                    {error &&
                                        <div className="alert">
                                            {Object.keys(error).map(key => (
                                                <p key={key}>{error[key][0]}</p>
                                            ))}
                                        </div>
                                    }

                                    <form role="form" onReset={handleReset} onSubmit={handleSubmit}
                                          encType="multipart/form-data">
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="stay_in_position"
                                                    name="stay_in_position"
                                                    checked={formData.stay_in_position === 1}
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label className="form-check-label" htmlFor="stay_in_position">
                                                    Are you expatriate?
                                                </label>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={buttonAction}
                                            >
                                                {buttonAction ? "Updating" : "Update"}
                                            </button>
                                            <button type="reset" className="btn btn-primary float-right">
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditVoter;
