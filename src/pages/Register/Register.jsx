import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUser } from 'redux/user/operations';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
//   console.log(location);
const newUser = {
	name,
	email,
	password,
}
  const isSubmitUserRegister = (e) => {
	e.preventDefault();
	dispatch(registerUser(newUser))
	setName('');
	setEmail('');
	setPassword('');
  }
  if (isLoggedIn) {
	return <Navigate to="/contacts" replace />;
 }
  return (
    <Box
      component="form"
		onSubmit={isSubmitUserRegister}
      sx={{
			width: 300,
			m: 'auto',
        '& > :not(style)': { m: 2 },
      }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
		  required
		  type="text"
          id="component-outlined"
          value={name}
			  onChange={(e)=>setName(e.target.value)}
          label="Name"
        />
      </FormControl>
		<FormControl>
        <InputLabel htmlFor="outlined-email">Email</InputLabel>
        <OutlinedInput
		  required
		  type='email'
          id="outlined-email"
          value={email}
			  onChange={(e)=>setEmail(e.target.value)}
          label="Email"
        />
      </FormControl>
		<FormControl>
        <InputLabel htmlFor="outlined-password-input">Password</InputLabel>
        <OutlinedInput
		  required
		  type="password"
		  autoComplete="current-password"
          id="outlined-password-input"
          value={password}
			  onChange={(e)=>setPassword(e.target.value)}
          label="Password"
        />
      </FormControl>
      <Button variant="contained" type="submit">Register</Button>
    </Box>
  );
}
