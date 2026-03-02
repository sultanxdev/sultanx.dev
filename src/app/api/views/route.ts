import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_ID;
    const apiKey = process.env.UMAMI_API_KEY;

    if (!websiteId || !apiKey) {
        return NextResponse.json({ views: 0, error: 'Umami not configured' });
    }

    try {
        // Fetch all-time stats from Umami Cloud API
        const startAt = new Date('2024-01-01').getTime();
        const endAt = Date.now();

        const response = await fetch(
            `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
            {
                headers: {
                    'x-umami-api-key': apiKey,
                },
                next: { revalidate: 3600 }, // Cache for 1 hour
            },
        );

        if (!response.ok) {
            console.error('Umami API error:', response.status, await response.text());
            return NextResponse.json({ views: 0 });
        }

        const data = await response.json();
        // Umami returns { pageviews: { value }, visitors: { value }, ... }
        const visitors = data?.visitors?.value || data?.uniques?.value || 0;

        return NextResponse.json({ views: visitors });
    } catch (error) {
        console.error('Failed to fetch Umami stats:', error);
        return NextResponse.json({ views: 0 });
    }
}
