import { Button, Input, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const AddToy = () => {
  return (
    <div className="mx-auto max-w-7xl px-8  py-24">
      <form className="mx-auto mb-2 mt-8 max-w-screen-lg  ">
        <>
          <Typography
            color="blue-gray"
            className="mb-4 font-medium">
            Personal Details
          </Typography>
          <div className="mb-4 flex  gap-6">
            <Input
              size="lg"
              label="Toy Name"
              type="text"
              name="name"
              color="blue-gray"
            />
            <Input
              type="number"
              name="price"
              size="lg"
              label="Price"
              color="blue-gray"
            />
            <Input
              size="lg"
              label="Toy Name"
              type="text"
              name="name"
              color="blue-gray"
            />
          </div>
        </>
        <div className="mb-4 flex  gap-6">
          <Input
            size="lg"
            label="Email"
            type="email"
            name="email"
            color="blue-gray"
          />
          <Input
            type="password"
            name="password"
            size="lg"
            label="Password"
            color="blue-gray"
          />
          <Input
            type="password"
            name="password"
            size="lg"
            label="Password"
            color="blue-gray"
          />
        </div>

        <Button
          className="mt-6"
          color="amber"
          type="submit"
          fullWidth>
          Sign In
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal">
          New to eduToys?{' '}
          <Link
            to={'/register'}
            className="font-medium text-blue-500 transition-colors hover:text-blue-700">
            Register
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default AddToy;
