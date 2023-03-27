import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/user/operations';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
      }}
    >
      <p>{user.email}</p>
      <Button
        size="small"
        type="button"
        variant="contained"
        onClick={() => {
          dispatch(logOutUser());
        }}
      >
        Logout
      </Button>
    </div>
  );
}
