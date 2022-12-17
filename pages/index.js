import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import Product from '../components/Product';
import apiServiceSS from '../services/apiServiceSS';

function Home({ banner, products }) {
  return (
    <>
      <Navigation />
      <main className="container px-6 mx-auto">
        <Banner {...banner} />
        <div className="xl:flex items-center">
          <div className="xl:w-1/5">
            <h2 className="text-2xl font-bold mt-12 text-center xl:-rotate-90 xl:mt-24">Featured</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:w-3/5">
            {products.map((product) => (
              <Product
                key={product.id}
                {...product}
              />
            ))}
          </div>
          <div className="flex justify-center my-9 xl:w-1/5 items-center xl:mt-32">
            <button
              type="button"
              className="bg-black p-2 text-white hover:bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

Home.propTypes = {
  banner: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    model: PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
      scale: PropTypes.number,
      position: PropTypes.arrayOf(PropTypes.number),
    }),
  }).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      model: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
        scale: PropTypes.number,
        position: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  ).isRequired,
};

export default Home;

export async function getServerSideProps() {
  const {
    data: { data: banner },
  } = await apiServiceSS.get('/banner');
  const {
    data: { data: products },
  } = await apiServiceSS.get('/products');

  return {
    props: {
      banner,
      products,
    },
  };
}
