// Vercel Serverless Function - Visit Counter API
// Używa Vercel KV (Redis) do przechowywania licznika

import { kv } from '@vercel/kv';

const BASE_COUNT = 60000; // Początkowa wartość od 2021 roku
const COUNTER_KEY = 'tutajsieucze:visits';

export default async function handler(req, res) {
    // CORS headers - pozwala na wywołania z dowolnej domeny
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (req.method === 'POST') {
            // Inkrementuj licznik (nowa wizyta)
            const newCount = await kv.incr(COUNTER_KEY);
            const totalCount = BASE_COUNT + newCount;
            
            return res.status(200).json({
                success: true,
                count: totalCount,
                visits: newCount
            });
        } 
        
        if (req.method === 'GET') {
            // Pobierz aktualną wartość bez inkrementacji
            const currentCount = await kv.get(COUNTER_KEY) || 0;
            const totalCount = BASE_COUNT + currentCount;
            
            return res.status(200).json({
                success: true,
                count: totalCount,
                visits: currentCount
            });
        }

        return res.status(405).json({ error: 'Method not allowed' });
        
    } catch (error) {
        console.error('Counter error:', error);
        
        // Fallback - zwróć bazową wartość jeśli błąd
        return res.status(200).json({
            success: false,
            count: BASE_COUNT,
            visits: 0,
            error: 'Database temporarily unavailable'
        });
    }
}




