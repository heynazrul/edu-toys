import Banner from './Banner';
import CallToAction from './CallToAction';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
      <CallToAction></CallToAction>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
