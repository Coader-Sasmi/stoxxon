export default function Home() {
  return (
    <>
      <section className=" bg-black h-screen">
        <div className="main-container flex h-full justify-center items-center ">
          <div className="flex flex-col gap-6 text-gray-500">
            <img src="./error.png" alt="image" className="w-20 h-auto" />
            <h1 className="text-3xl tracking-wide">{`This site can't be reached`}</h1>
            <p className="text-lg">
              The web page at https://www.stoxxon.com/ might be temporarily down
              or it may have moved permanently to a new web address.
            </p>
            <h4 className="text-lg">ERR_FAILED</h4>
          </div>
        </div>
      </section>
      {/* <PublicLayout>
      <Hero />
      <About />
      <TopServices />
      <PricingSection />
      <ContactUs />
    </PublicLayout> */}
    </>
  );
}
