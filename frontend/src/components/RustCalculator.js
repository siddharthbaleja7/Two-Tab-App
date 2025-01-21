import React, { useState, useEffect } from 'react';

function RustCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    import('../wasm/rust_calculator_bg.wasm').then((wasm) => {
      wasm.default();
    });
  }, []);

  const handleSubmit = async () => {
    const wasm = await import('../wasm/rust_calculator_bg.wasm');
    const calcResult = wasm.calculate(input);
    setResult(calcResult);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter calculation (e.g., 3+4)"
      />
      <button onClick={handleSubmit}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
}

export default RustCalculator;
