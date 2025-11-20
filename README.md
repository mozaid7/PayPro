# 💸 PayPro — Modern Payments Platform

**PayPro** is a modern, secure, and scalable web application that enables users to seamlessly send money, manage wallets, and perform on-ramping/off-ramping of funds.  
It’s designed using **Next.js**, **PostgreSQL**, **NextAuth**, and **Docker**, and is powered by **Turborepo** for efficient monorepo management.

---

## 🚀 Features

- 🔐 **User Authentication** — Secure login & signup using NextAuth  
- 💳 **Wallet System** — Add and manage funds with real-time balance updates  
- 💸 **Payments & Transfers** — Send and receive money instantly  
- 🪙 **On-Ramping Support** — Add funds from external payment providers  
- 🐳 **Dockerized Environment** — Easy setup and consistent development  
- 🧩 **Modular Architecture** — Built using Turborepo for scalability  

---

## 🧠 Tech Stack

| Category | Technologies Used |
|-----------|------------------|
| **Frontend** | Next.js, React, Tailwind CSS |
| **Backend** | Node.js, NextAuth, Prisma |
| **Database** | PostgreSQL |
| **Infrastructure** | Docker, Docker Compose |
| **Tooling** | Turborepo, TypeScript |

---

## ⚙️ Getting Started

Follow these steps to run **PayPro** locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/PayPro.git
cd PayPro/PayPro-main

```
### 2️⃣ Install Dependencies
```
npm install
```
### 3️⃣ Configure Environment Variables
```
- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)
```
### 4️⃣ Run Development Server
```
npm run dev
```
