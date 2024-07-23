// import express from 'express';
// import informationManagementRoutes from './routes/informationManagement.route';
// import authenticationRoutes from './routes/authentication.route';
// import communityRoutes from './routes/community.route';



// const app = express();

// app.use(express.json());

// const urlBase: string = "/api-baby-link";

// app.use(urlBase, informationManagementRoutes);
// app.use(urlBase, authenticationRoutes);
// app.use(urlBase, communityRoutes);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.clear();
//     console.log(`API Gateway running on port ${PORT}`);
// });


import express from 'express';
import informationManagementRoutes from './routes/informationManagement.route';
import authenticationRoutes from './routes/authentication.route';
import communityRoutes from './routes/community.route';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

app.use(express.json());

const urlBase: string = "/api-baby-link";

app.use(urlBase, informationManagementRoutes);
app.use(urlBase, authenticationRoutes);
app.use(urlBase, communityRoutes);

io.on('connection', (socket) => {
    // console.log('A user connected');

    socket.on('disconnect', () => {
        // console.log('User disconnected');
    });
});

setInterval(() => {
    // console.log('Ejecutando acción cada 10 segundo');
    // Aquí puedes realizar la acción deseada, por ejemplo, emitir un evento a todos los clientes conectados
    io.emit('tick', { data: 'refresh' });

}, 10000);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.clear();
    console.log(`API Gateway running on port ${PORT}`);
});

// Export io for use in routes
export { io };
