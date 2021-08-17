import container from './example/container';

console.log('\n\nTest of IoC lib\n\n');

const url = 'https://cool.job.offers.com/api-for-count-me-in';
console.assert(container.pinger().ping(url) === undefined);
console.assert(container.config().logLevel === 'verbose');

console.log('\n\n===============\n\n');
