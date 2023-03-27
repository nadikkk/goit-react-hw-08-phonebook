import { useSelector } from 'react-redux';
import {
  selectorUser,
  selectorUserLoggedinIn,
  selectorUserRefreshing,
  selectorUserToken,
} from 'redux/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectorUserLoggedinIn);
  const isRefreshing = useSelector(selectorUserRefreshing);
  const user = useSelector(selectorUser);
  const token = useSelector(selectorUserToken);

  return { isLoggedIn, isRefreshing, user, token };
};
