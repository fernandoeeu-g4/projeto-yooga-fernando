"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function handleForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  const result = formSchema.safeParse({ name, email });

  if (!result.success) {
    console.log("Validation error:", result.error);
    return { error: "Invalid form data" };
  }

  console.log("Form data:", {
    name: result.data.name,
    email: result.data.email,
  });

  return { success: true };
}
