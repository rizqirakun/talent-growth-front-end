import PropTypes from 'prop-types';
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';

const Template = ({ title, description, variant }) => {
  return (
    <>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {(() => {
            if (variant === 'success') {
              return (
                <CheckCircleIcon
                  className="h-6 w-6 text-green-400"
                  aria-hidden="true"
                />
              );
            } else if (variant === 'danger') {
              return (
                <XCircleIcon
                  className="h-6 w-6 text-red-500"
                  aria-hidden="true"
                />
              );
            }
          })()}
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          {title ? (
            <p className="text-sm font-medium text-gray-900 first-letter:capitalize">
              {title}
            </p>
          ) : (
            ''
          )}
          {description ? (
            <p className="text-muted mt-1 text-sm">{description}</p>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

const CloseButton = () => {
  return (
    <div className="mt-1.5 flex flex-shrink-0 p-[8px]">
      <button
        type="button"
        className="hover:text-muted inline-flex rounded-md bg-white text-gray-400"
      >
        <span className="sr-only">Close</span>
        <XMarkIcon
          className="h-5 w-5"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

Template.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.string
};

const Toast = function ({ title, description, variant }, ...rest) {
  toast(
    <Template
      title={title}
      description={description}
      variant={variant}
    />,
    ...rest
  );
};

const InitToastContainer = () => {
  return (
    <ToastContainer
      position={toast.POSITION.TOP_RIGHT}
      autoClose={300000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
      className=""
      toastClassName="!pointer-events-auto !rounded-lg !shadow-lg !ring-1 !ring-black !ring-opacity-5"
      bodyClassName=""
      closeButton={<CloseButton />}
    />
  );
};

export { Toast, InitToastContainer };
export default Toast;
