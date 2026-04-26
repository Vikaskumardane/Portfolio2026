import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: result.message || "Failed to send message" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
