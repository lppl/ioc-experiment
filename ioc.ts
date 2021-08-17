type Context<S> = {[K in keyof S]: S[K]};
type Creators<S> = {[K in keyof S]: (ctx: S) => S[K]};

export const createContainer = <S = any>(creators: Creators<S>) => {
    // @ts-ignore
    const mapped = Object.entries(creators)
        .map(([key, creator]) => {
            // @ts-ignore
            return [key, () => creator(mapped)()];
        })
        .reduce((o, [k, v]) => {
            // @ts-ignore
            o[k] = v;
            return o;
        }, {});

    return mapped as Context<S>;
};
