import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Pagination = ({ pageNumbers, setCurrentPage }) => {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? 'filled' : 'text',
    color: active === index ? 'blue' : 'blue-gray',
    onClick: () => {
      setActive(index);
      setCurrentPage(index);
    },
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
    setCurrentPage(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    setCurrentPage(active - 1);
  };

  return (
    <div className="flex items-center mx-auto gap-4">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}>
        <ArrowLeftIcon
          strokeWidth={2}
          className="h-4 w-4"
        />{' '}
        Previous
      </Button>
      <div className="flex items-center gap-2">
        {pageNumbers.map((num) => (
          <IconButton
            key={num + 1}
            {...getItemProps(num + 1)}>
            {num + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}>
        Next
        <ArrowRightIcon
          strokeWidth={2}
          className="h-4 w-4"
        />
      </Button>
    </div>
  );
};

export default Pagination;
