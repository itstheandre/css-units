import { all } from "./all";

export function isCssUnit(check: string = ""): boolean {
  if (!check) return false;
  return all.includes(check as any);
}
