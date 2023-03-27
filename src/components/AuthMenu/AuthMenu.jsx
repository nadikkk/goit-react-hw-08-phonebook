import { Link } from "components/Layout/Layout.styled";

export function AuthMenu() {
	return (
		<div className="">
			<Link to='/login'>Login</Link>
			<Link to='/register'>Register</Link>
		</div>
	)
	
}