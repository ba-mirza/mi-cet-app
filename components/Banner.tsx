import Image from "next/image";

export default function Banner() {
    return (
        <div className="w-full h-[62px] flex items-center justify-between font-medium text-[16px] px-10" style={{ backgroundColor: '#EAEAEA' }}>
            <div className="flex gap-2">
                <Image width={20} height={20} src="/icons/marker.svg" alt="marker-icon" />
                <span>г. Астана, ул. Мангилик 34, 106 офис</span>
            </div>
            <div className="flex gap-8 justify-between items-center">
                <div className="flex gap-2">
                    <Image width={20} height={20} src="/icons/envelope.svg" alt="envelope-icon" />
                    <span>maratbelike@gmail.com</span>
                </div>
                <div className="flex gap-2">
                    <Image width={20} height={20} src="/icons/phone-flip.svg" alt="phone-flip-icon" />
                    <span>+7 (701) 767-37-31</span>
                </div>
            </div>
        </div>
    )
}