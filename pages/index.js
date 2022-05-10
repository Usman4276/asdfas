function HomePage() {
  return (
    <>
      <h1>Auth0 Authentication</h1>
      <a href="http://localhost:3000/api/auth/login">
        <button>Login</button>
      </a>
      <a href="http://localhost:3000/api/auth/logout">
        <button>Logout</button>
      </a>
      <a href="http://localhost:3000/api/auth/me">
        <button>Profile</button>
      </a>
    </>
  );
}

export default HomePage;
