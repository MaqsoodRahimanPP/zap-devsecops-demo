const test = require("node:test");
const assert = require("node:assert/strict");

test("demo application has a valid package and entry point", () => {
  const pkg = require("../package.json");

  assert.equal(pkg.name, "zap-devsecops-demo");
  assert.equal(pkg.main, "app.js");
  assert.equal(typeof pkg.scripts.start, "string");
});

test("health endpoint contract is defined in the application", () => {
  const fs = require("node:fs");
  const app = fs.readFileSync(
    require.resolve("../app.js"),
    "utf8"
  );

  assert.match(app, /app\.get\(["']\/health["']/);
  assert.match(app, /status:\s*["']ok["']/);
});
