# IMAGE-MAGIC
 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

pen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

This project uses [`shadcn`](https://ui.shadcn.com/) for UI's.

# For Local Development
1st Clone the Repo

```
git clone https://github.com/SwarnenduG07/ImageMagic.git

cd imagemagic
```

Go to the project directory and do

 ```bash
npm install
```

### Next Step

 Go to _*[.env.example]*_ 
 Replace your won API keys with existing one's

### Replace

 CLERK_PUBLISHABLE_KEY &  CLERK_SECRET_KEY & webhook secret

 Go to [`Clerk`](https://clerk.com/)

Cloudinary_API_TOKEN

Go to[`Cloudinary`](https://cloudinary.com/documentation) Then Copy 

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```
Then go to setting/upload and enable unsigned URL then create app and then give a folder name. then go to adOns and turn on google auto tagging.

## Db_URL

go to [`MongoDb Altas`]([`Cloudinary`](https://cloudinary.com/documentation) ) 

STRIP API TOKEN & STRIPE_WEBHOOK_SECRET

Go to [`Strip`](https://stripe.com/in)


## How to Download strip-cli

In WINDOWS
we will use [`Scoop`](https://scoop.sh/) to install it so

Open PowerShell and pest this command to install scoop

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

Now we will install Strip-cli
To install this pest this 👇 command

```bash
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
scoop install stripe
```

This will install Strip-cli

### For Other OS

 Visit this [`Strip-cli`](https://docs.stripe.com/stripe-cli)
 and install this

Then Create an account and get a API key and replace this with STRIPE_API_KEY then go to webhook and download the strip-cli and run it  

```bash
stripe login
```

In your terminal and do then

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

 in webhook section and it in your terminal you will get something like this 

```bash
[whsec_97347152fae0xxxxxx823xxb1707d0b4aaa1794a5abf9c1sdkjh17]
```

put this in your STRIPE_WEBHOOK_SECRET

## For Running the project

  ```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
