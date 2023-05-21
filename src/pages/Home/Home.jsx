import { Helmet } from 'react-helmet';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Gallery from './Gallery';
import HowItWorks from './HowItWorks';
import ShopByCategory from './ShopByCategory';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Edu Toy | Home</title>
      </Helmet>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
      <HowItWorks></HowItWorks>
      <CallToAction></CallToAction>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
