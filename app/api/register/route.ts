import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { randomBytes } from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, company } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const downloadToken = randomBytes(32).toString('hex');

    const registration = await prisma.registration.create({
      data: {
        email: email.trim().toLowerCase(),
        name: name.trim(),
        company: company?.trim() || null,
        downloadToken,
      },
    });

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL
      || process.env.RENDER_EXTERNAL_URL
      || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
      || request.headers.get('origin')
      || 'http://localhost:3000';
    const downloadUrl = `${baseUrl}/api/download?token=${downloadToken}`;

    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      downloadUrl,
      downloadToken,
    });
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json(
        { error: 'This email is already registered' },
        { status: 409 }
      );
    }
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    );
  }
}
