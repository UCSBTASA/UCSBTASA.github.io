// api/pullEvents.ts

import { VercelRequest, VercelResponse } from "@vercel/node";
import { execSync } from "child_process";
import fs from "fs";

export async function GET(req: VercelRequest, res: VercelResponse) {
  // Define the path to script.py
  const scriptPath = "app/api/hello/script.py";

  // Run the Python script and capture its output
  const pythonOutput = execSync(`python ${scriptPath}`, {
    encoding: "utf-8",
  });

  // Write the Python output to a TypeScript file in the desired format
  const tsFilePath = "data/eventData.ts";
  fs.writeFileSync(
    tsFilePath,
    `const events = ${pythonOutput.trim()};\n\nexport default events;\n`
  );
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
