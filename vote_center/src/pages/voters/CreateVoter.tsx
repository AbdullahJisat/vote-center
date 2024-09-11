import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

interface Voter {
    name: string;
    phone: string;
    image: string;
    stay_in_position: number;
}

const CreateVoter = () => {
    const API_URL = "https://localhost/vote_center_api/public/api/voters";

    const [formData, setFormData] = useState<Voter>({
        name: "",
        phone: "",
        image: "",
        stay_in_position: 0,
    });

    // const [imagePreview, setImagePreview] = useState();
    const [error, setError] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const navigate = useNavigate()

    // const handleImagePreview = (e) => {
    //     const image_as_base64 = URL.createObjectURL(e.target.files[0])
    //     const image_as_files = e.target.files[0];
    //
    //     console.log({image_as_files, image_as_files});
    //
    //     setImagePreview({
    //         image_preview: image_as_base64,
    //         image_file: image_as_files,
    //     })
    // }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value)
        setFormData(() => ({
            ...formData,
            [name]: value,
        }));
        updatePreview();
    };

    // const handleFileChange = (e) => {
    //     const file = e.target.files?.[0] || "";
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         image: file as unknown as string,
    //     }));
    //     updatePreview();
    // };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const base64 = await file;
        setFormData({ ...formData, image: base64 });
    };


    const handleCheckboxChange = (e) => {
        e.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            stay_in_position: e.target.checked ? 1 : 0,
        }));
        updatePreview();
    };

    const handleReset = () => {
        setFormData({
            name: "",
            phone: "",
            image: "",
            stay_in_position: 0,
        });
        setPreviewUrl("");
        (document.getElementById("image") as HTMLInputElement).value = "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(API_URL, formData)
            .then((response) => {
                console.log(response);
                navigate("/voters"); // Redirect to voters list after submission
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setError(response.data.errors)
                }
            })
    };

    const updatePreview = () => {
        // Updating the preview iframe with form data
        const previewContent = `
      <html lang="en">
        <body>
          <h3>Preview</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Expatriate:</strong> ${formData.stay_in_position === 1 ? "Expatriate" : "Deshi"}</p>
        </body>
      </html>
    `;
        const blob = new Blob([previewContent], { type: "text/html" });
        setPreviewUrl(URL.createObjectURL(blob));
    };

  return (
      <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6">
                      <div className="card card-primary">
                          <div className="card-header">
                              <h3 className="card-title">Create Voter</h3>
                              <Link to={`/voters`} className="btn btn-success float-right">Back to List</Link>
                          </div>
                          {error &&
                              <div className="alert">
                                  {Object.keys(error).map(key => (
                                      <p key={key}>{error[key][0]}</p>
                                  ))}
                              </div>
                          }

                          <form role="form" onReset={handleReset} onSubmit={handleSubmit} encType="multipart/form-data">
                              <div className="card-body">
                                  <div className="form-group">
                                      <label htmlFor="name">Name</label>
                                      <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          name="name"
                                          value={formData.name}
                                          placeholder="Name"
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
                                          value={formData.phone}
                                          placeholder="Phone"
                                          onChange={handleInputChange}
                                      />
                                  </div>
                        {/*          <div className="form-group">*/}
                        {/*              <label htmlFor="image">Image</label>*/}
                        {/*              <div className="input-group">*/}
                        {/*                  <div className="custom-file">*/}
                        {/*                      <input*/}
                        {/*                          type="file"*/}
                        {/*                          className="custom-file-input"*/}
                        {/*                          id="image"*/}
                        {/*                          name="image"*/}
                        {/*                          onChange={handleFileChange}*/}
                        {/*                      />*/}
                        {/*                      <label*/}
                        {/*                          className="custom-file-label"*/}
                        {/*                          htmlFor="exampleInputFile"*/}
                        {/*                      >*/}
                        {/*                          Choose file*/}
                        {/*                      </label>*/}
                        {/*                  </div>*/}
                        {/*                  <div className="input-group-append">*/}
                        {/*/!*<span className="input-group-text" id="">*!/*/}
                        {/*/!*    <img src={imagePreview} alt="image preview"/>*!/*/}
                        {/*/!*</span>*!/*/}
                        {/*                  </div>*/}
                        {/*              </div>*/}
                        {/*          </div>*/}
                                  {/*<div className="form-group">*/}
                                  {/*  <label htmlFor="image">Image</label>*/}
                                  {/*  <div className="row">*/}
                                  {/*  <div className="col-sm-6">*/}
                                  {/*    */}
                                  {/*    <div className="form-group">*/}
                                  {/*      <label>District</label>*/}
                                  {/*      <select className="form-control">*/}
                                  {/*        <option>option 1</option>*/}
                                  {/*        <option>option 2</option>*/}
                                  {/*        <option>option 3</option>*/}
                                  {/*        <option>option 4</option>*/}
                                  {/*        <option>option 5</option>*/}
                                  {/*      </select>*/}
                                  {/*    </div>*/}
                                  {/*  </div>*/}
                                  {/*  <div className="col-sm-6">*/}
                                  {/*    <div className="form-group">*/}
                                  {/*      <label>Thana</label>*/}
                                  {/*      <select className="form-control">*/}
                                  {/*        <option>option 1</option>*/}
                                  {/*        <option>option 2</option>*/}
                                  {/*        <option>option 3</option>*/}
                                  {/*        <option>option 4</option>*/}
                                  {/*        <option>option 5</option>*/}
                                  {/*      </select>*/}
                                  {/*    </div>*/}
                                  {/*  </div>*/}
                                  {/*</div>*/}
                                  {/*</div>*/}
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
                                  <button type="submit" className="btn btn-primary">
                                      Submit
                                  </button>
                                  <button type="reset" className="btn btn-primary float-right">
                                      Reset
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card card-primary">
                          <div className="card-header">
                              <h3 className="card-title">Preview</h3>
                          </div>
                          <iframe src={previewUrl} frameBorder="0" style={{width: "100%", height: "400px"}}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CreateVoter;
