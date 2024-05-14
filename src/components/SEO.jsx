import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

// ref https://www.freecodecamp.org/news/react-helmet-examples/
export default function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      {title ? (
        <>
          <title>{title}</title>
          <meta
            property="og:title"
            content={title}
          />
          <meta
            name="twitter:title"
            content={title}
          />
        </>
      ) : (
        ''
      )}

      {description ? (
        <>
          <meta
            name="description"
            content={description}
          />
          <meta
            property="og:description"
            content={description}
          />
          <meta
            name="twitter:description"
            content={description}
          />
        </>
      ) : (
        ''
      )}

      {type ? (
        <>
          <meta
            property="og:type"
            content={type}
          />
          <meta
            name="twitter:card"
            content={type}
          />
        </>
      ) : (
        ''
      )}
      {type ? (
        <>
          <meta
            name="author"
            content={name}
          />
          <meta
            name="twitter:creator"
            content={name}
          />
        </>
      ) : (
        ''
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};
