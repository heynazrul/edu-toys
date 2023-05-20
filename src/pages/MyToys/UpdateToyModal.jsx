import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
} from '@material-tailwind/react';

const UpdateToyModal = ({ open, handleOpen, selectedToy, handleUpdateToy }) => {
  const { price, quantity, description, _id } = selectedToy;

  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none">
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardHeader
          variant="gradient"
          color="deep-orange"
          className="mb-4 grid h-28 place-items-center">
          <Typography
            variant="h3"
            color="white">
            Update Toy
          </Typography>
        </CardHeader>
        <form onSubmit={handleUpdateToy}>
          <CardBody className="flex flex-col gap-4">
            <div className="hidden">
              <Input
                name="_id"
                defaultValue={_id}
              />
            </div>
            <Input
              type="number"
              name="price"
              size="lg"
              label="Price"
              defaultValue={price}
            />
            <Input
              type="number"
              name="quantity"
              size="lg"
              label="Quantity"
              defaultValue={quantity}
            />
            <Textarea
              label="Details Description"
              name="desc"
              defaultValue={description}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              onClick={handleOpen}
              fullWidth>
              Update
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
};

export default UpdateToyModal;
