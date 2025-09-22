import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { CreateInquiryPage } from "./pages/CreateInquiryPage";
import { ResearcherPortalPage } from "./pages/ResearcherPortalPage";
import { InquiryDetailPage } from "./pages/InquiryDetailPage";
import { ToastViewport } from "./components/ToastViewport";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { UserPortalPage } from "./pages/UserPortalPage";
import { TreasurerPage } from "./pages/TreasurerPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <AnimatedShaderBackground />
      <ScrollToTop />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#1f2937_0,#020617_55%)] opacity-80" aria-hidden />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user" element={<UserPortalPage />} />
            <Route path="/user/create" element={<CreateInquiryPage />} />
            <Route path="/user/inquiries/:id" element={<InquiryDetailPage persona="user" />} />
            <Route path="/user/inquiries/:id/initiations/:initId" element={<InquiryDetailPage persona="user" />} />
            <Route path="/researcher" element={<ResearcherPortalPage />} />
            <Route path="/researcher/inquiries/:id/initiations/:initId" element={<InquiryDetailPage persona="researcher" />} />
            <Route path="/researcher/inquiries/:id" element={<InquiryDetailPage persona="researcher" />} />
            <Route path="/treasurer" element={<TreasurerPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
        <footer className="border-t border-dotted border-slate-800/80 bg-slate-950/80 py-6 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:px-6 lg:px-8">
            <p>Soma — peptide-informed incentives</p>
            <p className="font-mono text-xs text-slate-500">Prototype only, Base Sepolia references mocked</p>
          </div>
        </footer>
      </div>
      <ToastViewport />
    </div>
  );
};

export default App;
