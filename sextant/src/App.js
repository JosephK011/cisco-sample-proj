import React, { useState } from 'react';
import './App.css';
import Exhibit from './Exhibit';
import Banner from './Banner';

function FetchAPI(props){


  const input = props.input;
  const [data,setData] = useState([]);

  const ipGet = () => {
      if(input == 1){
          fetch('https://api.ipify.org?format=json')
          .then((response) => response.json())
          .then((json) => {
          console.log(json);
          setData(json);
          })
      }
      else if (input == 2){
          fetch('https://api64.ipify.org?format=json')
          .then((response) => response.json())
          .then((json) => {
          console.log(json);
          setData(json);
          })
      }
    
  }
  return data;

}
function App() {
  const test = [1,2,3,4,5];
  return (
    <div className="App">
      <Banner />
      <div className="content">
        <Exhibit items={test}/>
      </div>
    </div>
    
  );
}

export default App;
