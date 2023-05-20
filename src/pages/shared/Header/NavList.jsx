import { Button, MenuItem, Typography } from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";


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
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? 'border-b-2 text-primary duration-300 border-transparent lg:border-primary'
                : ' border-b-2 border-transparent  duration-300 hover:border-gray-400   ';
            }}
            key={label}
            to={path}>
            <Typography
              variant="small"
              color="blue-gray"
              className='font-normal'>
              <MenuItem className="flex items-center gap-2 lg:rounded-full lg:hover:bg-transparent">{label}</MenuItem>
            </Typography>
          </NavLink>
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