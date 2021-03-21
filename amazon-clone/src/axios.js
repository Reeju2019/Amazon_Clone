import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/clone-f6a2f/us-central1/api",
  // "https://us-central1-challenge-4b2b2.cloudfunctions.net/api",
});

export default instance;
