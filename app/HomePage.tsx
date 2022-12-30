"use client";

import { Button, Input } from "antd";
import Link from "next/link";

import Label from "@/components/Label";
import type { IChallenge } from "@/lib/challenge/type";
import type { IParticipation } from "@/lib/participation/type";
import type { IUser } from "@/lib/user/type";

const HomePage: React.FC<{
  user: IUser;
  managingChallenges: IChallenge[];
  participations: IParticipation[];
}> = ({ user: userFromServer, managingChallenges }) => {
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
              value={userFromServer.name}
              placeholder="이름을 작성하세요"
              className="w-full max-w-xs input input-bordered input-secondary"
            />
          </div>
          <div className="form-control">
            <Label htmlFor="user_desc">설명</Label>
            <Input.TextArea
              className="h-24 textarea textarea-bordered textarea-secondary"
              id="user_desc"
              value={userFromServer.desc}
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
          <div>
            {managingChallenges.map((challenge) => {
              return (
                <div
                  key={challenge.id}
                  className="flex items-center gap-4 mb-4"
                >
                  <Link
                    href={`/challenge/${challenge.publicId}`}
                    className="flex flex-col flex-1 gap-2 p-3 border shadow hover:bg-gray-100"
                  >
                    <h3 className="m-0 font-semibold">{challenge.title}</h3>
                    {challenge.desc ? (
                      <p className="text-gray-500">Challenge Description</p>
                    ) : null}
                  </Link>
                </div>
              );
            })}
          </div>
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
};

export default HomePage;
