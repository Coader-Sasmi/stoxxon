import {
  About,
  ContactUs,
  Hero,
  PricingSection,
  TopServices,
} from "./components";
import PublicLayout from "./layouts";

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <About />
      <TopServices />
      <PricingSection />
      <ContactUs />
    </PublicLayout>
  );
}
