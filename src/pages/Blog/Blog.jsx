import { Helmet } from 'react-helmet';

const posts = [
  {
    title:
      'What is an access token and refresh token? How do they work and where should we store them on the client side? ',
    desc: 'An access token and a refresh token are two components used in authentication and authorization systems. An access token is a credential that represents the users authorization to access specific resources or perform certain actions. It is usually short-lived and is presented with each request to authenticate the users identity. On the other hand, a refresh token is a long-lived token that is used to obtain a new access token when the current one expires',
    img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jan 4 2022',
    href: '#',
  },
  {
    title: 'Compare SQL and NoSQL database',
    desc: 'SQL (Structured Query Language) and NoSQL (Not Only SQL) are two fundamentally different approaches to database management. SQL databases, also known as relational databases, store structured data in tables with predefined schemas and enforce strong data consistency and integrity through ACID (Atomicity, Consistency, Isolation, Durability) transactions. They excel in scenarios where data relationships are well-defined, and complex querying is required. SQL databases provide powerful query languages like SQL that enable joins, aggregations, and advanced data manipulation operations. They have a long-standing history, a mature ecosystem of tools, and are widely used in applications that prioritize data integrity, such as financial systems and e-commerce platforms. ',
    img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jan 4 2022',
    href: '#',
  },
  {
    title: 'What is express js? What is Nest JS?',
    desc: 'Express.js is a popular web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a minimalistic and flexible approach, allowing developers to create robust and scalable server-side applications with ease. Express.js offers a range of features and middleware that facilitate routing, handling HTTP requests and responses, managing sessions, and integrating with databases. On the other hand, Nest.js is a progressive Node.js framework built with TypeScript that combines elements of both object-oriented programming (OOP), functional programming (FP), and utilizes decorators for creating scalable and maintainable server-side applications. It is designed to provide an opinionated structure for building server-side applications, emphasizing modularity, dependency injection, and extensibility.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jan 4 2022',
    href: '#',
  },
  {
    title: 'What is MongoDB aggregate and how does it work?',
    desc: "MongoDB's aggregation framework is a powerful feature that allows you to perform complex data analysis and transformation tasks on your data stored in a MongoDB database. It provides a way to process and combine multiple documents within a collection and generate aggregated results based on various stages of operations.",
    img: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    date: 'Jan 4 2022',
    href: '#',
  },
];

const Blog = () => {
  return (
    <section className="py-32">
      <Helmet>
        <title>Edu Toy | Blogs</title>
      </Helmet>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="space-y-5 sm:mx-auto sm:max-w-md sm:text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">Latest blog Edu Toy</h1>
          <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="items-center justify-center gap-3 sm:flex">
            <div className="relative">
              <svg
                className="absolute inset-y-0 left-3 my-auto h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-gray-500 shadow-sm outline-none focus:border-indigo-600 sm:max-w-xs"
              />
            </div>
            <button className="mt-3 block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-medium text-white shadow hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none sm:mt-0 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
        <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <li
              className="group mx-auto w-full sm:max-w-sm"
              key={key}>
              <a href={items.href}>
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-sm text-indigo-600">{items.date}</span>
                  <h3 className="text-lg font-semibold text-gray-800 duration-150 group-hover:text-indigo-600">
                    {items.title}
                  </h3>
                  <p className="text-sm text-gray-600 duration-150 group-hover:text-gray-800">{items.desc}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
