export const removeUndefined = <T>(item: T | undefined): item is T => item !== undefined;
