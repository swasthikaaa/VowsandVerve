import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const inquiry = await Inquiry.create({
      name: body.name,
      email: body.email,
      weddingDate: body.weddingDate,
      theme: body.theme,
      message: body.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry saved successfully",
        data: inquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry submit error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save inquiry",
      },
      { status: 500 }
    );
  }
}