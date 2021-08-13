export type PingerType = {
    ping: (url: string) => void;
};
export type LoggerType = {
    log: (...args: unknown[]) => void;
};
export type ConfigType = {
    logLevel: 'silent' | 'verbose';
};
