'use client';
import { Box, Paper } from '@mui/material';
import { useState, useEffect } from 'react';

const files = [
    {
        name: 'Layout.tsx',
        content: [
            { text: 'export default function ', color: '#c792ea' },
            { text: 'RootLayout', color: '#82aaff' },
            { text: '({ children }: Props) {', color: '#a1a1aa' },
            { text: '  return (', color: '#c792ea', indent: 20 },
            { text: '    <html lang="es">', color: '#89ddff', indent: 40 },
            { text: '      <body>', color: '#89ddff', indent: 60 },
            { text: '        <Navbar />', color: '#89ddff', indent: 80 },
            { text: '        {children}', color: '#7fdbca', indent: 80 },
            { text: '        <Footer />', color: '#89ddff', indent: 80 },
            { text: '      </body>', color: '#89ddff', indent: 60 },
            { text: '    </html>', color: '#89ddff', indent: 40 },
            { text: '  );', color: '#c792ea', indent: 20 },
            { text: '}', color: '#a1a1aa' },
        ]
    },
    {
        name: 'App.tsx',
        content: [
            { text: 'import ', color: '#c792ea' },
            { text: 'React ', color: '#82aaff' },
            { text: 'from "react";', color: '#c3e88d' },
            { text: '', indent: 0 },
            { text: 'export const ', color: '#c792ea' },
            { text: 'App ', color: '#82aaff' },
            { text: '= () => {', color: '#a1a1aa' },
            { text: '  const [count, setCount] = useState(0);', color: '#a1a1aa', indent: 20 },
            { text: '', indent: 0 },
            { text: '  return (', color: '#c792ea', indent: 20 },
            { text: '    <div className="app">', color: '#89ddff', indent: 40 },
            { text: '      <h1>CostaLabs</h1>', color: '#89ddff', indent: 60 },
            { text: '      <Button onClick={handleClick} />', color: '#ffcb6b', indent: 60 },
            { text: '    </div>', color: '#89ddff', indent: 40 },
            { text: '  );', color: '#c792ea', indent: 20 },
            { text: '}', color: '#a1a1aa' },
        ]
    }
];

export default function CodeWindow() {
    const [activeTab, setActiveTab] = useState(0);
    const [displayedLines, setDisplayedLines] = useState<number>(0);

    // Efecto para cambiar de pestaña automáticamente
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % files.length);
            setDisplayedLines(0); // Resetear typewriter al cambiar
        }, 5000); // Cambiar cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    // Efecto Typewriter (escribir línea por línea)
    useEffect(() => {
        if (displayedLines < files[activeTab].content.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines(prev => prev + 1);
            }, 100); // Velocidad de escritura por línea
            return () => clearTimeout(timeout);
        }
    }, [displayedLines, activeTab]);

    const currentFile = files[activeTab];

    return (
        <Paper sx={{
            background: '#1e1e1e',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease'
        }}>
            {/* Window Graphic Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', px: 2, py: 1.5, background: 'rgba(255,255,255,0.02)' }}>
                <Box sx={{ display: 'flex', gap: 1, mr: 3 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#27c93f' }} />
                </Box>
                <Box sx={{ display: 'flex', fontSize: '0.8rem', color: '#6b7280', gap: 0 }}>
                    {files.map((file, index) => (
                        <Box
                            key={file.name}
                            onClick={() => { setActiveTab(index); setDisplayedLines(0); }}
                            sx={{
                                color: activeTab === index ? 'white' : '#6b7280',
                                borderBottom: activeTab === index ? '1px solid #00d4ff' : '1px solid transparent',
                                pb: 0.5,
                                px: 2,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                '&:hover': { color: '#a1a1aa' }
                            }}
                        >
                            {file.name}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Code Content */}
            <Box sx={{ p: 3, fontFamily: 'monospace', fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.6, overflowX: 'auto', minHeight: '300px' }}>
                {currentFile.content.slice(0, displayedLines).map((line, i) => (
                    <div key={i} style={{ paddingLeft: line.indent || 0 }}>
                        <span style={{ color: line.color }}>{line.text}</span>
                        {/* Cursor parpadeante en la última línea escribiéndose */}
                        {i === displayedLines - 1 && (
                            <span style={{
                                borderRight: '2px solid #00d4ff',
                                animation: 'blink 1s step-end infinite',
                                marginLeft: '2px'
                            }}>
                                &nbsp;
                            </span>
                        )}
                    </div>
                ))}

                {/* Estilos para animación de blink */}
                <style jsx global>{`
                    @keyframes blink {
                        0%, 100% { border-color: transparent }
                        50% { border-color: #00d4ff }
                    }
                `}</style>
            </Box>
        </Paper>
    );
}
