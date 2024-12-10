import { NextResponse } from "next/server";
import { getUser } from "./../../../auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const auth = await getUser();

    console.log(auth);

    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({
      where: {
        id: (auth as any).id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
