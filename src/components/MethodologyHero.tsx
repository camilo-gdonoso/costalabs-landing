import React from 'react';

export default function MethodologyHero() {
    return (
        <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#1e1b4b_0%,#020617_70%,#000000_100%)] pt-32 pb-20 lg:pt-40 lg:pb-32">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(167,139,250,0.1)_1px,transparent_1px)] bg-[size:40px_40px] z-[1]"></div>
            <div className="absolute rounded-full blur-[120px] opacity-30 z-0 bg-indigo-400" style={{ top: '-100px', right: '-50px', width: '600px', height: '600px' }}></div>
            <div className="absolute rounded-full blur-[120px] opacity-30 z-0 bg-purple-400" style={{ bottom: '-150px', left: '-100px', width: '700px', height: '700px' }}></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Header Badge */}
                <div className="flex justify-center md:justify-start mb-12">
                    <div className="px-6 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold tracking-wide text-sm flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                        METODOLOGÍA TRANSPARENTE
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                    {/* Left Text Column */}
                    <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
                        <div className="mb-6 flex flex-col gap-2">
                            <div className="text-purple-400 font-bold tracking-widest text-lg md:text-xl uppercase">Adiós a la incertidumbre</div>
                            <h2 className="text-5xl sm:text-6xl md:text-[4.5rem] font-black leading-[1.05] tracking-tight text-white mb-6">
                                Software <br />
                                sin <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-fuchsia-400 underline decoration-white/10">cajas negras.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 mb-12 mt-4">
                            <div className="flex items-start gap-4 md:gap-5">
                                <div className="bg-indigo-500/20 p-3 rounded-xl border border-indigo-500/30 text-2xl flex-shrink-0">📊</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Avance Real 24/7</h3>
                                    <p className="text-slate-300 text-base md:text-lg leading-snug">Acceso total a nuestro Trello/Jira. Mira en qué estamos trabajando hoy, sin pedir reuniones.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-5">
                                <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30 text-2xl flex-shrink-0">🚀</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">MVP en tiempo récord</h3>
                                    <p className="text-slate-300 text-base md:text-lg leading-snug">Lanzamos una versión operativa rápido. Valida tu idea con usuarios reales, no con promesas.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-5">
                                <div className="bg-fuchsia-500/20 p-3 rounded-xl border border-fuchsia-500/30 text-2xl flex-shrink-0">🛡️</div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white italic mb-1">Modelo Seguro: 30 / 30 / 40</h3>
                                    <p className="text-slate-400 text-base md:text-lg leading-snug">Pagas contra avances validados y paso a producción. Sin sorpresas, sin riesgos.</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-8">
                            <a href="#contacto" className="relative overflow-hidden bg-white text-slate-900 font-black text-xl lg:text-2xl py-5 px-8 lg:px-10 rounded-2xl transition-all flex items-center justify-center gap-4 w-max hover:scale-105 shadow-xl group">
                                <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.5s_infinite]"></span>
                                COTIZAR MI PROYECTO
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Visual Column: Kanban Abstracto */}
                    <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
                        <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 w-full max-w-lg h-[450px] sm:h-[480px] rounded-[2rem] p-5 sm:p-6 shadow-2xl relative z-10 overflow-hidden lg:scale-105 group">
                            
                            {/* App Header */}
                            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg">K</div>
                                    <h3 className="font-black text-white text-lg sm:text-xl uppercase tracking-tighter">Sprint Dashboard</h3>
                                </div>
                                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px] font-bold text-purple-400">DEV</div>
                            </div>

                            {/* Kanban Columns */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 h-[calc(100%-100px)]">
                                {/* Backlog Column */}
                                <div className="bg-white/5 rounded-2xl p-2 sm:p-4 flex flex-col gap-3 sm:gap-4 relative">
                                    <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest text-center truncate">Backlog</span>
                                    {/* Static Card */}
                                    <div className="bg-slate-800/80 p-2 sm:p-3 rounded-xl border border-white/5 opacity-40">
                                        <div className="h-2 w-3/4 bg-slate-600 rounded-full mb-2"></div>
                                        <div className="h-2 w-1/2 bg-slate-600 rounded-full"></div>
                                    </div>
                                    {/* Animated Card Container */}
                                    <div className="absolute left-2 sm:left-4 right-2 sm:right-4 top-16 sm:top-[76px] h-full pointer-events-none">
                                        <div className="bg-slate-800 p-3 sm:p-4 rounded-xl border-2 border-[#a855f7]/50 shadow-[0_10px_30px_rgba(168,85,247,0.2)] animate-[move-card-pro-mobile_5s_ease-in-out_infinite_alternate] sm:animate-[move-card-pro_5s_ease-in-out_infinite_alternate] group-hover:animate-none group-hover:!transform-none absolute w-full">
                                            <div className="w-6 sm:w-8 h-1.5 bg-purple-400 rounded-full mb-2 sm:mb-3"></div>
                                            <div className="h-2 sm:h-3 w-full bg-white/90 rounded-md mb-2"></div>
                                            <div className="h-2 sm:h-3 w-2/3 bg-white/50 rounded-md"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* In Progress Column */}
                                <div className="bg-white/5 rounded-2xl p-2 sm:p-4">
                                    <span className="text-[9px] sm:text-[10px] font-black text-purple-500 uppercase tracking-widest text-center block truncate">Progress</span>
                                </div>

                                {/* Done Column */}
                                <div className="bg-white/5 rounded-2xl p-2 sm:p-4 flex flex-col gap-3 sm:gap-4 truncate">
                                    <span className="text-[9px] sm:text-[10px] font-black text-fuchsia-500 uppercase tracking-widest text-center block truncate">Done</span>
                                    <div className="bg-fuchsia-500/10 p-2 sm:p-3 rounded-xl border border-fuchsia-500/30 flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <div className="w-4 sm:w-6 h-1.5 bg-fuchsia-500 rounded-full"></div>
                                            <span className="text-[10px] sm:text-xs">✅</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-500/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Overlay Sello Garantía */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                                <div className="bg-white text-slate-950 px-4 sm:px-5 py-2 rounded-2xl font-black text-[10px] sm:text-xs md:text-sm shadow-2xl rotate-3">
                                    ENTREGA GARANTIZADA
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* Embedded custom style for animations */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes shine {
                    100% { left: 100%; }
                }
                @keyframes move-card-pro {
                    0% { transform: translate(0, 0) scale(1); opacity: 1; }
                    25% { transform: translate(15px, -10px) rotate(2deg) scale(1.02); }
                    75% { transform: translate(calc(200% + 24px), 10px) rotate(-2deg) scale(0.98); }
                    100% { transform: translate(calc(200% + 24px), 20px) scale(1); opacity: 1; }
                }
                @keyframes move-card-pro-mobile {
                    0% { transform: translate(0, 0) scale(1); opacity: 1; }
                    25% { transform: translate(10px, -5px) rotate(2deg) scale(1.02); }
                    75% { transform: translate(calc(200% + 16px), 5px) rotate(-2deg) scale(0.98); }
                    100% { transform: translate(calc(200% + 16px), 10px) scale(1); opacity: 1; }
                }
            `}} />
        </section>
    );
}
