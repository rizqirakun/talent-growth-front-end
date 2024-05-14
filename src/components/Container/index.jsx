import classNames from 'classnames';
import PropTypes from 'prop-types';

const Container = ({ className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={classNames('w-full px-4', className)}
    >
      {children}
    </div>
  );
};
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
export default Container;
