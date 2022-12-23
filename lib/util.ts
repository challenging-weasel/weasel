// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NullRemoved<T> = T extends null
  ? undefined
  : T extends Array<infer U>
  ? Array<U>
  : T extends object
  ? { [P in keyof T]: NullRemoved<T[P]> }
  : T;

/**
 * 어떤 객체에서 `null` 을 모두 삭제합니다.
 * GraphQL 의 코드젠을 통해 생성된 타입 중 `InputMaybe` 는
 * `T | null | undefined` 등으로 처리되는데,
 * 이를 `T | undefined` 로 바꿀 때 사용됩니다.
 * 배열의 요소는 건드리지 않습니다.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeNullDeep = <T extends { [key: string]: any }>(
  obj: T
): NullRemoved<T> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = {} as any;
  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (value === null || value === undefined) {
      return;
    }

    if (Array.isArray(value)) {
      result[key] = value.map((child) => {
        if (child === null) {
          return null;
        }

        if (typeof child === "object") {
          return removeNullDeep(child);
        }

        return child;
      });

      return;
    }

    if (typeof value === "object") {
      result[key] = removeNullDeep(value);
      return;
    }

    result[key] = value;
  });

  return result;
};
