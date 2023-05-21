import { PencilIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Select,
  Option,
} from '@material-tailwind/react';
import { useContext, useEffect, useState } from 'react';
import { FaPlus, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { HiOutlineTrash } from 'react-icons/hi';
import UpdateToyModal from './UpdateToyModal';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState({});
  const [reFetch, setReFetch] = useState(false);
  const [order, setOrder] = useState(1);

  //   update modal action
  const [open, setOpen] = useState(false);
  const handleOpen = (toy) => {
    setSelectedToy(toy);
    setOpen(!open);
  };

  // get all jobs of user
  const url = `https://edu-toys-server-seven.vercel.app/toys?email=${user.email}`;
  useEffect(() => {
    if (order) {
      fetch(url, {
        headers: {
          order,
        },
      })
        .then((res) => res.json())
        .then((data) => setUserToys(data));
    }
  }, [url, reFetch, order]);

  const changeOrderHandler = (e) => {
    console.log(e);
    const order = Number(e);
    if (order) {
      console.log('it has value', order);
      setOrder(order);
    }
  };

  //   handle update form
  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const _id = form._id.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.desc.value;

    const updatedData = {
      price,
      quantity,
      description,
    };
    fetch(`https://edu-toys-server-seven.vercel.app/toys/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Updated successfully!');
          setReFetch(!reFetch);
        }
        if (data.modifiedCount === 0) {
          toast.error('Update failed. Try again');
        }
      });
  };

  //   Delete button function
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://edu-toys-server-seven.vercel.app/toys/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your toy has been deleted.', 'success');
              setReFetch(!reFetch);
            }
          });
      }
    });
  };

  const TABLE_HEAD = ['Toy Name', 'Sub-category', 'Rating', 'Price', 'Quantity', 'Description', 'Action'];
  const TABLE_ROWS = userToys;

  return (
    <Card className="mx-auto my-12 h-full max-w-7xl">
      <Helmet>
        <title>Edu Toy | My Toys</title>
      </Helmet>
      <CardHeader
        floated={false}
        shadow={false}
        className="relative rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography
              variant="h5"
              color="blue-gray">
              My Toys
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal">
              Manage all of your added toys
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <Link
              to={'/user/add-toy'}
              className=" shrink-0">
              <Button
                className="flex items-center gap-3"
                color="blue"
                size="md">
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
      {/* Sort select */}
      <div className="absolute right-48 top-6">
        <Select
          size="md"
          name="category"
          onChange={(e) => changeOrderHandler(e)}
          label="Sort by price">
          <Option value="">Select Order</Option>
          <Option value="1">Ascending</Option>
          <Option value="-1">Descending</Option>
        </Select>
      </div>
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
            {TABLE_ROWS.map((toy, index) => {
              const { rating, description, toyName, category, price, quantity, photo, _id } = toy;
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={toyName}>
                  <td className={classes}>
                    <Link to={`/toy/${_id}`}>
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
                    </Link>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal">
                      {category}
                    </Typography>
                  </td>
                  {/* Rating */}
                  <td className={classes}>
                    <div className="flex items-center gap-2">
                      <FaStar
                        className="h-4 w-4"
                        color="#FBC02D"></FaStar>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        {rating}.00
                      </Typography>
                    </div>
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
                      {quantity ? quantity : 0} pc
                    </Typography>
                  </td>
                  {/* Description */}
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="max-w-[200px]  font-normal opacity-70 ">
                      {description.slice(0, 60)}...
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex justify-around ">
                      <Tooltip
                        content="Update Toy"
                        className="bg-orange-600">
                        {/* update button */}
                        <IconButton
                          onClick={() => handleOpen(toy)}
                          variant="outlined"
                          color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        content="Delete"
                        className="bg-red-500">
                        {/* Delete Button */}
                        <IconButton
                          onClick={() => handleDelete(_id)}
                          color="red">
                          <HiOutlineTrash className="h-6 w-6" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <UpdateToyModal
          open={open}
          handleOpen={handleOpen}
          selectedToy={selectedToy}
          handleUpdateToy={handleUpdateToy}></UpdateToyModal>
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

export default MyToys;
