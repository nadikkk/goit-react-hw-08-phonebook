import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';

export function Layout() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
        </nav>
		  {isLoggedIn ? <UserMenu/> : <AuthMenu/>}
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
