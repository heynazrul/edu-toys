import { Carousel, Typography, Button } from '@material-tailwind/react';


const Banner = () => {
  return (
    <Carousel loop={true}>
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1603354351149-e97b9124020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              A World To Explore
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              Active toys for active kids. Brings fun and non-stop learning for your little one.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white">
                Explore
              </Button>
              <Button
                size="lg"
                color="white"
                variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              className="mb-4 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
              Fuel Imagination: Find the Best Educational Toys
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              Designed to stimulate their cognitive abilities, these toys provide a dynamic and engaging learning
              experience. From puzzles to building blocks and spatial awareness, our collection offers a wide range of
              options
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white">
                Explore
              </Button>
              <Button
                size="lg"
                color="white"
                variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1656087804656-1bfdd49f4a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Building Bright Future
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              Empower children with educational toys that inspire learning, creativity, problem-solving, and a passion
              for knowledge.
            </Typography>
            <div className="flex gap-2">
              <Button
                size="lg"
                color="white">
                Explore
              </Button>
              <Button
                size="lg"
                color="white"
                variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
