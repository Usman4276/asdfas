import { useUser } from "@auth0/nextjs-auth0";

export default function HomePage() {
  const { user } = useUser();

  if (!user) {
    return (
      <>
        <div className="container">
          <h1>Auth0</h1>
          <h4 className="log-status">Logged out 🔴</h4>
          <a href="/api/auth/login">
            <button className="btn">Login</button>
          </a>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <h1>Auth0 </h1>
        <h4 className="log-status">Logged in 🟢</h4>
        <div>
          <a href="/api/auth/logout">
            <button className="btn">Logout</button>
          </a>
          <a href="/products">
            <button className="btn-products">Products</button>
          </a>
        </div>
      </div>
    </>
  );
}
