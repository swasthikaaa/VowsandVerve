import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const consultation = await Consultation.create({
      selectedDate: body.selectedDate,
      selectedTime: body.selectedTime,
      type: "Private Design Session",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Consultation booked successfully",
        data: consultation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Consultation booking error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to book consultation",
      },
      { status: 500 }
    );
  }
}