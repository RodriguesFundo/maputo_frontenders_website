import { sponsorsLogos } from "@/data/mainData";
import Image from "next/image";

export const Sponsor = () => {
  return (
    <section className="container w-full">
      <h4 className="uppercase text-sm text-center text-white">
        Parceirias e patrocínios
      </h4>
      <div className="w-full flex flex-wrap justify-center items-center gap-x-10 gap-y-2">
        {sponsorsLogos.map((image, index) => {
          return (
            <Image
              key={image.id}
              src={image.src}
              alt="Sponsor image"
              width={100}
              height={50}
            />
          );
        })}
      </div>
    </section>
  );
};
