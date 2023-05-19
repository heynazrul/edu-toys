import { Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import NavList from './NavList';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { FaPuzzlePiece } from 'react-icons/fa';
import ProfileMenu from './ProfileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <>
      <Navbar className="mx-auto max-w-7xl px-8 ">
        <div className="relative mx-auto flex items-center text-blue-gray-900">
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

          <div className="absolute left-2/4 top-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>

          {/* Profile Menu */}

          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden">
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse
          open={isNavOpen}
          className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
