import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const DemoOne = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0">
        <AnimatedShaderBackground />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="rounded-3xl border border-slate-700/60 bg-slate-950/70 px-8 py-10 text-center shadow-2xl shadow-slate-900/50 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Aurora field</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-100">Shader-powered baseline</h1>
          <p className="mt-4 max-w-lg text-sm text-slate-300">
            Demo panel showing the animated shader background running in an isolated surface. Extend it with onboarding copy or live stats during your hackathon walkthrough.
          </p>
        </div>
      </div>
    </div>
  );
};

export { DemoOne };