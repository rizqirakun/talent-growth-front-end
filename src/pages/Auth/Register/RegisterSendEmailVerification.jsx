import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getPath } from '@routes';
import Button from '@components/Button';
import { useEffect } from 'react';
import { t } from 'i18next';
import SEO from '@components/SEO';

export default function RegisterSendEmailVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    !location.state?.email ? navigate(getPath('home')) : null;
  });

  return (
    <>
      <SEO
        title={`${t('register_send_email_verification.title')} | Talent Growth`}
      />
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-6 dark:bg-gray-900 sm:py-12">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-gray-800 dark:text-white">
            {t('register_send_email_verification.title')}
          </h2>
          <p className="text-muted mb-2 text-lg dark:text-gray-400">
            {t('register_send_email_verification.description', {
              name: location.state?.name
            })}{' '}
            <span className="font-medium text-primary-500">
              {location.state?.email}
            </span>
            .
          </p>
          <div className="mt-6 flex w-full shrink-0 items-center justify-center gap-x-3 sm:w-auto">
            <Link to={getPath('home')}>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="flex items-center justify-center gap-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>{t('register_send_email_verification.button.back')}</span>
              </Button>
            </Link>
            <Link to={getPath('login')}>
              <Button
                type="button"
                variant="primary"
                size="lg"
                className="px-6"
              >
                <span>
                  {t('register_send_email_verification.button.action')}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

RegisterSendEmailVerification.propTypes = {
  email: PropTypes.string
};
