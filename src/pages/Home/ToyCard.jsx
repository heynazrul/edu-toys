import { HeartIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  TabPanel,
  Rating,
  IconButton,
} from '@material-tailwind/react';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, toyName, price, rating, photo, description } = toy;

  return (
    <TabPanel
      key={toy._id}
      value={toy.category}>
      <Card className="w-96 transform cursor-pointer duration-500 hover:translate-y-2">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-96">
          <img
            src={photo}
            className="h-full w-full object-cover"
          />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute right-4 top-4 rounded-full">
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium">
              {toyName}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium">
              ${price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75">
            {description.slice(0, 80)}
          </Typography>
          <Rating
            className="mt-3"
            value={parseInt(rating)}
            readonly
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={() =>
              !user
                ? Swal.fire({
                    title: 'Ops! Login First',
                    text: 'You have to login first to view details.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Log me in!',
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate(`/toy/${_id}`);
                    }
                  })
                : navigate(`/toy/${_id}`)
            }
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </TabPanel>
  );
};

export default ToyCard;
