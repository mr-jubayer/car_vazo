import { Button } from "@/components/ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center  px-3">
      <figure className="relative h-[560px]  max-w-[1200px] rounded-xl overflow-hidden ">
        <Image
          src={"/assets/images/banner/5.jpg"}
          height={200}
          width={1540}
          alt={"banner"}
          className="h-full object-cover "
        />
        <div className="transparent-layer overlay-bg absolute w-full h-full border-2 bg-gradient-to-tl to-black from-transparent top-0">
          <div className="w-full h-full  flex items-center md:ps-16 ps-5 text-white">
            <div>
              <h1 className=" md:text-7xl text-4xl font-semibold md:w-5/12">
                Affordable Price For Car Servicing
              </h1>
              <p className="my-4 mb-8 md:w-5/12">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className=" flex gap-4">
                <Button primaryFilled>Discover More</Button>
                <Button ghostOutline>Latest Project</Button>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

export { Hero };
