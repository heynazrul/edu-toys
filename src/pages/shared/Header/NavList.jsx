import { Button, MenuItem, Typography } from "@material-tailwind/react";

import { Link } from "react-router-dom";


const NavList = () => {
    const navListItems = [
      {
        label: 'Home',
        path: '/'
      },
      {
        label: 'All Toys',
        path: '/all-toys'
      },
      {
        label: 'Blogs',
       path: '/blogs'
      },
    ];

    return (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal">
              <MenuItem className="flex items-center gap-2 lg:rounded-full">{label}</MenuItem>
            </Typography>
          </Link>
        ))}
        <Link to={'/login'}>
          <Button
            className=" lg:hidden"
            color="amber">
            Sign In
          </Button>
        </Link>
      </ul>
    );
};

export default NavList;