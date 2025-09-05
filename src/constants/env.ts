export const isDev = import.meta.env.MODE === "development";

export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768; 
}
