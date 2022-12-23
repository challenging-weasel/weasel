import { removeNullDeep } from "./util";

describe("removeNull", () => {
  test("null 또는 undefined 가 모두 삭제되어야 함. 배열은 그대로 둠.", () => {
    const result = removeNullDeep({
      a: 1,
      b: "hello",
      d: null,
      e: [
        null,
        undefined,
        1,
        "hello",
        {
          a: 1,
          b: undefined,
          c: null,
          d: "inner",
        },
      ],
      f: {
        a: 1,
        b: undefined,
        c: null,
        d: "inner",
      },
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "a": 1,
        "b": "hello",
        "e": [
          null,
          undefined,
          1,
          "hello",
          {
            "a": 1,
            "d": "inner",
          },
        ],
        "f": {
          "a": 1,
          "d": "inner",
        },
      }
    `);
  });
});
