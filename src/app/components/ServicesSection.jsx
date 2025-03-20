import { RightArrow } from "@/components/ui/RightArrow";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`);

  if (!res.ok) {
    console.error("Failed to fetch services");
    return <p>Error loading services</p>;
  }

  const services = await res.json();

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      {services.map((item) => {
        return (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
            key={item._id}
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image
                unoptimized
                className="w-full h-full object-fit"
                src={item.img}
                width={314}
                height={108}
                alt={item.title}
              />
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="font-bold text-xl text-orange-500">
                  Price : ${item.price}
                </p>
              </div>
              <div>
                <Link
                  href={`/services/${item._id}`}
                  className="text-orange-500"
                >
                  <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
