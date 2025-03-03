import { useState } from "react";
import MainLayout from "./components/Layout/Layout";
import MyHeader from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <MyHeader>Content</MyHeader>
      </MainLayout>
    </>
  );
}

export default App;
