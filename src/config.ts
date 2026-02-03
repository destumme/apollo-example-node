export class ConfigError extends Error {}

const parseEnv = (key: string, required: boolean): null | string => {
  const val = process.env[key];
  if (val !== undefined && val !== "") {
    return val;
  }
  if (required) {
    throw new ConfigError(`Missing required ENV ${key}`);
  }

  return null;
};

const CONFIG_ENVS = {
  SCHEMA_NAME: () => parseEnv.apply(undefined, ["SCHEMA_NAME", true]),
  PORT: () => parseEnv.apply(undefined, ["PORT", true]),
};

type CONFIG = typeof CONFIG_ENVS;

export const buildConfig = (): Record<keyof CONFIG, string | null> => {
  const config: Record<string, string | null> = {};
  for (const [key, func] of Object.entries(CONFIG_ENVS)) {
    config[key] = func();
  }

  return config;
};
