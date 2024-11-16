import PublicLayout from "../layouts";

export default function Page() {
  return (
    <PublicLayout>
      <div className="main-container py-10 flex flex-col gap-3 bg-purple-900/5">
        <h1 className="">GENERAL PRIVACY</h1>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Like most Websites Stoxxon Research Services collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          stxxonresearchservices.com also collects potentially
          personally-identifying information like Internet Protocol (IP)
          addresses for security reasons.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Stoxxon Research Services does not disclose personally-identifying
          information other than as described below. And visitors can always
          refuse to supply personally-identifying information, with the caveat
          that it may prevent them from engaging in certain website-related
          activities.
        </p>
        <h1>PROTECTION OF CERTAIN PERSONALLY-IDENTIFYING INFORMATION</h1>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Stoxxon Research Services discloses potentially personally-identifying
          and personally-identifying information only to those of its employees,
          contractors and affiliated organizations that (i) need to know that
          information in order to process it on Stoxxon Research Services’
          behalf or to provide services available at Stoxxon Research Services’
          websites, and (ii) that have agreed not to disclose it to others.
          Stoxxon Research Services will not rent or sell potentially
          personally-identifying and personally-identifying information to
          anyone.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          If you are a registered user of Stoxxon Research Services website and
          have supplied your email address, Stoxxon Research Services may
          occasionally send you an email to tell you about new features, solicit
          your feedback, or just keep you up to date with what’s going on with
          Stoxxon Research Services and our products. Stoxxon Research Services
          takes all measures reasonably necessary to protect against the
          unauthorized access, use, alteration or destruction of potentially
          personally-identifying and personally-identifying information.
        </p>
        <h1>COOKIES</h1>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          A cookie is a string of information that a website stores on a
          visitor’s computer, and that the visitor’s browser provides to the
          website each time the visitor returns. Stoxxon Research Services uses
          cookies to help Stoxxon Research Services identify and track visitors,
          their usage of Stoxxon Research Services website, and their website
          access preferences. Stoxxon Research Services visitors who do not wish
          to have cookies placed on their computers should set their browsers to
          refuse cookies before using Stoxxon Research Services’ websites, with
          the drawback that certain features of Stoxxon Research Services’
          websites may not function properly without the aid of cookies.
        </p>
        <h1>PRIVACY POLICY CHANGES</h1>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Although most changes are likely to be minor, Stoxxon Research
          Services may change its Privacy Policy from time to time, and in
          Stoxxon Research Services’ – Research Analyst sole discretion. Stoxxon
          Research Services encourages visitors to frequently check this page
          for any changes to its Privacy Policy. Your continued use of this site
          after any change in this Privacy Policy will constitute your
          acceptance of such change.
        </p>
      </div>
    </PublicLayout>
  );
}
