export const environment = {
  production: true,
  idleTimeOut: 20,
  httpConfig: {
    apiTimeOutInMilliSeconds: 60000,
    apiRetryIntervalInMilliSeconds: 30000,
    apiRetryCount: 3
  },
  // TRACE = 0,  DEBUG = 1,  INFO = 2,  LOG = 3,  WARN = 4,  ERROR = 5,  OFF = 6,
  consoleLogLevel: 2,
  serverLogLevel: 3
};
