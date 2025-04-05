import axios from "axios";
async function logout() {
  // send logout request to the backend throw /api/v1/account/logout
  try {
    const request = await axios.post("/api/v1/account/logout");
    if (request.data.state) {
      return request.data;
    } else {
      return { state: false, reason: "server.error" };
    }
  } catch (err) {
    return { state: false, reason: "client.error" };
  }
}
export default logout;
