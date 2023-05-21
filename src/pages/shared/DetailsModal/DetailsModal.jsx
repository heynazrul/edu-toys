import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Card, CardHeader, CardBody, Typography, IconButton, Rating } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const DetailsModal = ({ handleOpen, open, clickedID }) => {
  const [toy, setToy] = useState([]);
  useEffect(() => {
    if (!clickedID) {
      return;
    }
    fetch(`http://localhost:5000/toy/${clickedID}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [clickedID]);

  const { photo, toyName, sellerName, email, price, rating, quantity, description } = toy || {};

  return (
    <Dialog
      size="md"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none">
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none">
          <img
            src={photo}
            alt="image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2">
            {toyName ? toyName : ''}
          </Typography>
          <div className="mb-4 flex items-center justify-between">
            <Rating
              value={parseInt(rating ? rating : 5)}
              readonly></Rating>
            <span className="mr-8 text-2xl font-bold">${price ? price : 0}</span>
          </div>
          <Typography
            color="gray"
            className="mb-8 font-normal">
            {description ? <span>{description.slice(0, 200)} ...</span> : ''}
          </Typography>
          <div className="space-y-2">
            <p className="font-bold">
              Seller Name: <span className="font-normal">{sellerName ? sellerName : ''}</span>
            </p>
            <p className="font-bold">
              Seller Email: <span className="font-normal">{email ? email : ''}</span>
            </p>
            <p className="font-bold">
              Available Quantity: <span className="font-normal">{quantity ? quantity : ''}</span>
            </p>
          </div>

          <IconButton
            onClick={handleOpen}
            size="sm"
            color="blue-gray"
            variant="text"
            className="!absolute right-4 top-4 rounded-full">
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </CardBody>
      </Card>
    </Dialog>
  );
};

export default DetailsModal;
