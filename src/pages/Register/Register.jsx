import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Register = () => {
  const { registerUser, updateUser } = useContext(AuthContext);
  const [customError, setCustomError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password && password.length < 6) {
      setCustomError('Password should be at least 8 characters');
    } else {
      setCustomError(null);
    }

    const toastPromise = toast.loading('Please wait registering...');

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser(name, photo);
        toast.update(toastPromise, {
          render: 'Registration Successful!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      })
      .catch((error) => {
        const message = error.message.split('/')[1].split(')')[0];

        toast.update(toastPromise, {
          render: message,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      });
  };

  return (
    <div className="mx-auto max-w-7xl px-8  py-24">
      <Card
        color="transparent"
        shadow={false}
        className="mx-auto w-fit">
        <div className="text-center">
          <Typography
            variant="h4"
            color="blue-gray">
            Sign Up
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal">
            Enter your details to Sign Up.
          </Typography>
        </div>

        <SocialLogin></SocialLogin>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-between">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <p className="text-center text-xs uppercase text-gray-500 ">or sign up with email</p>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>
        <form
          onSubmit={handleRegister}
          className="mb-2 mt-8 w-full max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              type="text"
              name="name"
              color="blue-gray"
            />
            <Input
              size="lg"
              label="Email"
              type="email"
              name="email"
              color="blue-gray"
              required
            />
            <div className="w-full">
              <Input
                type="password"
                name="password"
                size="lg"
                label="Password"
                color="blue-gray"
                required
              />
              {customError && (
                <Typography
                  variant="small"
                  color="red"
                  className="mt-2 flex items-center gap-1 font-normal">
                  <InformationCircleIcon className="-mt-px h-4 w-4" />
                  {customError}
                </Typography>
              )}
            </div>
            {/* <Input
              type="password"
              name="password"
              size="lg"
              label="Password"
              color="blue-gray"
              required
            /> */}
            <Input
              size="lg"
              label="Photo URL"
              type="text"
              name="photo"
              color="blue-gray"
            />
          </div>

          <Button
            className="mt-6"
            color="amber"
            type="submit"
            fullWidth>
            Register
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal">
            Already have an account?{' '}
            <Link
              to={'/login'}
              className="font-medium text-blue-500 transition-colors hover:text-blue-700">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
