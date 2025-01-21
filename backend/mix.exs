defmodule ProjectName.MixProject do
  use Mix.Project

  def project do
    [
      app: :project_name,
      version: "0.1.0",
      elixir: "~> 1.13",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  defp deps do
    [
      {:phoenix, "~> 1.6.0"},
      {:phoenix_ecto, "~> 4.4"},
      {:ecto_sql, "~> 3.7"},
      {:httpoison, "~> 1.8"}
    ]
  end
end
