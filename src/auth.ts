import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt");

  if (!token) {
    return null;
  }

  try {
    const decoded = verify(token.value, process.env.JWT_SECRET as string);
    return decoded;
  } catch (error) {
    return null;
  }
}
