import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Input,
} from '@material-tailwind/react';
import { Link, useLoaderData } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import DetailsModal from '../shared/DetailsModal/DetailsModal';

const AllToys = () => {
  const [clickedID, setClickedID] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((cur) => !cur);
    // setClickedID(id);
  };
  console.log(clickedID);

  const TABLE_HEAD = ['Toy Name', 'Sub-category', 'Seller Name', 'Price', 'Quantity', ''];
  const TABLE_ROWS = useLoaderData();

  return (
    <Card className="mx-auto my-12 h-full max-w-7xl">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography
              variant="h5"
              color="blue-gray">
              All Toys
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal">
              All your product showcase in one place
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Link
              to={'/user/add-toy'}
              className="inline-flex">
              <Button
                className="flex items-center gap-3"
                color="blue"
                size="sm">
                <FaPlus
                  strokeWidth={2}
                  className="h-4 w-4"
                />{' '}
                Add New Toy
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ sellerName, email, toyName, category, price, quantity, _id, photo }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={toyName}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={photo}
                        alt={toyName}
                        size="lg"
                        variant="square"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-cover p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold">
                        {toyName}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {category}
                    </Typography>
                  </td>
                  {/* Seller Name */}
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {sellerName}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70">
                        {email}
                      </Typography>
                    </div>
                    {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {date}
                    </Typography> */}
                  </td>
                  {/* Price */}
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      ${price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {quantity}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button
                      onClick={ handleOpen}
                      onMouseDown={()=> setClickedID(_id)}
                      variant="outlined"
                      size="sm"
                      className="flex items-center gap-3">
                      Details
                    </Button>

                    {/* <Tooltip content="Edit User">
                      <IconButton
                        variant="text"
                        color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <DetailsModal
          handleOpen={handleOpen}
          open={open}
          clickedID={clickedID}></DetailsModal>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button
          variant="outlined"
          color="blue-gray"
          size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton
            variant="outlined"
            color="blue-gray"
            size="sm">
            1
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            size="sm">
            2
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            size="sm">
            3
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            size="sm">
            ...
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            size="sm">
            8
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            size="sm">
            9
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            size="sm">
            10
          </IconButton>
        </div>
        <Button
          variant="outlined"
          color="blue-gray"
          size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AllToys;
