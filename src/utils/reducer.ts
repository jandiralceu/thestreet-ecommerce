export function createAction<T = any, P = any>(type: T, payload: P) {
  return { type, payload };
}
