import Banner from "./Components/Banner";
import Category from "./Components/Category";
import OurServices from "./Components/OurServices";
import SliderSection from "./Components/SliderSection";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div className="container mx-auto px-16">
      <Banner/>
      <Category/>
      <SliderSection/>
      <Testimonials/>
      <OurServices/>
    </div>
  );
}
