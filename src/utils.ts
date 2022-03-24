export const VISIBILITYCHANGE_EVENT = "visibilitychange";

export function isVisibilityAPISupported() {
    if (document.hidden === undefined) {
        return false;
    }
    return true;
}