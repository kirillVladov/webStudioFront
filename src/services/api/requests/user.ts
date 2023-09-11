import $http from "../http";
import type {
  AuthRequest,
  ChangePasswordRequest,
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

export async function patchProfile(data: Profile): Promise<Profile> {
  return await $http.patch(`${base}`, data);
}

export async function changePassword(
  data: ChangePasswordRequest
): Promise<Profile> {
  return await $http.patch(`${base}/change-password`, data);
}

export async function registration(
  data: RegistrationRequest
): Promise<Profile> {
  return await $http.post(`${base}/registration`, data);
}

export async function updateAllUsers(page: number): Promise<Profile[]> {
  return await $http.get(`${base}/get-list`, { params: { page } });
}
