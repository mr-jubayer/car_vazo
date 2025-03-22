import { Hero } from "./components/Hero";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div>
      <div className="mt-6" />
      <Hero />
      <div className="my-28" />
      <ServicesSection />
    </div>
  );
}
