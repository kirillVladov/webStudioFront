import $http from "../http";
import type {
  AuthRequest,
  Profile,
  RegistrationRequest,
} from "../../../../types/common/user";

const base = "/users";
export async function updateProfile(): Promise<Profile> {
  return await $http.get(`${base}/profile`);
}

export async function auth(data: AuthRequest): Promise<Profile> {
  return await $http.post(`${base}/auth`, data);
}

export async function registration(
  data: RegistrationRequest
): Promise<Profile> {
  return await $http.post(`${base}/registration`, data);
}
