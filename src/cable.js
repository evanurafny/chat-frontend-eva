import { createConsumer } from "@rails/actioncable";

const cable = createConsumer("wss://chat-appeva-production.up.railway.app/cable"); // ganti ws jadi wss kalau nanti deploy ke HTTPS

export default cable;
