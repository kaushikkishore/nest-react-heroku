import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Posts from "./pages/posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts/">
            <Route path=":id" element={<Posts />} />
            <Route path="" element={<Posts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
