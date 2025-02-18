import { createClient } from "@/lib/auth/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function SignUp() {
  async function handleSignUp(formData: FormData) {
    "use server";

    const supabase = await createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { error, data: user } = await supabase.auth.signUp(data);
    console.log(error, user);
    if (!error) {
      redirect("/sign-in");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form action={handleSignUp} className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Criar Conta</h1>

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

        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Entrar
        </button>

        <div className="text-center">
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            Já tem uma conta? Entre
          </Link>
        </div>
      </form>
    </div>
  );
}
