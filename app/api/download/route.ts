import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { readFile } from 'fs/promises';
import { join } from 'path';

const DOCX_PATH = join(process.cwd(), 'data', 'downloads', 'SAP_Developer_DevOps_Study_Notes.docx');

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Download token required' }, { status: 400 });
  }

  try {
    const registration = await prisma.registration.findUnique({
      where: { downloadToken: token },
    });

    if (!registration) {
      return NextResponse.json({ error: 'Invalid or expired download link' }, { status: 404 });
    }

    const fileBuffer = await readFile(DOCX_PATH);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="SAP_Developer_DevOps_Study_Notes.docx"`,
      },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return NextResponse.json({ error: 'File not found' }, { status: 500 });
    }
    console.error('Download error:', error);
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}
