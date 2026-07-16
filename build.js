const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const siteDir = "/home/team/shared/site";

// Remove unwanted route files
try {
  fs.unlinkSync(path.join(siteDir, "src/routes/sitemap.xml.ts"));
  console.log("Removed sitemap.xml.ts");
} catch (e) { /* already gone */ }
try {
  fs.unlinkSync(path.join(siteDir, "src/routes/robots.txt.ts"));
  console.log("Removed robots.txt.ts");
} catch (e) { /* already gone */ }

// List routes
console.log("Routes:", fs.readdirSync(path.join(siteDir, "src/routes")));

// Run build
console.log("Building...");
const result = execSync("bun run build", { cwd: siteDir, stdio: "pipe" });
console.log("Build output:", result.stdout.toString());
console.log("Build stderr:", result.stderr.toString());