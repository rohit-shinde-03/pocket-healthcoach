# services/auth/Dockerfile
FROM node:18-alpine

# Set working dir
WORKDIR /app

# Copy everything (package.json, src/, etc.) into /app
COPY . .

# Install deps
RUN npm install

# Expose the port your app listens on
EXPOSE 3000

# Launch via npm start (uses "main" in package.json)
CMD ["npm", "start"]