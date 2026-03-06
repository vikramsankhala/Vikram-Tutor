#!/bin/bash
# Run after deploying to Render: prisma migrate deploy
# Or use: npx prisma db push (for dev)
npx prisma migrate deploy
