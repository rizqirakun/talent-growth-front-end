import PropTypes from 'prop-types';
import { useState, useEffect, useLayoutEffect } from 'react';
import { forwardRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames';
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

const InputTheme = {
  base: 'px-2.5 py-2 form-input disabled:dark:bg-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-white/30 dark:hover:placeholder-white/40'
};
const Input = forwardRef(function Input(
  {
    type = 'text',
    name,
    id,
    value,
    defaultValue = '',
    label = '',
    placeholder,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    required = false,
    readOnly = false,
    disabled = false,
    className = '',
    error = false,
    errorMessage = '',
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    onInput,
    isLoading = false,
    iconPosition,
    autofocus,
    showTogglePassword = false,
    ...rest
  },
  ref
) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [variantStyling, setVariantStyling] = useState('');
  const [sizeStyling, setSizeStyling] = useState('');
  const [fullWidthStyle, setFullWidthStyle] = useState('');
  const [disabledStyle, setDisabledStyle] = useState('');
  const [iconPositionStyle, setIconPositionStyle] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useLayoutEffect(() => {
    let defaultStyling = '';
    if (error) {
      setVariantStyling(
        'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500 focus:outline-none focus-visible:outline-none pr-10'
      );
    } else if (variant === 'primary') {
      setVariantStyling(defaultStyling);
    } else {
      setVariantStyling(defaultStyling);
    }

    switch (size) {
      case 'xs':
        setSizeStyling('rounded px-2 py-1 text-xs');
        break;
      case 'sm':
        setSizeStyling('rounded px-2 py-1 text-sm');
        break;
      case 'md':
        setSizeStyling('rounded-md px-2.5 py-1.5 text-sm');
        break;
      case 'lg':
        setSizeStyling('rounded-md px-3 py-2 text-sm');
        break;
      case 'xl':
        setSizeStyling('rounded-md px-3.5 py-2.5 text-sm');
        break;
      default:
        setSizeStyling('rounded-md px-2.5 py-1.5 text-sm');
    }

    if (fullWidth) {
      setFullWidthStyle('w-full');
    }

    if (disabled) {
      setDisabledStyle('disabled');
    }

    switch (iconPosition) {
      case 'right':
        setIconPositionStyle('pr-10');
        break;
      case 'left':
        setIconPositionStyle('pl-10');
        break;
      default:
        setIconPositionStyle('');
    }
  }, [variant, size, fullWidth, disabled, error, iconPosition]);

  if (isLoading) {
    return (
      <div>
        {label ? (
          <Skeleton
            width="80%"
            height="1rem"
            className="mb-2"
          />
        ) : (
          ''
        )}
        <Skeleton height="2rem" />
      </div>
    );
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <div className={classNames(fullWidthStyle)}>
      {label ? (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          {label}
        </label>
      ) : (
        ''
      )}
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          name={name}
          id={id}
          {...(value ? { value: inputValue } : {})}
          className={classNames(
            InputTheme.base,
            className,
            variantStyling,
            sizeStyling,
            fullWidthStyle,
            disabledStyle,
            iconPositionStyle
          )}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onInput={onInput}
          ref={ref /* pass yup ref */}
          autoFocus={autofocus}
          {...rest}
        />
        {error && !showTogglePassword ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : showTogglePassword ? (
          <button
            type="button"
            className={classNames(
              'absolute inset-y-0 right-0 flex items-center px-3',
              error
                ? 'text-red-500 hover:text-red-600'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-300'
            )}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-4 w-4" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
            <span className="sr-only">show or hide password</span>
          </button>
        ) : (
          ''
        )}
      </div>
      {error && errorMessage ? (
        <p
          className="mt-2 text-sm text-red-600"
          id={`${id}-error`}
        >
          {errorMessage}
        </p>
      ) : (
        ''
      )}
    </div>
  );
});

Input.propTypes = {
  type: PropTypes.oneOfType([PropTypes.oneOf(['text']), PropTypes.string]),
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['primary']),
    PropTypes.string
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.string
  ]),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onInput: PropTypes.func,
  isLoading: PropTypes.bool,
  iconPosition: PropTypes.string,
  autofocus: PropTypes.bool,
  showTogglePassword: PropTypes.bool
};

export default Input;
