import { User } from "@/types";

export function isAdmin(user: User | null): boolean {
  return user?.isAdmin === true;
}

export function requireAdmin(user: User | null): void {
  if (!isAdmin(user)) {
    throw new Error("관리자 권한이 필요합니다");
  }
}
