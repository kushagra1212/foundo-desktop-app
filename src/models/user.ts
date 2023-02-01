interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNo: string;
  countryCode: null;
  profilePhoto: string;
  address: string;
  createdAt: string;
  otp: number;
  is_verified: number;
}

export default User;
