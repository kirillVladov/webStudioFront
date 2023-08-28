export type UserRole = "worker" | "employer";
export interface AuthRequest {
  email: string;
  password: string;
}

// export type UserInfo = {
//   price?: number;
//   experience?: string;
// };

export interface RegistrationRequest extends AuthRequest {
  role: UserRole;
  surname: string;
  name: string;
  phoneNumber: string;
}

export interface Profile {
  userId: string;
  avatar: string;
  surname: string;
  name: string;
  phoneNumber: string;
  role: UserRole;
  // info?: UserInfo;
  email: string;
}
