import React from 'react';

export default function AIAgentsHero() {
    return (
        <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_80%_20%,#0f172a_0%,#020617_60%,#000000_100%)] pt-32 pb-20 lg:pt-40 lg:pb-32">
            {/* Background Elements */}
            <div className="grid-bg-ia"></div>
            <div className="glow-orb-ia orb-1-ia"></div>
            <div className="glow-orb-ia orb-2-ia"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                {/* Header Labels */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 gap-6">
                    <div className="flex flex-col gap-3">
                        {/* Etiquetas de Problema/Solución */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 w-max text-sm md:text-base">
                            <span className="text-red-400 font-bold">✕</span>
                            <span className="font-medium">Pierdes ventas por demorar en responder</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 w-max shadow-[0_0_15px_rgba(56,189,248,0.1)] text-sm md:text-base hidden sm:flex">
                            <span className="text-cyan-400 font-bold">✓</span>
                            <span className="font-medium">Respuestas instantáneas 24/7 con IA</span>
                        </div>
                    </div>

                    {/* Badge Superior Derecha */}
                    <div className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-bold tracking-wide text-xs md:text-sm uppercase flex items-center gap-2 mt-4 md:mt-0">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>
                        Ventas en Automático
                    </div>
                </div>

                {/* Main Content Area: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                    {/* Left Text Column */}
                    <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
                        <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold leading-[1.05] mb-6 text-white tracking-tight">
                            Tu negocio <br className="hidden sm:block" />
                            no duerme, <br className="hidden sm:block" />
                            <span className="text-gradient-ia">tu asistente tampoco.</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-xl">
                            Implementamos Agentes de Inteligencia Artificial que{' '}
                            <strong className="text-white font-semibold flex-inline">atienden prospectos, agendan citas y cierran ventas</strong>{' '}
                            por WhatsApp de forma automática y humana.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col gap-4">
                            <a href="#contacto" className="btn-glow-ia relative bg-white text-slate-900 font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 rounded-full transition-all flex items-center justify-center gap-3 w-max hover:scale-105 duration-300">
                                Quiero automatizar mis ventas
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <div className="flex items-center gap-3 md:ml-4 mt-2">
                                <div className="flex -space-x-2">
                                    <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=1" alt="User" />
                                    <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=2" alt="User" />
                                    <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=3" alt="User" />
                                </div>
                                <p className="text-slate-400 text-sm font-medium">+50 empresas ya escalaron con nosotros</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Column */}
                    <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center w-full min-h-[400px]">

                        {/* Background Abstract Graphic */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 floating-delayed-ia opacity-40 scale-[1.1] md:scale-[1.3] md:translate-x-10 pointer-events-none">
                            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[400px]">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#paint0_linear)" strokeWidth="0.5" strokeDasharray="2 2" />
                                <circle cx="12" cy="12" r="6" stroke="url(#paint1_linear)" strokeWidth="1" />
                                <circle cx="12" cy="12" r="3" fill="#38BDF8" className="animate-pulse" />
                                <path d="M12 6V9M12 15V18M6 12H9M15 12H18M7.5 7.5L9.5 9.5M14.5 14.5L16.5 16.5M7.5 16.5L9.5 14.5M14.5 7.5L16.5 9.5" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#38BDF8" />
                                        <stop offset="1" stopColor="#C084FC" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="6" y1="6" x2="18" y2="18" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#38BDF8" />
                                        <stop offset="1" stopColor="#C084FC" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Chat UI Window */}
                        <div className="glass-panel-ia w-full max-w-md rounded-[2rem] p-5 sm:p-6 floating-ia shadow-2xl relative z-20">

                            {/* Chat Header */}
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                                <div className="relative">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px]">
                                        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                                            <span className="text-xl sm:text-2xl">🤖</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-tight">KallpaBot IA</h3>
                                    <p className="text-cyan-400 text-xs sm:text-sm font-medium flex items-center gap-1 mt-1">
                                        En línea • Responde al instante
                                    </p>
                                </div>
                            </div>

                            {/* Chat Bubbles */}
                            <div className="flex flex-col gap-5 text-sm sm:text-base">
                                {/* User Message */}
                                <div className="self-end glass-bubble-ia text-white p-3 sm:p-4 px-4 sm:px-5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                                    Hola, ¿qué precio tiene el servicio y tienen disponibilidad hoy?
                                </div>

                                {/* AI Message */}
                                <div className="self-start bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 text-white p-4 sm:p-5 rounded-2xl rounded-tl-sm max-w-[95%] relative shadow-[0_4px_20px_rgba(56,189,248,0.15)]">
                                    {/* Typing Indicator */}
                                    <div className="absolute -top-4 -left-2 bg-slate-800 border border-cyan-500/30 px-3 py-1.5 rounded-full flex gap-1.5 shadow-lg">
                                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                                    </div>

                                    ¡Hola! 👋 El servicio premium cuesta $99/mes. <br /><br />
                                    Tengo un espacio libre hoy a las <strong>4:00 PM</strong>. ¿Te gustaría agendar una reunión rápida por Zoom para mostrarte cómo funciona? ⚡

                                    {/* Interactive AI Buttons */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/40 transition-colors">Sí, agendar a las 4pm</span>
                                        <span className="text-xs bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">Ver otro horario</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
