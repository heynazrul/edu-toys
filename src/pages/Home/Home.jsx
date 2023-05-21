import Banner from './Banner';
import CallToAction from './CallToAction';
import Gallery from './Gallery';
import HowItWorks from './HowItWorks';
import ShopByCategory from './ShopByCategory';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
      <HowItWorks></HowItWorks>
      <CallToAction></CallToAction>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
