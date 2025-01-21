import Config

config :project_name, ProjectNameWeb.Endpoint,
  http: [port: 4000],
  secret_key_base: "a_secret_key_here"

config :logger, level: :debug
