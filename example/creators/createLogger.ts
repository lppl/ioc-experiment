import {LoggerType, WithConfig} from '../types';

export function createLogger(ctx: WithConfig): () => LoggerType {
    return () => ({
        log: (...args: unknown[]) => {
            if (ctx.config().logLevel === 'verbose') {
                console.log('CUSTOM LOGGER: ', ...args);
            }
        },
    });
}
