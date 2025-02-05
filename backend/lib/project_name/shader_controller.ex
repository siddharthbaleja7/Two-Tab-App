defmodule ProjectName.ShaderController do
  use Phoenix.Controller
  alias ProjectName.Repo
  alias ProjectName.Shader

  def generate_shader(conn, %{"description" => description}) do
    shader_code = fetch_shader_from_llm(description)
    render(conn, "shader.json", shader_code: shader_code)
  end

  defp fetch_shader_from_llm(description) do
    # Here, LLM interaction will happen, for now we are returning mock shader.
    """
    void main() {
      gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    }
    """
  end
end
