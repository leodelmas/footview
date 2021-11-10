import axios from "axios";
import { apiFootball } from '../config';

const request = async(method, url, params = {}) => {
    let options = {
        method: method,
        url: apiFootball.url + url + '?league=61&season=2021',
        params: params,
        headers: {
          'x-rapidapi-host': apiFootball.host,
          'x-rapidapi-key': apiFootball.key
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

const getTeams = async() => {
    return request('GET', '/teams', {'league': 61, 'season': new Date().getFullYear()});
}

export default {
    getTeams
}