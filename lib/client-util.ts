import { atom } from "jotai";
import Cookies from "js-cookie";

export const atomWithLocalStorage = <T = unknown>(
  key: string,
  initialValue: T
) => {
  const getInitialValue = (): T => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return initialValue;
  };

  const baseAtom = atom(getInitialValue());

  return atom(
    (get) => get(baseAtom),
    (get, set, update: T | ((arg: T) => T)) => {
      const nextValue =
        typeof update === "function"
          ? (update as (arg: T) => T)(get(baseAtom))
          : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
};

export const atomWithCookie = (key: string, initialValue: string) => {
  const getInitialValue = () => {
    const item = Cookies.get(key);
    if (item) {
      return item;
    }
    return initialValue;
  };

  const baseAtom = atom(getInitialValue());

  return atom(
    (get) => get(baseAtom),
    (get, set, update: string | ((arg: string) => string)) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      Cookies.set(key, nextValue, { expires: 730 });
    }
  );
};
