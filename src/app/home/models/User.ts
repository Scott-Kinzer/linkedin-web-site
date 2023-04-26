import { Post } from './Post';
import { Role } from './Role';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imagePath: string;
  role?: Role;
  posts?: Post[];
}
