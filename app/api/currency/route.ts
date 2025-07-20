import {NextRequest,NextResponse} from "next/server";
import axios from "axios";

const BASE_URL = 'https://api.currencyapi.com/v3/latest';
const TOKEN = 'cur_live_1ohFR6u0zRejdmWaA4qeAHwUcVvod2NCA3c97ZQZ';

export async function GET(request: NextRequest) {
    try {
        const response = await axios.get(`${BASE_URL}?apikey=${TOKEN}`);

        return NextResponse.json(response.data);
    } catch (err) {
        console.error('Currency API error:', err);
        return NextResponse.json(
            { error: 'Failed to fetch currency data' },
            { status: 500 }
        );
    }
}