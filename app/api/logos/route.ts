import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'logo');
    const entries = await fs.readdir(dir);
    const svgs = entries.filter((f) => f.toLowerCase().endsWith('.svg'));
    const urls = svgs.map((f) => `/logo/${f}`);
    return NextResponse.json({ logos: urls });
  } catch (err) {
    return NextResponse.json({ logos: [], error: 'LOGO_DIR_READ_FAILED' }, { status: 500 });
  }
}