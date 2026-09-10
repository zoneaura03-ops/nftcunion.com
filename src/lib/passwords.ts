import { compare, hash } from "bcryptjs";

const BCRYPT_MAX_BYTES = 72;

export function normalizePassword(password: string) {
  return password.normalize("NFC");
}

export function passwordFitsBcrypt(password: string) {
  return (
    Buffer.byteLength(normalizePassword(password), "utf8") <= BCRYPT_MAX_BYTES
  );
}

export async function hashPassword(password: string) {
  return hash(normalizePassword(password), 12);
}

async function safeCompare(password: string, storedValue: unknown) {
  if (typeof storedValue !== "string" || !storedValue) return false;
  try {
    return await compare(password, storedValue);
  } catch {
    return false;
  }
}

export async function verifyPassword(
  password: string,
  ...storedValues: unknown[]
) {
  const normalized = normalizePassword(password);
  const candidates =
    normalized === password ? [password] : [normalized, password];
  for (const candidate of candidates) {
    for (const storedValue of storedValues) {
      if (await safeCompare(candidate, storedValue)) return true;
    }
  }
  return false;
}
