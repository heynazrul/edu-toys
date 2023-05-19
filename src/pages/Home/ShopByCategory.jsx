import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";


const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('html');
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    console.log(activeTab);
    return (
      <div className="mx-auto mt-12 max-w-7xl px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Shop By Category</h2>
        <Tabs
          id="custom-animation"
          value={activeTab}>
          <TabsHeader
            className="rounded border-b border-blue-gray-50  "
            indicatorProps={{
              className: 'bg-transparent border-b-2 border-blue-500 shadow-none rounded-none',
            }}>
            {categories.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? 'text-blue-500' : ''}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}>
            {categories.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    );
};

export default ShopByCategory;