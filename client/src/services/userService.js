/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getAll: async () => { //name of function
    const res = await axios.get(`/api/user`); //module that you can call api's - inside is the route
    return res.data || [];
  },
};
