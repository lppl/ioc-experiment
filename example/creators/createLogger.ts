import {ConfigType, LoggerType} from '../types';

export function createLogger(ctx: {config: () => ConfigType}): LoggerType {
    return {
        log: (...args: unknown[]) => {
            if (ctx.config().logLevel === 'verbose') {
                console.log('CUSTOM LOGGER: ', ...args);
            }
        },
    };
}
