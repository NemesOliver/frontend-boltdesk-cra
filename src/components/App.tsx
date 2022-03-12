import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Layout } from "../components";
import { HomePage, LoginPage } from "../pages";
import {
  AuthContextProvider,
  ModalContextProvider,
  DateContextProvider,
} from "../context";

export const App = () => {
  return (
    <>
      <Router>
        <CookiesProvider>
          <AuthContextProvider>
            <DateContextProvider>
              <ModalContextProvider>
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                  </Routes>
                </Layout>
              </ModalContextProvider>
            </DateContextProvider>
          </AuthContextProvider>
        </CookiesProvider>
      </Router>
    </>
  );
};
