export const createContainer = (creators: any) => {
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

    return mapped;
};
