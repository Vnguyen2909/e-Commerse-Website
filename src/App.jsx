// import MyButton from "./components/Button/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from "@/routers/router";
import { Suspense } from "react";
import { SidebarProvider } from "@/contexts/SidebarProvider";
import SideBar from "@/components/Sidebar/Sidebar";
import { ToastProvider } from "@/contexts/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <SidebarProvider>
        <SideBar />
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routers.map((item, index) => (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={index}
                />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SidebarProvider>
    </ToastProvider>
  );
}

export default App;
