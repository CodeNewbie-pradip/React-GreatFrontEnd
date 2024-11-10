import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} style={{ backgroundColor: 'black', color : 'white'}}>
      Clicks: {count}
    </button>
  );
}

export default App;
