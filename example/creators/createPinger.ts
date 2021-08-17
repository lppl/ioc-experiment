import {PingerType, WithLogger} from '../types';

export function createPinger(ctx: WithLogger): () => PingerType {
    return () => ({
        ping: (url) => {
            ctx.logger().log(`Did ping at ${url}`);
        },
    });
}
