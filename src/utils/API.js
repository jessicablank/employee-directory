import axios from "axios";

//returns 50 placeholder employees from the united states

export default {
    getEmployee: function () {
        return axios.get("https://randomuser.me/api?results=50&nat=us");
    }
};