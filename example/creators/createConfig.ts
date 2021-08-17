import once from 'lodash/once';
import {ConfigType} from '../types';

export function createConfig(): () => ConfigType {
    return once(() => {
        const logLevel = process.env.IOC_LOG_LEVEL;
        if (logLevel && !['silent', 'verbose'].includes(logLevel)) {
            throw new Error(`Unrecognized logLevel "${logLevel}".`);
        }
        return <ConfigType>{
            logLevel: logLevel || 'verbose',
        };
    });
}
