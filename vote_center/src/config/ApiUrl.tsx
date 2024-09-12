import axios from "axios";

const ApiUrl = axios.create({
    baseURL: "https://localhost/vote-center/public/api/",
});
export default ApiUrl;
