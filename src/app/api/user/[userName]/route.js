import { dbConnect } from "@/lib/dbConnect";
import { UserModel } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { userName } = params;

  if (!userName) {
    return NextResponse.json(
      { message: "Username is required" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const user = await UserModel.findOne({ userName: userName });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req, { params }) {
  const { userName } = params;
  const data = await req.json();

  if (!userName) {
    return NextResponse.json(
      { message: "Username is required" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const updatedUser = await UserModel.findOneAndUpdate(
      { userName },
      {
        $set: { ...data, isPaymentAccepted: true },
      }
    );

    console.log(updatedUser);

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
