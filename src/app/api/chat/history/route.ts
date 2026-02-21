import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const logPath = path.join(process.cwd(), 'logs', 'chat_history.jsonl');

        if (!fs.existsSync(logPath)) {
            return NextResponse.json({ message: 'No logs found yet.' });
        }

        const fileContent = fs.readFileSync(logPath, 'utf8');
        const logs = fileContent
            .split('\n')
            .filter(line => line.trim() !== '')
            .map(line => JSON.parse(line));

        return NextResponse.json({
            count: logs.length,
            history: logs.reverse() // Most central first
        });
    } catch (error) {
        console.error('Error reading logs:', error);
        return NextResponse.json({ error: 'Failed to read logs' }, { status: 500 });
    }
}
