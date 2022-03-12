import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { CookiesProvider } from "react-cookie";
import { Layout } from "../components";
import { HomePage, LoginPage } from "../pages";
import {
  AuthContextProvider,
  ModalContextProvider,
  DateContextProvider,
} from "../context";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <Router>
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
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
          </QueryClientProvider>
        </CookiesProvider>
      </Router>
    </>
  );
};
