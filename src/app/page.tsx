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
      <div>
        <Hero />
        <About />
        {/* <Features /> */}
        <TopServices />
        {/* <Counter /> */}
        <PricingSection />
        {/* <CustomerReview /> */}
        <ContactUs />
      </div>
    </PublicLayout>
  );
}
