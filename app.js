const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.type("html").send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>ZAP DevSecOps Demo</title>
      </head>
      <body>
        <h1>OWASP ZAP Training Application</h1>
        <p>This application is for local security testing only.</p>
        <form action="/search" method="GET">
          <label for="q">Search:</label>
          <input id="q" name="q">
          <button type="submit">Search</button>
        </form>
        <a href="/health">Health check</a>
      </body>
    </html>
  `);
});

app.get("/search", (req, res) => {
  const query = String(req.query.q || "");

  // INTENTIONALLY VULNERABLE: never use this pattern in production.
  res.type("html").send(`
    <!doctype html>
    <html lang="en">
      <head><title>Search Results</title></head>
      <body>
        <h1>Search results</h1>
        <p>You searched for: ${query}</p>
        <a href="/">Back</a>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Demo app listening on port ${PORT}`);
});
