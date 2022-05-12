import { useUser } from "@auth0/nextjs-auth0";


function HomePage() {
  const { user } = useUser();

  for (const key in user) {
    if (user.email_verified === true) {
      return (
        <>
          <div className="container">
            <h1>Auth0 Authentication</h1>
            <a href="http://localhost:3000/api/auth/login">
              <button className="btn-index" >Login</button>
            </a>
            <a href="http://localhost:3000/profile">
              <button className="btn-index" >Profile</button>
            </a>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="container">
        <h1>Auth0 Authentication</h1>
        <a href="http://localhost:3000/api/auth/login">
          <button className="btn-profile">Login</button>
        </a>
      </div>
    </>
  );
}

export default HomePage;
