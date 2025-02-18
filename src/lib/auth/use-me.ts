export type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthAdapter = {
  getUser: () => Promise<User | null>;
};

const AUTH_PROVIDER = process.env.AUTH_PROVIDER || "supabase";

// Adapters
import createSupabaseAdapter from "./adapters/supabase-user";
// import createFirebaseAdapter from './adapters/firebaseAdapter';

const createAdapter = async (): Promise<AuthAdapter> => {
  if (AUTH_PROVIDER === "supabase") {
    const { createClient } = await import("@supabase/supabase-js");
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabaseClient = createClient(
      supabaseUrl as string,
      supabaseKey as string
    );
    return createSupabaseAdapter(supabaseClient);
  } else {
    throw new Error(
      `Adaptador de autenticação não suportado: ${AUTH_PROVIDER}`
    );
  }
};

// Hook useMe (server-side)
async function getMe(): Promise<
  | {
      user: User | null;
      error: any | null;
    }
  | undefined
> {
  try {
    const adapter = await createAdapter();
    const user = await adapter.getUser();
    return { user: user, error: null };
  } catch (error: any) {
    return { user: null, error: error };
  }
}

export default getMe;

// ---

// Client component example (if needed)
// 'use client'
// import { useState, useEffect } from 'react';
// import getMe from './getMe';

// function ClientComponent() {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<any | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       setIsLoading(true);
//       const { user, error } = (await getMe()) || { user: null, error: 'Erro ao buscar usuário' };

//       if (user) {
//         setUser(user);
//       }
//       if (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     }

//     fetchData();
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (user) return <p>Welcome, {user?.name || user.email}!</p>;
//   return <p>Not authenticated</p>;
// }

// export { ClientComponent };
