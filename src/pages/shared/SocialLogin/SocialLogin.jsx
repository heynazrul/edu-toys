import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";


const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleLogin = () => {
      const toastPromise = toast.loading('Please wait...');
      signInWithGoogle()
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
        })
        .catch((error) => {
          const message = error?.message?.split('/')[1]?.split(')')[0];

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
    <Button
      onClick={handleGoogleLogin}
      variant="outlined"
      size="md"
      className="mt-6 flex items-center justify-between "
      fullWidth>
      <FcGoogle size={24}></FcGoogle> <span className="flex-1">Continue with Google</span>
    </Button>
  );
};

export default SocialLogin;