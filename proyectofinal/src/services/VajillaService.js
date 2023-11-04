import axios from 'axios';

const VAJILLA_BASE_REST_API_URL = "http://localhost:8080/api/v1/vajillas";

class VajillaService{

    getAllVajillas(){
        return axios.get(VAJILLA_BASE_REST_API_URL);
    }

    createVajilla(vajilla){
        return axios.post(VAJILLA_BASE_REST_API_URL, vajilla);
    }
}

export default new VajillaService();