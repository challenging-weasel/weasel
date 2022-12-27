export type ChallengeConfig = {
  version: 1;
  termCondition: TermCondition;
  manualFail?: boolean; // 수동으로 fail로 바꾸는지 여부
  manualSuccess?: boolean; // 수동으로 success로 바꾸는지 여부
  allowDateChange?: boolean; // 인증 날짜를 변경할 수 있는지 여부
  allowImageChange?: boolean; // 인증 이미지를 변경할 수 있는지 여부
  allowInappropriateDate?: boolean; // 날짜 조건에 맞지 않아도 인증할 수 있는지 여부
  allowExceededconfirmation?: boolean; // 현재 조건이 충족해도 추가로 인증할 수 있는지 여부 (기록 남기기 용도..?)
  allowParticipationOngoing?: boolean; // 챌린지가 진행 도중에 참여할 수 있는지 여부
};

export type TermCondition =
  | CountTermCondition
  | AndOrTermCondition
  | AfterBeforeTermCondition;

export type Repeated =
  | {
      type: "period";
      unit: "day" | "week" | "month";
      value: number; // default: 1
    }
  | {
      type: "no-repeat";
    };

export type CountTermCondition = {
  type: "count";
  /** `yyyy-MM-dd` */
  start: string;
  // 없을 시 끝나지 않음
  end?: string;
  // 없을 시 반복되지 않음
  repeated: Repeated;
  count: number; // default: 1
};

export type AndOrTermCondition = {
  type: "and" | "or";
  conditions: TermCondition[];
};

export type AfterBeforeTermCondition = {
  type: "after" | "before";
  datetime: string;
};
