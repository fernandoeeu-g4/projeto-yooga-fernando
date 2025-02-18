import { Suspense } from "react";
import { SignIn } from "./_sign-in-component";

export default function SignInPage() {
  return (
    <Suspense>
      <SignIn />
    </Suspense>
  );
}
