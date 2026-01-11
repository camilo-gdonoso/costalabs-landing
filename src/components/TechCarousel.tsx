'use client';

import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

// Map specific technologies to their Simple Icons slugs or similar
const technologies = [
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/white' },
    { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/white' },
    { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/white' },
    { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform/white' },
    { name: 'Ansible', icon: 'https://cdn.simpleicons.org/ansible/white' },
    { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/white' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/white' },
    { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/white' },
    { name: 'GitLab', icon: 'https://cdn.simpleicons.org/gitlab/white' },
    { name: 'Datadog', icon: 'https://cdn.simpleicons.org/datadog/white' },
    { name: 'Prometheus', icon: 'https://cdn.simpleicons.org/prometheus/white' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/white' },
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/white' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/white' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/white' },
    { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/white' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/white' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/white' },
];

export default function TechCarousel() {
    return (
        <Box sx={{
            py: 8,
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2), transparent)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <Container maxWidth="lg" sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="body2" sx={{
                    color: '#a1a1aa',
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    fontSize: '0.75rem',
                    mb: 2
                }}>
                    Impulsando infraestructuras escalables con
                </Typography>
            </Container>

            <Box sx={{
                display: 'flex',
                width: 'fit-content',
                animation: 'scroll 40s linear infinite',
                '&:hover': { animationPlayState: 'paused' }
            }}>
                {/* Render twice for seamless loop */}
                {[...technologies, ...technologies].map((tech, index) => (
                    <Box key={`${tech.name}-${index}`} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 6, // Spacing between logos
                        opacity: 0.5,
                        transition: 'opacity 0.3s ease',
                        '&:hover': { opacity: 1, filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' },
                        minWidth: 100
                    }}>
                        {/* Using standard img tag for external CDNs to avoid Next.js configuration for now, or we can use Next Image if we configure domains. 
                 Safest is standard img or explicit Next Image configuration. Let's use img for simplicity in this demo. */}
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            title={tech.name}
                            style={{
                                height: '32px',
                                objectFit: 'contain',
                                filter: 'grayscale(100%) brightness(200%)', // Ensure they look white/monochrome
                            }}
                        />
                    </Box>
                ))}
            </Box>

            {/* Gradient masks for fade effect on edges */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '150px',
                background: 'linear-gradient(to right, var(--background), transparent)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '150px',
                background: 'linear-gradient(to left, var(--background), transparent)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />

            <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </Box>
    );
}
