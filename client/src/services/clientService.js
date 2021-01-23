/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getAll: async () => {
    //name of function
    const res = await axios.get(`/api/client`); //module that you can call api's - inside is the route
    console.log(res.data);
    return res.data || [];
  },

  //Pass in newClient in the parameter to link it to the information in the Project Form
  createClient: async (newClient) => {
    await axios.post(`/api/client`, newClient);
  },

  

  // loginUser: async (credentials) => {
  //   await axios.post(`/api/login`, credentials);
  // },





  //   async function loginUser(credentials) {
  //   return fetch("http://localhost:5000/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "client/json",
  //     },
  //     body: JSON.stringify(credentials),
  //   }).then((data) => data.json());
  // }
};
