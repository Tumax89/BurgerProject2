import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-project-5b388.firebaseio.com/",
});

export default instance;
