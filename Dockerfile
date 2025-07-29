FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

FROM base AS builder
WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]