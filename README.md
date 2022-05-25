# Reddit Clone App

Full Stack [Reddit](https://www.reddit.com/) **minimal** clone app built with [Next JS](https://nextjs.org/), [SupaBase](https://supabase.com/), [StepZen](https://stepzen.com/), [Apollo GraphQL](hhttps://www.apollographql.com/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/),

This project is hosted by & deployed at **Vercel**: [https://reddit-clone.skagur.dev](https://reddit-clone.skagur.dev)

## Frontend

-   Next JS
-   TypeScript
-   Tailwind CSS

## Backend

-   Apollo GraphQL
-   SupaBase Postgres
-   StepZen

# Features

-   **Next-Auth**: OAuth2 authentication via _GitHub_
-   **Create** Posts, Subreddits and Comments
-   **Upvote/Downvote** posts
-   Homepage Feed
-   Dynamically generated Subreddit & Post page
-   Toasts with [react-hot-toast](https://react-hot-toast.com/)
-   Icons from [@heroIcons](https://heroicons.com/)

## Installation

1. Clone this repository

```
git clone https://github.com/skagur-k/reddit-clone.git
cd reddit-clone
```

2. Install dependencies

```
yarn
```

3. Install _StepZen_ globally, login and deploy the server

```
npm install -g stepzen
stepzen login
cd stepzen
stepzen start
```

4. Configure GraphQL client

```ts
const client = new ApolloClient({
    uri: {YOUR STEPZEN API ROUTE},
    headers: {
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
    },
    cache: new InMemoryCache(),
})

```

5. Configure Environment variables. Create a new .env.local file at the root directory and fill out the following:

```bash
GITHUB_ID= {YOUR GITHUB API ID}
GITHUB_SECRET= {YOUR GITHUB API SECRET}
NEXT_PUBLIC_STEPZEN_KEY= {YOUR STEPZEN KEY}
POSTGRES_PW= {YOUR SUPABASE POSTGRES DB PASSWORD}
NEXTAUTH_SECRET= {BASE64 SECRET via `openssl rand -base64 32`}
NEXTAUTH_URL= {http://localhost:3000}
```

5. Run yarn dev

```
yarn dev
```

## Screenshots

![2](https://user-images.githubusercontent.com/8953479/170269496-01e5ad2d-75a3-4160-a166-325312a93bd3.png)
![3](https://user-images.githubusercontent.com/8953479/170269508-308d9b0e-1653-4bfc-9ab0-da77d4e42662.png)
![4](https://user-images.githubusercontent.com/8953479/170269513-0dcfd594-a66b-4f72-b4f7-8ec94c933060.png)
