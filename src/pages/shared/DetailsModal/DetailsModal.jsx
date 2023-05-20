import { ArrowLongRightIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, Card, CardHeader, CardBody, Typography, IconButton } from '@material-tailwind/react';

const DetailsModal = () => {

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => {
    //   setOpen((cur) => !cur);
    // };

  return (
    <div>
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h6"
              color="blue"
              className="mb-4 uppercase">
              startups
            </Typography>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2">
              Lyft launching cross-platform service this week
            </Typography>
            <Typography
              color="gray"
              className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in transition. It was until recently a
              traditional boxed software company selling licenses. Yet its own business model disruption is only part of
              the story
            </Typography>
            <a
              href="#"
              className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2">
                Learn More
                <ArrowLongRightIcon
                  strokeWidth={2}
                  className="h-4 w-4"
                />
              </Button>
            </a>
            <IconButton
              size="sm"
              color="red"
              variant="text"
              className="!absolute right-4 top-4 rounded-full">
              <HeartIcon className="h-6 w-6" />
            </IconButton>
          </CardBody>
        </Card>
      </Dialog>
    </div>
  );
};

export default DetailsModal;
