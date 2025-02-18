import { getMe } from "@/queries/auth/use-me";
import { Suspense } from "react";

export default async function Home() {
  console.log("Home");
  const data = await getMe();
  // console.log(data);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Home</div>
    </Suspense>
  );
}
