import PublicLayout from "../layouts";

export default function Page() {
  return (
    <PublicLayout>
      <div className="main-container py-10 flex flex-col gap-3 bg-purple-900/5">
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          All sales are final and there will be ABSOLUTELY NO REFUNDS and
          CANCELLATIONS.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Before deciding to subscribe to our services, all customers are
          advised to understand the risk associated with Trading & Investing.
          Stoxxon Research will only be providing recommendations and
          trading/investing is the sole responsibility of the customer. We do
          not offer refunds on subscriptions that have already been taken.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          It is the client’s Sole responsibility to Read and understand all
          information associated with the products/services and Customer support
          offered by Stoxxon Research and its Assignees.
        </p>
        <h1>DISCLAIMER</h1>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Trading and investing in stocks and commodities is a risk-involving
          activity and thus has its own share of risk. Sincere efforts have been
          made to present the right investment perspective and thus the
          information contained herein is based on the analysis and the sources
          that we consider reliable. However, any action you choose to take in
          the markets is totally your own responsibility. Stoxxon Research will
          not be liable for any, direct or indirect, consequential or incidental
          damages or loss arising out of the use of the information given on the
          website, phone, or through SMS.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Stoxxon Research has taken due care and caution in the compilation of
          data for its website. The views and investment tips expressed by
          Research Analysts on Stoxxon Research are their own, and not that of
          the website or its management. Stoxxon Research advises users to check
          with certified experts before taking any investment decision. However,
          Stoxxon Research does not guarantee the accuracy, adequacy, or
          completeness of any information and is not responsible for any errors
          or omissions or for the results obtained from the use of such
          information. Stoxxon Research especially states that it has no
          financial liability whatsoever to any user on account of the use of
          information provided on its website.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          There are risks associated with utilizing internet and short messaging
          system (sms) based information and research dissemination services.
          Subscribers are advised to understand that the services can fail due
          to failure of hardware, software, and Internet connection. While we
          ensure that the messages are delivered in time to the subscribers’
          Mobile Networks, the delivery of these messages to the customer’s
          mobile phone/handset is the responsibility of the customer’s Mobile
          Network. SMS may be delayed or not delivered to the customer’s mobile
          phone/handset on certain days, owing to technical reasons that can
          only be addressed by the customer’s Mobile Network, and Stoxxon
          Research and its employees cannot be held responsible for the same in
          any case.
        </p>
        <p className="text-gray-500 text-sm tracking-wider font-thin">
          Stoxxon Research is in the process of SEBI registration. Stoxxon
          Research does not provide any execution based/PMS-based services. We
          only provide investment advice to customers on a pre-paid subscription
          basis. Stoxxon Research does not have affiliations with any
          intermediary and hence does receive any remuneration or compensation
          of any form from any other intermediary.
        </p>
      </div>
    </PublicLayout>
  );
}
