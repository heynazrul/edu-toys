import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="flex h-screen items-center justify-end bg-[url('https://cdn.shopify.com/s/files/1/0475/2385/6541/files/bg-1_30b55119-1f55-4a38-bca7-2f1f93962e05.jpg?v=1613707178')]">
      <div className="w-full lg:w-1/2 space-y-6 px-16">
        <h2 className="font-title text-4xl font-bold  text-white lg:text-6xl">Safe Toys For Children</h2>
        <div className="mt-4 flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/icon-7_180x.png?v=1613706943"
            alt=""
          />
          <p className="font-title text-xl text-white lg:text-3xl">Beautiful & well designed</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/icon-4_180x.png?v=1613706942"
            alt=""
          />
          <p className="font-title text-xl text-white lg:text-3xl">High durable toys</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/icon-5_180x.png?v=1613706943"
            alt=""
          />
          <p className="font-title text-xl text-white lg:text-3xl">Recyclable materials</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/icon-6_180x.png?v=1613706943"
            alt=""
          />
          <p className="font-title text-xl text-white lg:text-3xl">Safe & non toxic</p>
        </div>
        <Link
          to={'/all-toys'}
          className="block">
          <Button
            size="lg"
            color="amber">
            Get started now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
