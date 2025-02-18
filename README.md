
## Começando

Este é um projeto [Next.js](https://nextjs.org) versão 15, criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Para instalar as dependências, execute:

```bash
npm i -g pnpm
pnpm i
```

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra http://localhost:3000/stores/1 no seu navegador para ver o resultado.

OU acesse https://projeto-yooga-fernando.vercel.app/stores/1 diretamente

Você pode começar a editar a página modificando app/page.tsx. A página será atualizada automaticamente enquanto você edita o arquivo.

> [!CAUTION]
> Be careful when protecting pages. The server gets the user session from the cookies, which can be spoofed by anyone.
> Always use supabase.auth.getUser() to protect pages and user data.
> Never trust supabase.auth.getSession() inside server code such as middleware. It isn't guaranteed to revalidate the Auth token.
> It's safe to trust getUser() because it sends a request to the Supabase Auth server every time to revalidate the Auth token.
