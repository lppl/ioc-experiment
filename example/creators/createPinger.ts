import {LoggerType, PingerType} from '../types';

export function createPinger(ctx: {logger: () => LoggerType}): PingerType {
    return {
        ping: (url) => {
            ctx.logger().log(`Did ping at ${url}`);
            return url;
        },
    };
}
