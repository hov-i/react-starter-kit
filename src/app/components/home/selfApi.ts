import fetch from "@/apis/fetch";

export function signIn(params: Record<string, unknown>) {
  return fetch.post("/login", params);
}
