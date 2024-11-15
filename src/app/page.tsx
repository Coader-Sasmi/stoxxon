import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import PublicLayout from "./layouts";

export default function Home() {
  return (
    <PublicLayout>
      <div>
        <Hero />
        <About />
        {/* <Features /> */}
        {/* <Solution /> */}
        {/* <Counter /> */}
        <PricingSection />
        {/* <CustomerReview /> */}
        <ContactUs />
      </div>
    </PublicLayout>
  );
}
