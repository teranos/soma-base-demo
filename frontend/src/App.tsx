import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { CreateInquiryPage } from "./pages/CreateInquiryPage";
import { ResearcherQueuePage } from "./pages/ResearcherQueuePage";
import { InquiryDetailPage } from "./pages/InquiryDetailPage";
import { ToastViewport } from "./components/ToastViewport";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const App = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <AnimatedShaderBackground />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#1f2937_0,#020617_55%)] opacity-80" aria-hidden />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/intake" element={<CreateInquiryPage />} />
            <Route path="/researcher/queue" element={<ResearcherQueuePage />} />
            <Route path="/inquiry/:id" element={<InquiryDetailPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
        <footer className="border-t border-dotted border-slate-800/80 bg-slate-950/80 py-6 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:px-6 lg:px-8">
            <p>Built for Soma Inquiry demo - Base Sepolia</p>
            <p className="font-mono text-xs text-slate-500">Registry: 0xbC6F...5E185Fc0</p>
          </div>
        </footer>
      </div>
      <ToastViewport />
    </div>
  );
};

export default App;