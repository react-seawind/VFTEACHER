import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
