import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
export default function Home() {
  const auth = useUser();
  if (auth.user.email) return <Redirect to="/profile" />;
  return (
    <section>
      <h1>Welcome to the Acme Directory</h1>
      <p>
        Please <Link to="login">login</Link> to use the directory
      </p>
    </section>
  );
}
