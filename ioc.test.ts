import {createConfig} from './example/creators/createConfig';
import {createLogger} from './example/creators/createLogger';
import {createPinger} from './example/creators/createPinger';
import {createContainer} from './ioc';

console.log('\n\nTest of IoC lib\n\n');

const container = createContainer({
    pinger: createPinger,
    logger: createLogger,
    config: createConfig,
});

const url = 'http://cool.job.offers.com/api-for-count-me-in';
console.assert(container.pinger().ping(url) === undefined);
console.assert(container.config().logLevel === 'verbose');

console.log('\n\n===============\n\n');
