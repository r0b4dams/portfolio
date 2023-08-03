import { type NextRequest, NextResponse as res } from 'next/server';

import projects from './projects.json';

export async function GET(req: NextRequest) {
  return res.json(projects);
}
