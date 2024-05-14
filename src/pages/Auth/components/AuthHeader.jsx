import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPath } from '@routes';

const AuthHeader = ({ title }) => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to={getPath('home')}>
          <img
            className="mx-auto h-7 w-auto sm:h-9"
            src="/logo.png"
            alt="logo"
          />
        </Link>
        <h2 className="mt-8 text-center text-xl font-normal leading-9 tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>
    </>
  );
};

AuthHeader.propTypes = {
  title: PropTypes.string
};

export default AuthHeader;
