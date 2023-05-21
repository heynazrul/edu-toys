import { Button, Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react';
import { useContext, useEffect, useState } from 'react';
import NavList from './NavList';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { FaPuzzlePiece } from 'react-icons/fa';
import ProfileMenu from './ProfileMenu';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  const handleLogOut = () => {
    console.log('sigout btn clicked');
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="border-b-2 shad">
      <Navbar className="mx-auto max-w-7xl px-3 shadow-none lg:px-8">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          {/* Logo */}
          <Link
            to={'/'}
            className="flex items-center gap-2">
            <FaPuzzlePiece
              className="text-rose-600 inline-block"
              size={24}></FaPuzzlePiece>
            <div className="">
              <Typography
                as="span"
                className="inline-block text-2xl font-bold">
                edu
              </Typography>
              <Typography
                as="span"
                className="inline-block text-2xl font-bold text-accent">
                Toys
              </Typography>
            </div>
          </Link>

          {/* Nav Menu */}
          {/* absolute left-2/4 top-2/4 hidden -translate-x-2/4 -translate-y-2/4 */}
          <div className="hidden lg:block">
            <NavList />
          </div>

          {/* Small device hamburger Icon */}
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden">
            <Bars2Icon className="h-6 w-6" />
          </IconButton>

          {/* Profile Menu */}
          {user ? (
            <ProfileMenu handleLogOut={handleLogOut} />
          ) : (
            <Link to={'/login'}>
              <Button
                className="hidden lg:block"
                color="amber">
                Sign In
              </Button>
            </Link>
          )}
        </div>
        <Collapse
          open={isNavOpen}
          className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
