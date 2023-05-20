import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  console.log(location);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    const toastPromise = toast.loading('Please wait...');

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.update(toastPromise, {
          render: 'Sign In Successful!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
        navigate(from, { replace: true });
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
            Sign In
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal">
            Enter your details to Sign In.
          </Typography>
        </div>

        {/* Social Login */}
        <SocialLogin></SocialLogin>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-between">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <p className="text-center text-xs uppercase text-gray-500 ">or login with email</p>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div>
        <form
          onSubmit={handleLogIn}
          className="mb-2 mt-8 w-full max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
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
      </Card>
    </div>
  );
};

export default LogIn;
