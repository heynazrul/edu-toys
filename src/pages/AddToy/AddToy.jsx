import { Button, Input, Option, Select, Textarea, Typography } from '@material-tailwind/react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState('');

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://edu-toys-server-seven.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const category = selected;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const description = form.desc.value;

    const toy = {
      sellerName,
      email,
      toyName,
      price,
      category,
      rating,
      quantity,
      photo,
      description,
    };

    console.log(toy);

    fetch('https://edu-toys-server-seven.vercel.app/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Toy added successfully');
        }
      });
    form.reset();
  };
  return (
    <div className="mx-auto max-w-7xl px-8  py-24">
      <Typography
        as="h2"
        color="blue-gray"
        className="mb-4 text-center text-3xl font-bold">
        Add New Toy
      </Typography>
      <form
        onSubmit={handleAddToy}
        className="mx-auto mb-2 mt-8 max-w-screen-lg  ">
        <div>
          <Typography
            color="blue-gray"
            className="mb-4 font-bold">
            Seller Details
          </Typography>
          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2 ">
            <Input
              size="lg"
              label="Seller Name"
              type="text"
              name="sellerName"
              color="blue-gray"
              defaultValue={user.displayName ? user?.displayName : ''}
            />
            <Input
              type="email"
              name="email"
              size="lg"
              label="Seller Email"
              color="blue-gray"
              defaultValue={user.email}
              readOnly
            />
          </div>
        </div>
        <div>
          <Typography
            color="blue-gray"
            className="mb-4 font-bold">
            Toys Details
          </Typography>
          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Input
              size="lg"
              label="Toy Name"
              type="text"
              name="toyName"
              color="blue-gray"
              required
            />
            <Input
              type="number"
              name="price"
              size="lg"
              label="Price"
              color="blue-gray"
              required
            />
            <Select
              name="category"
              onChange={(e) => setSelected(e)}
              label="Category">
              {categories.map(({ label, value }) => (
                <Option
                  key={value}
                  value={value}>
                  {label} Toys
                </Option>
              ))}
              {/* <Option value="Math Toys">Math Toys</Option>
              <Option value="Science Toys">Science Toys</Option>
              <Option value="Puzzle Toys">Puzzle Toys</Option>
              <Option value="Language Toys">Language Toys</Option> */}
            </Select>
            <Input
              size="lg"
              label="Rating"
              type="number"
              name="rating"
              color="blue-gray"
              min={0}
              max={5}
            />
            <Input
              type="number"
              name="quantity"
              size="lg"
              label="Quantity"
              color="blue-gray"
            />
            <Input
              type="text"
              name="photo"
              size="lg"
              label="Toy Image"
              color="blue-gray"
            />
          </div>
          <Textarea
            label="Details Description"
            name="desc"
          />
        </div>

        <Button
          className="mt-6"
          size="lg"
          color="purple"
          type="submit"
          fullWidth>
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default AddToy;
