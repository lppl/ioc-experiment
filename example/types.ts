export type PingerType = {
    ping: (url: string) => void;
};
export type LoggerType = {
    log: (...args: unknown[]) => void;
};
export type ConfigType = {
    logLevel: 'silent' | 'verbose';
};

export type WithLogger = {
    logger: () => LoggerType;
};

export type WithConfig = {
    config: () => ConfigType;
};

export type WithPinger = {
    pinger: () => PingerType;
};

export type IocContext = WithLogger & WithConfig & WithPinger;
