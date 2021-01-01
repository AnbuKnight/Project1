import { Injectable} from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { endPointConfig } from 'src/apiconstants';
import { environment } from 'src/environments/environment';
import { LogData } from './log-data.model';
import { LogLevelEnum } from './log-level.enum';

@Injectable()
export class LoggerService {

  constructor( private logger: NGXLogger  ) {
    this.logger.updateConfig({ level: environment.consoleLogLevel, serverLogLevel: environment.serverLogLevel,
       serverLoggingUrl: endPointConfig.logAPI});
   }

  logMessage(logdata: LogData) {
    switch (logdata.logLevel) {
      case LogLevelEnum.TRACE:
        this.logger.trace(logdata.logInfo);
        break;
      case LogLevelEnum.DEBUG:
        this.logger.debug(logdata.logInfo);
        break;
      case LogLevelEnum.INFO:
        this.logger.info(logdata.logInfo);
        break;
      case LogLevelEnum.LOG:
        this.logger.log(logdata.logInfo);
        break;
      case LogLevelEnum.WARN:
        this.logger.warn(logdata.logInfo);
        break;
      case LogLevelEnum.ERROR:
        this.logger.error(logdata.logInfo);
        break;
    }
  }
}
