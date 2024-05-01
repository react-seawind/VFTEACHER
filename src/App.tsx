import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './common/Loader/index';
import routes from './routes/index.jsx';
import RequireAuth from './Private/Requiredau';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout.jsx'));
const SignIn = lazy(() => import('./pages/Authentication/SignIn.jsx'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous check for user authentication
    setTimeout(() => {
      // Assuming the user is authenticated, setLoggedIn(true)
      setLoggedIn(true);
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      {loggedIn ? (
        <Routes>
          <Route
            path="/login"
            index
            element={
              <Suspense fallback={<Loader />}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            element={
              <RequireAuth>
                <DefaultLayout />
              </RequireAuth>
            }
          >
            {routes.map((routes, index) => (
              <>
                <Route
                  key={index}
                  path={routes.path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <routes.component />
                    </Suspense>
                  }
                />
                <Route
                  path="*"
                  key={index}
                  element={<Navigate to="/dashboard" />}
                />
              </>
            ))}
          </Route>
        </Routes>
      ) : (
        <Route path="*" element={<SignIn />} />
      )}
    </>
  );
}

export default App;
