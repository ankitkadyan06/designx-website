import React from "react";
import HeaderDemo from "../Components/Common/HeaderDemo";
import SubscribeNewsletter from "../Components/Newsletter/SubscribeNewsletter";
import NewsletterData from "../Components/Newsletter/NewsletterData";

const Newsletter = () => {
  return (
    <div className="pt-[77px] bg-[#01071B]">
      <HeaderDemo />
      <SubscribeNewsletter />
      <NewsletterData />
    </div>
  );
};

export default Newsletter;
