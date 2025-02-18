export type SupabaseUser = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  identities: Identity[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};

export type Identity = {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: UserMetadata;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
  email: string;
};

export type UserMetadata = {
  email: string;
  email_verified: boolean;
  phone_verified: boolean;
  sub: string;
};

export type AppMetadata = {
  provider: string;
  providers: string[];
};

// Nosso tipo de usuário customizado
export type User = {
  id: string;
  email: string;
  name?: string; // Opcional, pois pode não estar diretamente no user do Supabase
  // Adicione outros campos que você precisa
};

// Type do Adapter
type AuthAdapter = {
  getUser: () => Promise<User | null>;
};

// Supabase Adapter
const createSupabaseAdapter = (supabaseClient: any): AuthAdapter => {
  return {
    getUser: async (): Promise<User | null> => {
      const {
        data: { user },
        error,
      } = await supabaseClient.auth.getUser();

      if (error || !user) {
        return null;
      }

      // Adapte os dados do usuário do Supabase para o tipo 'User'
      const adaptedUser: User = {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name, // Acessando 'name' de forma segura
        // Adapte outros campos conforme necessário
      };

      return adaptedUser;
    },
  };
};

export default createSupabaseAdapter;
