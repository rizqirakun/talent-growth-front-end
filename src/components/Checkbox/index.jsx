import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, useEffect, useLayoutEffect } from 'react';
import { forwardRef } from 'react';

const Checkbox = forwardRef(function Checkbox(
  {
    name,
    id,
    value,
    defaultValue,
    label = '',
    placeholder,
    variant = 'primary',
    required = false,
    readOnly = false,
    disabled = false,
    className = '',
    error = false,
    errorMessage,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    checked,
    // innerRef,
    // children,
    ...rest
  },
  ref
) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [variantStyling, setVariantStyling] = useState('');
  const [disabledStyle, setDisabledStyle] = useState('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useLayoutEffect(() => {
    if (error) {
      setVariantStyling(
        'h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer bg-white dark:bg-white/5 dark:checked:bg-primary dark:border-white/10'
      );
    } else if (variant === 'primary') {
      setVariantStyling(
        'h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer bg-white dark:bg-white/5 dark:checked:bg-primary dark:border-white/10'
      );
    } else {
      setVariantStyling(
        'h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer bg-white dark:bg-white/5 dark:checked:bg-primary dark:border-white/10'
      );
    }

    if (disabled) {
      setDisabledStyle('disabled');
    }
  }, [variant, disabled, error]);

  return (
    <>
      <div>
        <div className="flex items-center">
          <input
            name={name}
            id={id}
            value={inputValue}
            className={classNames(
              className,
              variantStyling,
              disabledStyle,
              readOnly ? 'opacity-60' : ''
            )}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            checked={checked}
            ref={ref /* pass yup ref */}
            {...rest}
            type="checkbox"
          />
          {label ? (
            <label
              htmlFor={id}
              className="ml-3 block cursor-pointer text-sm leading-6 text-gray-900 dark:text-white"
            >
              {label}
            </label>
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
    </>
  );
});

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['primary']),
    PropTypes.string
  ]),
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
  checked: PropTypes.bool
  // children: PropTypes.node,
  // innerRef: PropTypes.any
};

export default Checkbox;
