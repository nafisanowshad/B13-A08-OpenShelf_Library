import Banner from "@/components/Banner";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import Marquee from "@/components/Marquee";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Marquee/>
      <FeaturedBooks/>
      <BenefitsSection/>
      <NewsletterSection/>
    </div>
  );
}
