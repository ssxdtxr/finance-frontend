import "@assets/global.css";
import { Layout } from "layouts";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

const Costs = lazy(() => import("./pages/Costs/index"));
const Books = lazy(() => import("./pages/Books/index"));
const Todo = lazy(() => import("./pages/Todo/index"));

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="costs" element={<Costs />} />
          <Route path="books" element={<Books />} />
          <Route path="todo" element={<Todo />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
