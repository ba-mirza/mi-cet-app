import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {

    const {firstname, lastname, phone} = await request.json();

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_APP_LOGIN,
                pass: process.env.GMAIL_APP_PASSWORD,
            }
        });

        await transporter.sendMail({
            from: `Form: ${process.env.GMAIL_APP_LOGIN}`,
            to: process.env.GMAIL_APP_LOGIN,
            subject: 'Заявка на консультацию',
            text: `FIO: ${firstname} ${lastname}\nPhone: ${phone}`,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Ошибка отправки почты:', err);
        return NextResponse.json(
            { error: 'Не удалось отправить письмо' },
            { status: 500 }
        );
    }
}

