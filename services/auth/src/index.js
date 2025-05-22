// services/auth/src/index.js
import express from 'express';
const app = express();
app.get('/health', (_req, res) => res.send('OK'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Auth service listening on ${port}`));
