import {
  ChevronDownIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PuzzlePieceIcon,
  PowerIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Tooltip, Typography } from '@material-tailwind/react';
import { createElement, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const ProfileMenu = ({ handleLogOut }) => {
  const { user } = useContext(AuthContext);

  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    if (user.photoURL) {
      setAvatar(user.photoURL);
    } else if (user.displayName) {
      const firstName = user.displayName.split('/')[0];
      const lastName = user.displayName.split('/')[1];
      setAvatar(`https://ui-avatars.com/api/?name=${firstName}+${lastName}`);
    } else if (user.email) {
      setAvatar(`https://ui-avatars.com/api/?name=${user.email}`);
    }
  }, [user]);
  const profileMenuItems = [
    {
      label: 'Add Toy',
      icon: PlusCircleIcon,
      path: '/user/add-toy',
    },
    {
      label: 'My Toys',
      icon: PuzzlePieceIcon,
      path: '/user/my-toys',
    },
    {
      label: 'My Profile',
      icon: UserCircleIcon,
      path: '/profile',
    },
    {
      label: 'Edit Profile',
      icon: Cog6ToothIcon,
      path: '/edit-profile',
    },

    {
      label: 'Sign Out',
      icon: PowerIcon,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom-end">
      <Tooltip
        content={user.displayName ? user.displayName : ''}
        placement="left">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-0">
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="border border-blue-500 p-0.5"
              src={avatar}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
            />
          </Button>
        </MenuHandler>
      </Tooltip>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;

          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={` ${isLastItem ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10' : ''}`}>
              <Link
                to={path}
                className="flex items-center gap-2 rounded">
                {createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                  strokeWidth: 2,
                })}
                {isLastItem ? (
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? 'red' : 'inherit'}
                    onClick={handleLogOut}>
                    {label}
                  </Typography>
                ) : (
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? 'red' : 'inherit'}>
                    {label}
                  </Typography>
                )}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
