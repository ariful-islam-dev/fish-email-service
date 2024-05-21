import http from 'http';
import app from './app';

const server = http.createServer(app);

const port = process.env.PORT || 4005;
const serviceName = process.env.SERVICE_NAME || "Email_Service";

server.listen(port, () => {
  console.log(`${serviceName} is running on port ${port}`);
});
