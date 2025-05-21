import { createConsumer } from "@rails/actioncable";

const cable = createConsumer("ws://localhost:3000/cable"); // ganti ws jadi wss kalau nanti deploy ke HTTPS

export default cable;
