
import FriendList from './FriendList';
import friends from './friends.json';
import React from 'react';
// import Statistics from './Statistics'; 
// import data from './data.json'; 

export function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
          <Statistics title="Upload Stats" stats={data} />
      </header> */}
      <header className="App-header">
        <FriendList friends={friends} />
      </header>
    </div>
    
  );
}



