import { Socket } from "socket.io"

class SocketRouter {
connection = async (soc: Socket) => {
    console.log("connected");

    // soc.on('')

    soc.on('disconnect', () => {
        console.log('dis-connection');
    })
}
}

export default SocketRouter