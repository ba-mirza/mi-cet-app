import {NextRequest,NextResponse} from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
    try {
        const response = await axios.get(`${process.env.CURRENCY_BASE_URL}?apikey=${process.env.CURRENCY_TOKEN}`);

        return NextResponse.json(response.data);
    } catch (err) {
        console.error('Currency API error:', err);
        return NextResponse.json(
            { error: 'Failed to fetch currency data' },
            { status: 500 }
        );
    }
}