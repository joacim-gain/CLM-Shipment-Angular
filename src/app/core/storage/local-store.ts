/**
 * Tiny localStorage wrapper used by the demo to keep changes across reloads.
 * In the real app, data comes from the API and only UI preferences stay in the browser.
 */
export function readLocal<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeLocal(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode or quota — the demo keeps working in memory */
  }
}

export function removeLocal(...keys: string[]): void {
  try {
    keys.forEach((k) => localStorage.removeItem(k));
  } catch {
    /* ignore */
  }
}
