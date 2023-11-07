import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      <section className="flex flex-col justify-center items-center flex-1">
        <Outlet />
      </section>
      <img className="" src="/assets/images/side-img.svg  " alt="logo" />
    </>
  );
};

export default AuthLayout;
