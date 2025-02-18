import { createClient } from "@/lib/auth/server";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormStatus } from "react-dom";

export async function Login() {
  const supabase = await createClient();
  const { pending } = useFormStatus();

  async function handleSubmit(formData: FormData) {
    "use server";

    const payload = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { error, data } = await supabase.auth.signInWithPassword(payload);
    console.log(error, data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form action={handleSubmit} className="w-full max-w-md space-y-4">
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

        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {pending ? "Entrando..." : "Entrar"}
        </button>

        <div className="text-center">
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Não tem uma conta? Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
