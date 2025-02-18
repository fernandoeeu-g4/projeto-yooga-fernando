"use server";

import { createClient } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function SignIn() {
  async function handleSignIn(formData: FormData) {
    "use server";

    const supabase = await createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { error, data: user } = await supabase.auth.signInWithPassword(data);
    console.log(error, user);
    if (!error) {
      redirect("/");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form action={handleSignIn} className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Entrar</h1>

        <input
          type="email"
          name="email"
          placeholder="Seu email"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Sua senha"
          required
          className="w-full p-2 border rounded"
        />

        <Button className="w-full" type="submit">
          Entrar
        </Button>

        <div className="text-center">
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Não tem uma conta? Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
