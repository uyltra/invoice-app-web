// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

class Config {
  version: string;
  endpoints: {
    http?: string;
    https?: string;
    wss?: string;
  };

  constructor(env: NodeJS.ProcessEnv) {
    Object.assign(this, {
      version,
      endpoints: {
        http: env.SCHEMA_PATH,
      },
    });
  }
}

export default Config;
