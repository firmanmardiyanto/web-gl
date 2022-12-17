import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
});

function Banner({ title, subtitle, model }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between xl:-my-12">
      <div className="h-96 w-64 flex flex-col mx-auto md:h-80 md:order-2 xl:w-96 xl:h-[500px] lg:ml-auto lg:mr-0">
        <ModelViewer
          modelPath={model.path}
          canvas={{
            camera: {
              position: [200, 2, 150], fov: 50, zoom: 0.8,
            },
          }}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold">
          {title}
        </h1>
        <p className="mt-6">
          {subtitle}
        </p>
        <button
          type="button"
          className="bg-black text-white px-4 py-4 mt-6 rounded-lg hover:bg-gray-900 w-36"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  model: PropTypes.shape({
    path: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default Banner;
