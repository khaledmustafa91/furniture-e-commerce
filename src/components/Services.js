import FeaturedProductsList from './FeaturedProductsList';
import WhyChooseUs from './Home/WhyChooseUs';
import MainHero from './MainHero';

const Services = () => {
  return (
    <>
      <MainHero
        title="Services"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <WhyChooseUs />
      <FeaturedProductsList />
    </>
  );
};

export default Services;
