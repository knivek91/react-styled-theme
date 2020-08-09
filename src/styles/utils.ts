export const isNil = (v: any) => v === null || v === undefined;

export const getDefaultOrValue = (def: unknown, value?: unknown): unknown =>
    !value ? def : value;
