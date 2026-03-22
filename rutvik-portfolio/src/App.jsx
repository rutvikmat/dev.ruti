import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// 🔥 Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-1">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen text-gray-400">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}