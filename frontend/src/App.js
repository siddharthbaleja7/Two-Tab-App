import React, { useState } from 'react';
import RustCalculator from './components/RustCalculator';
import ShaderInput from './components/ShaderInput';

function App() {
  const [tab, setTab] = useState('calculator');

  return (
    <div className="App">
      <nav>
        <button onClick={() => setTab('calculator')}>Rust Calculator</button>
        <button onClick={() => setTab('shader')}>Text to Shader</button>
      </nav>

      {tab === 'calculator' && <RustCalculator />}
      {tab === 'shader' && <ShaderInput />}
    </div>
  );
}

export default App;
