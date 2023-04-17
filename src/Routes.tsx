import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
// import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from "./pages/LoginPage";
import { NoPageFound } from "./pages/NoPageFound";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";
// import { SignUpPage } from './pages/SignUpPage';
// import { NoPageFound } from './pages/NoPageFound';
// import { PrivateRoute } from './auth/PrivateRoute';

export const RouteInfo = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <PrivateRoute path="/"><UserInfoPage /></PrivateRoute> */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<UserInfoPage />}></Route>
        </Route>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<NoPageFound />} />
      </Routes>
      {/* <Switch>
        <PrivateRoute path="/" exact>
            <UserInfoPage />
        </PrivateRoute>
        <Route path="/">
          <LogInPage />
        </Route>
        <Route path="/signup">
                    <SignUpPage/>
                </Route>
                <Route path="/forgot-password">
                    <NoPageFound/>
                </Route>
      </Switch> */}
    </Router>
  );
};
