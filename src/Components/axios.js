import constants from "../constants/constants"; 
import axios from "axios";

const instance = axios.create({
    baseURL: constants.baseUrl,
});


export default instance;