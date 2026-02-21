import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const timestamp = new Date().toISOString();
        const sessionId = body.session_id || 'anonymous';
        const userMessage = body.message;

        const response = await fetch('http://165.227.68.38:8000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch from backend' }, { status: response.status });
        }

        const data = await response.json();
        const botResponse = data.response;

        // Log the interaction
        try {
            const logDir = path.join(process.cwd(), 'logs');
            if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir);
            }
            const logPath = path.join(logDir, 'chat_history.jsonl');
            const logEntry = JSON.stringify({
                timestamp,
                sessionId,
                user: userMessage,
                bot: botResponse
            }) + '\n';

            fs.appendFileSync(logPath, logEntry);
        } catch (logError) {
            console.error('Error saving chat log:', logError);
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Chat proxy error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

