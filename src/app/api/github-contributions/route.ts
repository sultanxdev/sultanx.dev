import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json(
            { error: 'Username is required' },
            { status: 400 },
        );
    }

    try {
        // github-contributions-api.deno.dev was shut down on July 20, 2026
        // Using github-contributions-api.jogruber.de as a drop-in replacement
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
            {
                headers: {
                    Accept: 'application/json',
                },
                next: { revalidate: 3600 },
            },
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: `Upstream API returned ${response.status}` },
                { status: response.status },
            );
        }

        const data = await response.json();

        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contributions' },
            { status: 500 },
        );
    }
}
