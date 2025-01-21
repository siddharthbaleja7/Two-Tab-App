# Two-Tab App with React, Rust, and Elixir

This is a simple application built with **React** on the frontend, **Rust** compiled to WebAssembly (WASM) for calculations, and **Elixir** on the backend for handling WebGL shader generation via an LLM (e.g., GPT). The app features two tabs:

- **Tab 1**: A Rust-powered Calculator that performs basic arithmetic operations.
- **Tab 2**: A WebGL-based shader generator that takes user input, sends it to an Elixir backend, and renders the shader on a canvas.

## Project Structure

The project is split into two main parts:

1. **Frontend**: React + Rust (WASM) for the calculator and WebGL shader rendering.
2. **Backend**: Elixir/Phoenix that communicates with an LLM to generate shader code based on user input.

### Frontend
- `src/`: Contains React app code
  - `index.tsx`: Main entry point for the React application.
  - `components/`: Contains React components such as `Calculator` and `Shader`.
- `rust/`: Contains the Rust code compiled to WASM for performing calculations.

### Backend
- `lib/`: Contains Elixir code for the backend API, responsible for interacting with the LLM and generating shader code.
  - `shader_generator.ex`: Handles API requests and communicates with the LLM to generate shaders.

## Requirements

1. **Rust** (for building the WASM package)
2. **Node.js** and **npm** (for React app and frontend dependencies)
3. **Elixir** and **Phoenix** (for the backend)# Two-Tab-App
