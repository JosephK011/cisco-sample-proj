import './Packet.css';
import { useState, useEffect } from "react";
function Packet() {
    const websocket = new WebSocket("ws://localhost:55455");
    const [newTime, setNewTime] = useState(0);

    websocket.onmessage = (event) => {
        setNewTime(new Date().getTime() - event.data);
    }

    return(
        <span className='latency'>
            {newTime} ms
        </span>
    );
}
export default Packet;