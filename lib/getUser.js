import { cookies } from 'next/headers'; // Ensure this is the correct import for cookies()
import jwt from 'jsonwebtoken';

export async function getUserFromCookie() {
  // Await the cookies() call
  const cookieStore = cookies();
  const theCookie = (await cookieStore.get("ourhaikuapp"))?.value;

  if (theCookie) {
    try {
      const decoded = jwt.verify(theCookie, process.env.JWTSECRET);
      return decoded;
    } catch (err) {
      console.error("Failed to decode JWT:", err);
      return null;
    }
  }
  return null;
}
