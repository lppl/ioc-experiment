import {createContainer} from '../ioc';
import {createConfig} from './creators/createConfig';
import {createLogger} from './creators/createLogger';
import {createPinger} from './creators/createPinger';
import {IocContext} from './types';

export default createContainer<IocContext>({
    pinger: createPinger,
    logger: createLogger,
    config: createConfig,
});
