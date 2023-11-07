import { Routes, Route } from "react-router-dom";
import React from "react";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm.tsx";
import Home from "./_root/pages/Home.tsx";   // this was {Home} not Home
import SignupForm from "./_auth/forms/SignupForm.tsx";
import AuthLayout from "./_auth/AuthLayout.tsx";
import RootLayout from "./_root/RootLayout.tsx";
function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*  public routes*/}
          <Route element={<AuthLayout/>}>
              <Route path="/sign-in" element={<SigninForm />} />
              <Route path="/sign-up" element={<SignupForm />} />
          </Route>

        {/*  Private routes*/}
          <Route element={ <RootLayout/> } >
            <Route index element={ <Home/> } />
          </Route>
      </Routes>

    </main>
  );
}

export default App;
