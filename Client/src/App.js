import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop1 from "./pages/Landing Page";
import Desktop3 from "./pages/Signup";
import Desktop2 from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Landing Page";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "Sign Up Page";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "Login Page";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/desktop-3" element={<Desktop3 />} />
      <Route path="/desktop-2" element={<Desktop2 />} />
    </Routes>
  );
}
export default App;
