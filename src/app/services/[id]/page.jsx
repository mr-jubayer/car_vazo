import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`
  );

  const service = await result.json();

  return (
    <div className="container mx-auto">
      <section className="flex justify-center ">
        <figure className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1137}
            height={300}
            alt={"banner"}
          />
          <div className="transparent-layer overlay-bg absolute w-full h-full border-2 bg-gradient-to-tl to-black from-transparent top-0">
            <div className="w-full h-full font-bold text-3xl flex items-center ps-16">
              <div>
                <h1 className="text-white">{service.title}</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="container mx-auto grid grid-cols-12 gap-4 mt-4">
        {/* Left Side */}
        <div className="col-span-9 space-y-4">
          <Image
            unoptimized
            className="w-full"
            src={service?.img}
            width={400}
            height={280}
            alt={service.title}
          />
          <h1 className="font-bold text-3xl">{service.title}</h1>
          <p className="text-justify">{service?.description}</p>
        </div>
        {/* Right Side */}
        <div className="col-span-3 space-y-4">
          <Link href={`/checkout/${service._id}`}>
            <Button primaryFilled className={"w-full"}>
              Checkout
            </Button>
          </Link>
          <p className="text-center text-xl font-bold">
            Price: $ {service?.price}
          </p>
        </div>
      </section>
    </div>
  );
};

// const generateStaticParams = async () => {
//   const result = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`
//   );

//   const services = await result.json();

//   return services.map((service) => ({
//     id: service._id,
//   }));
// };

export default ServiceDetails;
// export { generateStaticParams };
