import AboutUs from "@/components/AboutUs";
import Headline from "@/components/Headline";
import OfferCard from "@/components/OfferCard";
import PageBanner from "@/components/PageBanner";
import RestaurantMenu from "@/components/RestaurantMenu";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Certifications from "@/components/Certifications";

const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Certifications"} />
      <AboutUs />
      {/* Headline area start */}
      <Headline />
      {/* Headline Area end */}
      {/* Food Category Area start */}
      <Certifications />
      {/* Food Category Area end */}
    </WellFoodLayout>
  );
};
export default page;
