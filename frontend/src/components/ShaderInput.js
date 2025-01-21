import React, { useState } from 'react';
import axios from 'axios';

function ShaderInput() {
  const [description, setDescription] = useState('');
  const [shaderCode, setShaderCode] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/shader', {
        description,
      });
      setShaderCode(response.data.shader_code);
    } catch (error) {
      setShaderCode('Error generating shader code.');
    }
  };

  return (
    <div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the shader"
      />
      <button onClick={handleSubmit}>Generate Shader</button>
      <pre>{shaderCode}</pre>
    </div>
  );
}

export default ShaderInput;
