import { Suspense } from "react";
import { SignUp } from "./_sign-up-component";

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
}
