export const VISIBILITYCHANGE_EVENT = "visibilitychange";

export function isVisibilityAPISupported() {
  if (
    typeof window === "undefined" ||
    ("document" in window &&
      "hidden" in window.document &&
      window.document.hidden === undefined)
  ) {
    return false;
  }
  return true;
}
