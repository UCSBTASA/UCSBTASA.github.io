import { NextRequest, NextResponse } from "next/server";
import {exec} from 'child_process';
import path from "path";
//api endpoint that executes google sheets python script when called (by vercel's cron job function)
let scriptPath = '/Users/gabewkung/UCSBTASA.github.io/scripts/script_2.py'
export async function GET(request: NextRequest) {
    exec(`python3 ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
             console.error(`Error: ${error.message}`); 
             return NextResponse.json({status: `unsuccessful ${error.message}`}); 
        }
         if (stderr) {
             console.error(`Error: ${stderr}`); 
             return NextResponse.json({status: `Error: ${stderr}`})
         }
         return NextResponse.json({status: "success", output: stdout})
    })
    return NextResponse.json({ message: 'cron job ran' });
}
