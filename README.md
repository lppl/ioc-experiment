# IoC experiment

So I tried to create simple IoC container that uses only creator functions.

This pattern works greatly in JavaScript, it's great for small and medium projects.

I wondered if I could achieve typesafe container in the TypeScript. I was unable to do so in two hours timemark and also
I am wondering if the effect that I want to achieve is possible inside typescript.

Below you can find pseudocode that shows usage. There is [ioc.ts](./ioc.ts) with single function library
and [ioc.test.ts](./ioc.test.ts) which is at the same time running example and have few assertions that work as good as
if there was jest connected. Good enough for example.

```shell
npm install
npm run test
npm run test::watch
```

```typescript

// firstly we need to define creator function that creates api that we need in the appliaiton
// If needed this function has access to container itself.
// Every part of container is callable function this enables to us lazy laoding of dependencies. 
function createPinger(ctx: { logger: () => LoggerType }) {
    return {
        ping: () => {
            ctx.logger().log('Value returned by logger could be memoized or evaluated at every call')
        }
    }
}

// Next step is to build container.
const container = createContainer({
    pinger: createPinger,
    logger: createLogger,
    config: createConfig,
});

// And then we can initiate required behaviour with funcion call 
container.pinger().ping('http://somesite.io/sayhello')

// Also it would be great to combine CtxWithConfig with CtxWithLogger types 
// to confirm that all expected context have been created but I dont think that
// this check could be done at compilation time.
```
