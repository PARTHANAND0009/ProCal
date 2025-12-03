import React, { useEffect, useRef, useState } from 'react';
import { 
  Camera, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ScanLine, 
  Smartphone,
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  Lock,
  ArrowRight,
  Target
} from 'lucide-react';

export const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el instanceof Element) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Parallax Effect Hook
  useEffect(() => {
    const handleScroll = () => {
      const applyParallax = (id: string, speed: number) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.parentElement?.getBoundingClientRect();
          // Only animate if the parent section is roughly in the viewport
          if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
            // Calculate shift based on distance from center of viewport
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const shift = (elementCenter - viewportCenter) * speed;
            
            el.style.transform = `translateY(${shift}px)`;
          }
        }
      };

      requestAnimationFrame(() => {
        applyParallax('p-step1-visual', 0.1);
        applyParallax('p-step2-visual', -0.08); // Moves slightly opposite for depth
        applyParallax('p-step3-visual', 0.1);
        applyParallax('p-trust-visual', 0.06);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="w-full overflow-x-hidden bg-black text-slate-200 selection:bg-teal-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[110vh] flex flex-col justify-center items-center px-4 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen opacity-40"></div>
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center pt-20">
          
          {/* Logo Mark Reveal */}
          <div className="mb-8 relative animate-fade-in-up [animation-duration:1.5s]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 p-[1px] rotate-3 hover:rotate-6 transition-transform duration-700">
               <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center backdrop-blur-xl">
                 <Zap className="text-white w-8 h-8 fill-white/20" />
               </div>
            </div>
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-teal-500/40 blur-xl -z-10 animate-pulse-slow"></div>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 animate-reveal leading-[0.9] text-glow">
            Nutrition, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
              reimagined.
            </span>
          </h1>

          <p className="mt-2 text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:backwards]">
            ProCal analyzes your meals from a single photo. <br className="hidden md:block"/>
            Real macros. Real calories. Real precision.
          </p>
          
          {/* Cinematic CTA */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:backwards]">
            <a 
              href="#" 
              className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-tight transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">Download ProCal <ArrowRight className="ml-2 w-5 h-5" /></span>
            </a>
            <a 
              href="#how-it-works" 
              className="px-10 py-5 glass-panel rounded-full text-white font-medium text-lg border border-white/10 hover:bg-white/10 transition-all hover:border-white/30 backdrop-blur-md"
            >
              The Technology
            </a>
          </div>

          {/* 3D Hologram Mockup */}
          <div className="relative mt-24 w-full max-w-lg mx-auto aspect-[4/5] md:aspect-video animate-fade-in-up [animation-delay:800ms] [animation-fill-mode:backwards] group perspective-1000">
             
             {/* Phone Body */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-[36rem] rounded-[3rem] border-4 border-white/10 bg-[#050505] shadow-2xl overflow-hidden transform transition-transform duration-1000 group-hover:rotate-x-2 group-hover:scale-[1.02]">
                
                {/* Screen Content */}
                <div className="relative w-full h-full bg-gray-900">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black">
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_50%_50%,_rgba(45,212,191,0.1),transparent_70%)]"></div>
                  </div>
                  
                  {/* Floating Food Elements (Simulated) */}
                  <div className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-xl"></div>
                  <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 blur-xl"></div>

                  {/* Scanning Effect */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="w-full h-1 bg-teal-400/80 shadow-[0_0_30px_rgba(45,212,191,1)] animate-scan"></div>
                  </div>
                  
                  {/* UI Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end z-30">
                    <div className="glass-card p-4 rounded-2xl border-white/10 mb-4 transform translate-y-2 opacity-0 animate-[fadeInUp_0.5s_ease-out_2s_forwards]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-bold text-lg">Salmon Bowl</span>
                        <span className="text-teal-400 font-mono">520 kcal</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[60%]"></div>
                        </div>
                        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 w-[30%]"></div>
                        </div>
                        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 w-[45%]"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                        <span>P: 42g</span>
                        <span>C: 38g</span>
                        <span>F: 22g</span>
                      </div>
                    </div>
                  </div>

                </div>
             </div>

             {/* Holographic Projection behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[40rem] -z-10 border border-teal-500/20 rounded-[4rem] scale-110 opacity-30 animate-pulse-slow"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-white mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>


      {/* --- BOLD STATEMENT --- */}
      <section id="statement" ref={setRef('statement')} className="py-32 md:py-48 relative border-t border-white/5 bg-[#020202]">
        <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 transform ${isVisible['statement'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tight leading-tight">
            Stop guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 animate-shimmer bg-[length:200%_100%]">
              Start quantifying.
            </span>
          </h2>
          
          <p className="text-xl md:text-3xl text-slate-400 font-light leading-relaxed">
            Most trackers are glorified spreadsheets. <br/>
            ProCal is an <strong className="text-white font-semibold">AI Scientist</strong>. 
            It sees what you eat, understands portion sizes, and calculates with sub-gram precision.
          </p>
        </div>
      </section>


      {/* --- FEATURE STORYTELLING --- */}
      <section id="how-it-works" className="py-32 relative bg-black">
        {/* Center line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="space-y-48">
            
            {/* Step 1: Capture */}
            <div ref={setRef('step1')} id="step1" className={`flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ${isVisible['step1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
              <div className="md:w-1/2 text-right md:pr-16 relative">
                 <div className="absolute right-0 top-0 -mr-24 -mt-24 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"></div>
                 <h3 className="text-5xl font-bold text-white mb-6">1. Capture</h3>
                 <p className="text-xl text-slate-400 leading-relaxed font-light">
                   No searching. No weighing. Just point your camera.
                   Our photonic engine captures depth and texture data instantly.
                 </p>
              </div>
              <div className="md:w-1/2 pl-0 md:pl-16">
                 {/* Parallax Container */}
                 <div id="p-step1-visual" className="will-change-transform">
                   <div className="relative w-64 h-64 mx-auto md:mx-0 glass-card rounded-[2rem] flex items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(45,212,191,0.1)]">
                      <Camera className="w-20 h-20 text-white stroke-1" />
                      <div className="absolute inset-4 border border-dashed border-white/20 rounded-[1.5rem] animate-[spin_10s_linear_infinite]"></div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Step 2: Analyze */}
            <div ref={setRef('step2')} id="step2" className={`flex flex-col md:flex-row-reverse items-center gap-16 transition-all duration-1000 ${isVisible['step2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
              <div className="md:w-1/2 text-left md:pl-16 relative">
                <div className="absolute left-0 top-0 -ml-24 -mt-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
                <h3 className="text-5xl font-bold text-white mb-6">2. Process</h3>
                <p className="text-xl text-slate-400 leading-relaxed font-light">
                   Computer vision breaks down the dish. 
                   150g Grilled Chicken. 
                   80g Quinoa. 
                   1 tbsp Olive Oil. 
                   Identified in 200ms.
                </p>
              </div>
              <div className="md:w-1/2 pr-0 md:pr-16 flex justify-end">
                 {/* Parallax Container */}
                 <div id="p-step2-visual" className="will-change-transform">
                   <div className="relative w-72 glass-panel p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                      <div className="space-y-3">
                         {[1,2,3].map((i) => (
                           <div key={i} className="h-12 bg-white/5 rounded-lg flex items-center px-4 justify-between border border-white/5">
                             <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                             <div className="w-8 h-2 bg-teal-500/50 rounded-full"></div>
                           </div>
                         ))}
                      </div>
                      {/* Floating particle connectors */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-500/30 blur-md"></div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Step 3: Log */}
            <div ref={setRef('step3')} id="step3" className={`flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ${isVisible['step3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
               <div className="md:w-1/2 text-right md:pr-16 relative">
                 <div className="absolute right-0 top-0 -mr-24 -mt-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
                 <h3 className="text-5xl font-bold text-white mb-6">3. Optimize</h3>
                 <p className="text-xl text-slate-400 leading-relaxed font-light">
                   Your daily targets adapt dynamically. 
                   ProCal learns your metabolism and adjusts your plan to ensure you hit your goals.
                 </p>
              </div>
              <div className="md:w-1/2 pl-0 md:pl-16">
                 {/* Parallax Container */}
                 <div id="p-step3-visual" className="will-change-transform">
                   <div className="w-64 h-64 mx-auto md:mx-0 relative">
                      <svg className="w-full h-full transform -rotate-90">
                         <circle cx="128" cy="128" r="120" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
                         <circle cx="128" cy="128" r="120" stroke="#2dd4bf" strokeWidth="4" fill="none" strokeDasharray="753" strokeDashoffset="200" className="transition-all duration-1000 ease-out" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className="text-4xl font-bold text-white">2,150</span>
                         <span className="text-xs text-teal-400 uppercase tracking-widest mt-2">Target Hit</span>
                      </div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* --- COMPARISON TABLE --- */}
      <section className="py-32 bg-[#050507]">
        <div className="max-w-5xl mx-auto px-6">
           <h2 className="text-center text-3xl font-bold text-white mb-16 tracking-tight">ProCal vs. The Past</h2>
           
           <div className="glass-card rounded-3xl overflow-hidden border border-white/10 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/5 to-purple-500/5 pointer-events-none"></div>
              
              <div className="grid grid-cols-3 p-8 border-b border-white/10 bg-white/5 backdrop-blur-xl">
                 <div className="text-slate-400 font-mono text-sm uppercase tracking-widest">Metric</div>
                 <div className="text-center text-slate-500 font-mono text-sm uppercase tracking-widest">Manual Apps</div>
                 <div className="text-center text-white font-bold font-mono text-sm uppercase tracking-widest">ProCal AI</div>
              </div>

              {[
                { label: "Logging Time", bad: "3-5 minutes", good: "< 10 seconds" },
                { label: "Accuracy", bad: "User Estimate", good: "Computer Vision" },
                { label: "Learning", bad: "Static", good: "Adaptive" },
                { label: "Privacy", bad: "Cloud Sold", good: "Device Local" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-8 border-b border-white/5 items-center hover:bg-white/5 transition-colors group">
                   <div className="text-white font-medium">{row.label}</div>
                   <div className="text-center text-slate-600 group-hover:text-slate-500 transition-colors">{row.bad}</div>
                   <div className="text-center text-teal-400 font-bold shadow-teal-500/50 drop-shadow-sm">{row.good}</div>
                </div>
              ))}
           </div>
        </div>
      </section>


      {/* --- TRUST & PRIVACY --- */}
      <section className="py-24 relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-8">
                  <ShieldCheck className="w-8 h-8 text-teal-400" />
               </div>
               <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Your health data. <br/>Exclusively yours.</h2>
               <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  We built ProCal with a privacy-first architecture. 
                  Food photos are analyzed and discarded. 
                  Health data stays on your device or in your secure private cloud. 
                  We do not sell your data. Ever.
               </p>
               <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-slate-400">End-to-End Encrypted</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-slate-400">GDPR Compliant</div>
               </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-indigo-500/20 blur-[100px]"></div>
               {/* Parallax Container */}
               <div id="p-trust-visual" className="glass-panel p-10 rounded-3xl border border-white/10 relative z-10 will-change-transform">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                     <span className="text-sm font-mono text-slate-300">SYSTEM_SECURE</span>
                  </div>
                  <div className="space-y-4 font-mono text-xs text-slate-500">
                     <p>> init_encryption_protocol(AES-256)</p>
                     <p>> verifying_local_storage...</p>
                     <p className="text-green-400">> secure_connection_established</p>
                  </div>
               </div>
            </div>
         </div>
      </section>


      {/* --- REVIEWS (MINIMAL) --- */}
      <section className="py-32 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-sm font-bold text-teal-500 uppercase tracking-widest mb-16">The Community</h2>
           
           <div className="space-y-16">
             {[
               "“It feels like having a nutrition scientist in your pocket.”",
               "“The precision is terrifyingly good.”",
               "“Finally, an app that respects my time and my privacy.”"
             ].map((quote, i) => (
               <div key={i} className="opacity-80 hover:opacity-100 transition-opacity duration-500">
                 <h3 className="text-2xl md:text-4xl font-light text-white leading-tight italic">
                   {quote}
                 </h3>
               </div>
             ))}
           </div>
        </div>
      </section>


      {/* --- FINAL CTA --- */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
         {/* Background Aurora */}
         <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-teal-900/20 via-black to-black"></div>
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
         </div>

         <div className="relative z-10 text-center px-6">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
               Take Control.
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-lg mx-auto">
               The most advanced nutrition computer ever built.
            </p>
            
            <a 
               href="#" 
               className="inline-flex items-center justify-center px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_60px_rgba(255,255,255,0.3)]"
            >
               <Smartphone className="mr-3 w-6 h-6" /> Download Now
            </a>
            
            <div className="mt-8 text-sm text-slate-600 font-mono">
               Available on iOS & Android
            </div>
         </div>
      </section>

    </div>
  );
};