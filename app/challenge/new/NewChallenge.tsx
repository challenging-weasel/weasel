"use client";

import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  message,
  Select,
} from "antd";
import type { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import type { FieldErrors, Resolver } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { HiMinus, HiPlus } from "react-icons/hi";

import ErrorLabel from "@/components/ErrorLabel";
import Label from "@/components/Label";
import type { IChallengeInput, Repeated } from "@/lib/challenge/type";

type FormValues = {
  title: string;
  desc?: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  count: number;
  repeated: Repeated;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: FieldErrors<FormValues> = {};
  if (!values.title) {
    errors.title = {
      type: "required",
      message: "필수 입력입니다.",
    };
  }
  if (!values.startDate) {
    errors.startDate = {
      type: "required",
      message: "필수 입력입니다.",
      valueOf: undefined, // TODO: 타입스크립트 에러
      toString: undefined, // TODO: 타입스크립트 에러
    };
  }

  if (values.count < 1) {
    errors.count = {
      type: "min",
      message: "1 이상이어야 합니다.",
    };
  }

  const hasError = Object.keys(errors).length > 0;

  return {
    values: !hasError ? values : {},
    errors,
  };
};

const NewChallenge: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver,
    defaultValues: {
      repeated: {
        type: "period",
        unit: "week",
        value: 1,
      },
    },
  });

  const [messageApi, contextHolder] = message.useMessage();
  const [submitProgressing, setSubmitProgressing] = useState(false);
  const router = useRouter();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      setSubmitProgressing(true);

      const input: IChallengeInput = {
        title: formData.title,
        config: {
          version: 1,
          termCondition: {
            type: "count",
            count: formData.count,
            end: formData.endDate?.toISOString(),
            start: formData.startDate.toISOString(),
            repeated: formData.repeated,
          },
        },
      };

      const res = await fetch("/api/anon/new-challenge", {
        body: JSON.stringify(input),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await res.json();
      if (resData.error) {
        // eslint-disable-next-line no-console
        console.error(resData.error);
        return;
      }

      messageApi.open({
        type: "success",
        content: `챌린지가 성공적으로 생성되었습니다!`,
      });

      // eslint-disable-next-line no-console
      console.log("new challenge success", resData);

      setSubmitProgressing(true);
      router.push(`/challenge/${resData.challenge.public_id}`); // TODO: typescript 지원
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      messageApi.open({
        type: "error",
        content: e?.message,
      });
      setSubmitProgressing(false);
    }
  });

  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  const formValues = watch();

  return (
    <form onSubmit={onSubmit}>
      {contextHolder}
      <div className="p-3">
        <h1 className="mb-4 text-xl font-bold">새 챌린지 만들기</h1>
        <div className="flex flex-col mb-4">
          <Label htmlFor="title">이름</Label>
          <Controller
            control={control}
            name="title"
            render={({ field }) => {
              return (
                <Input
                  {...field}
                  type="text"
                  id="title"
                  placeholder="이름을 작성하세요"
                  className="w-full max-w-xs input input-bordered input-secondary"
                />
              );
            }}
          />
          {errors?.title && (
            <ErrorLabel htmlFor="title">{errors.title.message}</ErrorLabel>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <Label htmlFor="startDate">시작일</Label>
          <div className="flex items-center gap-4">
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => <DatePicker id="startDate" {...field} />}
            />
            {!endDateOpen ? (
              <Button
                onClick={() => setEndDateOpen(true)}
                className="inline-flex items-center gap-1 text-gray-400"
              >
                <HiPlus />
                <span>종료일</span>
              </Button>
            ) : null}
          </div>
          {errors?.startDate && (
            <ErrorLabel htmlFor="startDate">
              {errors.startDate.message}
            </ErrorLabel>
          )}
        </div>

        {endDateOpen ? (
          <div className="flex flex-col mb-4">
            <Label htmlFor="endDate">종료일</Label>
            <div className="flex items-center gap-4">
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => <DatePicker id="endDate" {...field} />}
              />
              <Button
                onClick={() => {
                  setEndDateOpen(false);
                  setValue("endDate", undefined);
                }}
                className="inline-flex items-center gap-1 text-gray-400"
              >
                <HiMinus />
                <span>제거</span>
              </Button>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="startDate">반복 주기</Label>

            <Controller
              name="repeated.type"
              control={control}
              render={({ field: { value, onChange, ...rest } }) => {
                return (
                  <Checkbox
                    {...rest}
                    checked={value === "no-repeat"}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onChange("no-repeat");
                      } else {
                        onChange("period");
                      }
                    }}
                  >
                    없음
                  </Checkbox>
                );
              }}
            />
          </div>

          {formValues.repeated?.type !== "no-repeat" && (
            <div className="flex items-center gap-2">
              {formValues.repeated?.type === "period"}
              <Controller
                name="repeated.value"
                control={control}
                render={({ field }) => (
                  <InputNumber
                    style={{ width: 50 }}
                    id="repeated.value"
                    {...field}
                  />
                )}
              />

              <Controller
                name="repeated.unit"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    id="repeated.type"
                    options={[
                      {
                        value: "day",
                        label: "일",
                      },
                      {
                        value: "week",
                        label: "주",
                      },
                      {
                        value: "month",
                        label: "월",
                      },
                    ]}
                  />
                )}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <Label htmlFor="count">인증 횟수</Label>
          <div className="flex items-center gap-2">
            <Controller
              name="count"
              control={control}
              render={({ field }) => <InputNumber id="count" {...field} />}
            />
            <span>회</span>
          </div>
          {errors?.count ? (
            <ErrorLabel htmlFor="count">{errors.count.message}</ErrorLabel>
          ) : null}
        </div>

        <div className="flex flex-col mb-4">
          {!descriptionOpen ? (
            <Button
              onClick={() => setDescriptionOpen(true)}
              className="text-gray-400"
            >
              설명 추가
            </Button>
          ) : (
            <>
              <Label htmlFor="desc">설명</Label>
              <Controller
                control={control}
                name="desc"
                render={({ field }) => {
                  return (
                    <Input.TextArea
                      {...field}
                      autoFocus
                      className="h-24 textarea textarea-bordered textarea-secondary"
                      id="desc"
                      placeholder="설명을 작성하세요"
                    />
                  );
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="primary"
          htmlType="submit"
          className="rounded-none"
          size="small"
          loading={submitProgressing}
        >
          만들기
        </Button>
      </div>
    </form>
  );
};

export default NewChallenge;
