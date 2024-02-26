import { VercelRequest, VercelResponse } from "@vercel/node";
import { execSync } from "child_process";
import fs from "fs";

export async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
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

      res.status(200).json({ success: true, message: "Data pulled successfully." });
    } catch (error) {
      console.error("Error pulling events:", error);
      res.status(500).json({ success: false, message: "Internal server error." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}