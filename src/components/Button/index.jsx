import classNames from 'classnames';
import PropTypes from 'prop-types';

const ButtonTheme = {
  base: 'group inline-flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none',
  fullWidth: 'w-full',
  variant: {
    primary:
      'bg-primary-600 font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    secondary:
      'bg-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:hover:bg-white/20 dark:ring-transparent dark:text-white',
    soft: 'bg-primary-50 font-semibold text-primary-600 shadow-sm hover:bg-primary-100',
    outline:
      'bg-transparent font-semibold text-primary-600 shadow-sm hover:bg-primary-50 border border-primary',
    danger:
      'bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400',
    warning:
      'bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400',
    'outline-danger':
      'bg-transparent font-semibold text-red-500 shadow-sm hover:bg-red-50 border border-red-500',
    info: 'bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400',
    transparent: ''
  },
  disabled:
    'disabled:bg-gray-300 dark:disabled:bg-gray-400 disabled:text-white !border-gray-300',
  size: {
    xs: 'rounded px-2 py-1 text-xs',
    sm: 'rounded px-2 py-1 text-sm',
    md: 'rounded-md px-2.5 py-1.5 text-sm',
    lg: 'rounded-md px-3 py-2 text-sm',
    xl: 'rounded-md px-3.5 py-2.5 text-sm'
  }
};

export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
  soft: 'soft',
  danger: 'danger',
  warning: 'warning'
};
export const ButtonSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};

export const Button = ({
  type = 'button',
  variant = ButtonVariant.primary,
  size = ButtonSize.md,
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  onClick,
  children,
  ...rest
}) => {
  return (
    <>
      {!loading ? (
        <button
          type={type}
          onClick={onClick}
          className={classNames(
            ButtonTheme.variant[variant],
            ButtonTheme.size[size],
            fullWidth ? ButtonTheme.fullWidth : '',
            disabled ? ButtonTheme.disabled : '',
            className
          )}
          disabled={disabled}
          {...rest}
        >
          {children}
        </button>
      ) : (
        <button
          disabled
          type="button"
          className={classNames(
            ButtonTheme.variant[variant],
            ButtonTheme.size[size],
            fullWidth ? ButtonTheme.fullWidth : '',
            disabled ? ButtonTheme.disabled : '',
            className
          )}
        >
          <svg
            aria-hidden="true"
            role="status"
            className="mr-3 inline h-4 w-4 animate-spin text-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(ButtonVariant)),
    PropTypes.string
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(ButtonSize)),
    PropTypes.string
  ]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
