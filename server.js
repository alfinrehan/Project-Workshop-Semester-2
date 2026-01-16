/**
 * Basic Development Server for Task Management Starter Project
 *
 * This is a minimal static file server that serves HTML, CSS, and JavaScript files.
 * Students will build upon this foundation throughout the 5-day course.
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve source files for development
app.use('/src', express.static(path.join(__dirname, 'src')));

// Handle all routes - serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server for local development only
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Development server running at http://localhost:${PORT}`);
    console.log(`Serving files from: ${path.join(__dirname, 'public')}`);
    console.log('Ready for development!');
    console.log('Press Ctrl+C to stop the server');
  });
}

export default app;
