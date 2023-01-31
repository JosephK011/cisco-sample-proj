import React from 'react';
import './App.css';

function Exhibit(props) {
  return(
    <div className="user-content">
      <header className='user'>
          <table>
            <tr>
              <th>Data</th>
            </tr>
            {props.items.map((items) => {
              return (
                <tr>
                  <td>{items}</td>
                </tr>
              )
          })}
          </table>
      </header>
    </div>
  )
}
function Banner() {
  return(
    <nav className="Banner">
      <div className="Title">
        <h1> Sextant</h1>
      </div>
    </nav>

  );
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
