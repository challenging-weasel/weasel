"use client";

import { Button, Input } from "antd";
import { atom, useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

import Label from "@/components/Label";
import { userPublicIdAtom } from "@/lib/user/data";
import type { IUser } from "@/lib/user/type";

const userAtom = atom<IUser>({
  publicId: "",
  name: "string",
  desc: "string",
  createdAt: "string",
});

export default function HomePage({ user: userFromServer }: { user: IUser }) {
  useHydrateAtoms([[userAtom, userFromServer] as const]);
  const [userPublicId, setUserPublicId] = useAtom(userPublicIdAtom);
  const [user] = useAtom(userAtom);

  useEffect(() => {
    if (userPublicId !== user.publicId) {
      setUserPublicId(user.publicId);
    }
  }, [setUserPublicId, user.publicId, userPublicId]);

  return (
    <>
      <div className="bg-white border border-gray-400 ">
        <div className="p-3">
          <h2 className="mb-4 text-xl font-bold">프로필</h2>
          <div className="w-full max-w-xs form-control">
            <Label htmlFor="user_name">이름</Label>
            <Input
              type="text"
              id="user_name"
              placeholder="이름을 작성하세요"
              className="w-full max-w-xs input input-bordered input-secondary"
            />
          </div>
          <div className="form-control">
            <Label htmlFor="user_desc">설명</Label>
            <Input.TextArea
              className="h-24 textarea textarea-bordered textarea-secondary"
              id="user_desc"
              placeholder="설명을 작성하세요"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="primary" className="rounded-none" size="small">
            변경사항 저장
          </Button>
        </div>
      </div>
      <div className="flex -mt-px">
        <div className="p-3 bg-white border border-gray-400 ">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-bold">관리</h2>
            <Link href="/challenge/new" passHref legacyBehavior>
              <Button type="primary" className="rounded-none" size="small">
                NEW CHALLENGE
              </Button>
            </Link>
          </div>
          <div>things...</div>
        </div>
        <div className="flex-1 p-3 -ml-px bg-white border border-gray-400">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-bold">참여하기</h2>
            <Button type="primary" className="rounded-none" size="small">
              추가
            </Button>
          </div>
          <div>things...</div>
        </div>
      </div>
      <h2 className="mb-4 text-xl font-bold">참여 중</h2>
      <h2 className="mb-4 text-xl font-bold">관리 중</h2>
    </>
  );
}
