import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AppLayout from "./AppLayout/AppLayout";
import AiEthicsPage from "./pages/AiEthicsPage";
import HowAiWorksPage from "./pages/HowAiWorksPage";
import TermsOfServicePage from "./pages/TermsConditionPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "ai-ethics",
        element: <AiEthicsPage />,
      },
      {
        path: "how-ai-work",
        element: <HowAiWorksPage />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfServicePage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
