import { UserScheme, User } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { type UserScheme, type User, userReducer, userActions };
