import dayjs from "dayjs";
import type { PartialDeep } from "type-fest";

import { defaultDateFormat } from "../config";

import type {
  AfterBeforeTermCondition,
  AndOrTermCondition,
  ChallengeConfig,
  CountTermCondition,
  Repeated,
  TermCondition,
} from "./type";

export function createRepeated(args?: PartialDeep<Repeated>): Repeated {
  return {
    type: "week",
    value: 1,
    ...args,
  };
}

export function createCountTermCondition(
  args?: PartialDeep<CountTermCondition>
): CountTermCondition {
  return {
    type: "count",
    start: dayjs(new Date()).add(7, "day").format(defaultDateFormat),
    count: 1,
    ...args,
    repeated: args?.repeated ? createRepeated(args.repeated) : undefined,
  };
}

export function createDeafultTermCondition(): TermCondition {
  return createCountTermCondition();
}

export function createAndOrTermCondition(
  args?: PartialDeep<AndOrTermCondition>
): AndOrTermCondition {
  return {
    type: "and",
    conditions: [],
    ...args,
  };
}

export function createAfterBeforeTermCondition(
  args?: PartialDeep<AfterBeforeTermCondition>
): AfterBeforeTermCondition {
  return {
    type: "before",
    datetime: dayjs(new Date()).add(30, "day").format(defaultDateFormat),
    ...args,
  };
}

export function createChallengeTermCondition(
  args?: PartialDeep<TermCondition>
): TermCondition {
  if (!args || !args.type) {
    return createDeafultTermCondition();
  }

  switch (args.type) {
    case "and":
    case "or":
      return createAndOrTermCondition(args);
    case "after":
    case "before":
      return createAfterBeforeTermCondition(args);
    case "count":
      return createCountTermCondition(args);
  }
}

export function createChallengeConfig(
  args?: PartialDeep<ChallengeConfig>
): ChallengeConfig {
  return {
    version: 1,
    ...args,
    termCondition: createChallengeTermCondition(args?.termCondition),
  };
}
