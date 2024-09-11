import axios from "axios";

const ApiUrl = axios.create({
    baseURL: "https://localhost/vote_center_api/public/api/",
});
export default ApiUrl;
