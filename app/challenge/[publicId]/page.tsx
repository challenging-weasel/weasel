import { notFound } from "next/navigation";

import { Errors } from "@/lib/const";
import { getServerSideSupabaseClient } from "@/lib/supabase/server-side-client";

type Params = { publicId: string };

async function fetchData(params: Params) {
  const db = getServerSideSupabaseClient();

  const res = await db
    .from("challenges")
    .select("*, manager:manager_id(*)")
    .eq("public_id", params.publicId)
    .single();

  if (res.error) {
    if (res.error.code === Errors.SingleNotFound.code) {
      notFound();
    }
    throw new Error(res.error.message);
  }

  return res.data;
}

async function Page({
  params,
}: {
  params: Params;
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);
  //   data.manager as Database["public"]["Tables"]["profiles"]["Row"];

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">챌린지</h2>
      <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Page;
