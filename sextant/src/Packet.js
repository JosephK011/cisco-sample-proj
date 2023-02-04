import { useState, useEffect } from "react";
function Packet() {
    const websocket = new WebSocket("ws://localhost:55455");

    const delay = (ms) => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const [newTime, setNewTime] = useState(1);
    websocket.onmessage = (event) => {
        let date1 = Date.now();
        let date2 = JSON.parse(event.data);
        setNewTime(date1 - date2);
    }

    return(
        <div>
            <p>{newTime} ms</p>
        </div>
    );
}
export default Packet;