import {User} from './user';

export interface Admin extends User {
  isAdmin: boolean;
}
