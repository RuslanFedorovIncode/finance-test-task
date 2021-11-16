import { io } from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";
const socket = io(ENDPOINT, { transports: ["websocket"] });
export default socket;