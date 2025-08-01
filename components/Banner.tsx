import Image from "next/image";

export default function Banner() {
  return (
    <div
      className="w-full h-auto min-h-[40px] flex flex-col gap-2 items-start justify-center font-medium text-xs px-3 py-2 border-b border-b-[#34343450] sm:text-sm sm:px-4 sm:py-3 sm:min-h-[50px] md:flex-row md:items-center md:justify-between md:gap-4 md:px-6 lg:h-[62px] lg:text-[16px] lg:px-10 lg:py-0 lg:gap-8 2xl:px-12"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex gap-2 items-center">
        <Image
          width={16}
          height={16}
          src="/icons/marker.svg"
          alt="marker-icon"
          loading="lazy"
          className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
        />
        <span className="text-xs sm:text-sm lg:text-[16px]">
          г. Астана, ул. Мангилик 34, 106 офис
        </span>
      </div>

      <div className="flex flex-col gap-2 w-full md:flex-row md:gap-4 md:justify-end md:items-center md:w-auto lg:gap-8">
        <div className="flex gap-2 items-center">
          <Image
            width={16}
            height={16}
            src="/icons/envelope.svg"
            alt="envelope-icon"
            loading="lazy"
            className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
          />
          <span className="text-xs sm:text-sm lg:text-[16px]">
            maratbelike@gmail.com
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <Image
            width={16}
            height={16}
            src="/icons/phone-flip.svg"
            alt="phone-flip-icon"
            loading="lazy"
            className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
          />
          <span className="text-xs sm:text-sm lg:text-[16px]">
            +7 (701) 767-37-31
          </span>
        </div>
      </div>
    </div>
  );
}
