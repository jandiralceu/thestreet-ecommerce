export function createAction<T = any>(type: T, payload: any) {
  return { type, payload };
}
