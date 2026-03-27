# PaintPros

Professional painting contractor management — estimates, job scheduling, crew management, invoicing, and customer CRM.

**Live:** [paintpros.io](https://paintpros.io) · [nashpaintpros.io](https://nashpaintpros.io)

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite 7 (Radix UI) |
| Backend | Express + TypeScript |
| Database | PostgreSQL (Drizzle ORM) |
| Payments | Stripe |
| Auth | Trust Layer SSO |
| Deployment | Render (Ohio) |

## Structure

```
paintpros/
├── server/
│   └── routes.ts     # 15,895 lines — API routes
├── client/           # React SPA
├── shared/           # Drizzle schema
├── uploads/          # File uploads
└── render.yaml
```

## Development

```bash
npm install
npm run dev
npm run db:push
```
