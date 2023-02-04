import "./App.css";
import FetchAPI from "./FetchAPI";
import Packet from "./Packet";
import { useState } from "react";

function Exhibit(props) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }

    return(
      <div className="container">

        <div className="blocks">

            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
            onClick={() => toggleTab(1)}
            >ipv4</div>
            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} 
            onClick={() => toggleTab(2)}
            >ipv6</div>
            <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} 
            onClick={() => toggleTab(3)}
            >Packet Latency</div>
        </div>

        <div className="data-blocks">
            <div className={toggleState === 1 ? "data active-data" : "data"}>
                <h2> ipv4 Address</h2>
                <hr />
                <FetchAPI input = {toggleState} />
            </div>
            <div className={toggleState === 2 ? "data active-data" : "data"}>
                <h2> ipv6 Address</h2>
                <hr />
                <FetchAPI input = {toggleState} />
            </div>
            <div className={toggleState === 3 ? "data active-data" : "data"}>
                <h2> Packet Latency</h2>
                <hr />
                <Packet />
            </div>
        </div>
      </div>
    )
}

export default Exhibit;