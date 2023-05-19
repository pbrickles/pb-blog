export function getGlobEagerly(path: string | string[]) {
    const glob =  import.meta.glob(path, { eager: true });
    return glob
}