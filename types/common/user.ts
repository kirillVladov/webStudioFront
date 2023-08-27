export type UserRole = "worker" | "employer";
export interface AuthRequest {
  email: string;
  password: string;
}

export interface RegistrationRequest extends AuthRequest {
  role: UserRole;
  surname: string;
  name: string;
  phoneNumber: string;
}

export interface Profile extends RegistrationRequest {
  userId: string;
}
