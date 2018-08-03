import axios from 'axios';

// const API = () => {
//     return axios.create({
//         baseURL: `http://localhost:8888/app`,
//         withCredentials: false,
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     })
// };

const APIService = () => {
    return axios.create({
        baseURL: `http://localhost:3000`
    });
};

export default APIService;