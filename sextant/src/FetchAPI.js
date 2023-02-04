import { useEffect, useState } from "react";
import React from "react";
function FetchAPI(props){


    const input = props.input;
    const [data,setData] = useState([]);
  
    const ipGet = () => {
        if(input === 1){
            fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setData(json);
            })
        }
        else if (input === 2){
            fetch('https://api64.ipify.org?format=json')
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setData(json);
            })
        }
    }

    useEffect(() => {
        ipGet();
    }, []);
    return(
        <div className="address">
            <pre>
                {JSON.stringify(data.ip)};
            </pre>
                
        </div>
    );
  
}

export default FetchAPI;
  