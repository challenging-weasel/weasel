"use client";

import { Button, DatePicker, Input, InputNumber } from "antd";
import type { Dayjs } from "dayjs";
import type React from "react";
import { useMemo, useState } from "react";
import type { Resolver } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";

import ErrorLabel from "@/components/ErrorLabel";
import Label from "@/components/Label";

type FormValues = {
  name: string;
  desc: string;
  startDate: Dayjs;
  endDate: Dayjs;
  count: number;
};

const resolver: Resolver<FormValues> = async (values) => {
  console.log(values);
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "필수 입력입니다.",
          },
        }
      : {},
  };
};

const NewChallenge: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const oo = useMemo(() => {
    return register("name");
  }, [register]);

  return (
    <form onSubmit={onSubmit}>
      <div className="p-3">
        <h1 className="mb-4 text-xl font-bold">새 챌린지 만들기</h1>
        <div className="flex flex-col mb-4">
          <Label htmlFor="user_name">이름</Label>
          <Controller
            control={control}
            name="name"
            render={({ field }) => {
              return (
                <Input
                  {...field}
                  type="text"
                  id="user_name"
                  placeholder="이름을 작성하세요"
                  className="w-full max-w-xs input input-bordered input-secondary"
                />
              );
            }}
          />
          {errors?.name && (
            <ErrorLabel htmlFor="user_name">{errors.name.message}</ErrorLabel>
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
            <Button
              size="small"
              onClick={() => setDescriptionOpen(true)}
              className="inline-flex items-center gap-1 text-gray-400"
            >
              <HiPlus />
              <span>종료일</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <Label htmlFor="startDate">반복 주기</Label>
          <div className="flex gap-4">
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => <DatePicker id="startDate" {...field} />}
            />
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => <DatePicker id="startDate" {...field} />}
            />
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => <DatePicker id="startDate" {...field} />}
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <Label htmlFor="count">인증 횟수</Label>
          <div className="flex items-center gap-4">
            <Controller
              name="count"
              control={control}
              render={({ field }) => <InputNumber id="count" {...field} />}
            />
            <span>회</span>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          {!descriptionOpen ? (
            <Button
              size="small"
              onClick={() => setDescriptionOpen(true)}
              className="text-gray-400"
            >
              설명 추가
            </Button>
          ) : (
            <>
              <Label htmlFor="user_desc">설명</Label>
              <Controller
                control={control}
                name="desc"
                render={({ field }) => {
                  return (
                    <Input.TextArea
                      {...field}
                      autoFocus
                      className="h-24 textarea textarea-bordered textarea-secondary"
                      id="user_desc"
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
        >
          만들기
        </Button>
      </div>
    </form>
  );
};

export default NewChallenge;
