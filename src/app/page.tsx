import CategoryCards from "@/components/CategoryCards";
import FeaturedRail from "@/components/FeaturedRail";
import Hero from "@/components/Hero";
import LookbookStrip from "@/components/LookbookStrip";
import Testimonials from "@/components/Testimonials";
import UspStrip from "@/components/UspStrip";
import VisitUs from "@/components/VisitUs";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <FeaturedRail />
      <UspStrip />
      <Testimonials />
      <LookbookStrip />
      <VisitUs />
    </>
  );
}
