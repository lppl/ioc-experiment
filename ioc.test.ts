import {createContainer} from './ioc';

console.log('\n\nTest of IoC lib\n\n');

type PingerType = {
    ping: (url: string) => void;
};

type LoggerType = {
    log: (...args: unknown[]) => void;
};

type ConfigType = {
    logLevel: 'silent' | 'verbose';
};

function createConfig(): ConfigType {
    const logLevel = process.env.IOC_LOG_LEVEL;
    if (logLevel && !['silent', 'verbose'].includes(logLevel)) {
        throw new Error(`Unrecognized logLevel "${logLevel}".`);
    }
    return <ConfigType>{
        logLevel: logLevel || 'verbose',
    };
}

function createLogger(ctx: {config: () => ConfigType}): LoggerType {
    return {
        log: (...args: unknown[]) => {
            if (ctx.config().logLevel === 'verbose') {
                console.log('CUSTOM LOGGER: ', ...args);
            }
        },
    };
}

function createPinger(ctx: {logger: () => LoggerType}): PingerType {
    return {
        ping: (url) => {
            ctx.logger().log(`Did ping at ${url}`);
            return url;
        },
    };
}

const container = createContainer({
    pinger: createPinger,
    logger: createLogger,
    config: createConfig,
});

const url = 'http://cool.job.offers.com/api-for-count-me-in';
console.assert(container.pinger().ping(url) === url);
console.assert(container.config().logLevel === 'verbose');

console.log('\n\n===============\n\n');
