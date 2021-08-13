export const createContainer = <S = any>(
    creators: {[K in keyof S]: (ctx: any) => S[K]},
) => {
    // @ts-ignore
    const mapped = Object.entries(creators)
        .map(([key, creator]) => {
            // @ts-ignore
            return [key, () => creator(mapped)];
        })
        .reduce((o, [k, v]) => {
            // @ts-ignore
            o[k] = v;
            return o;
        }, {});

    return mapped as {[K in keyof S]: () => S[K]};
};
