import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import SEO from '@components/SEO';
import { useTranslation } from 'react-i18next';
import { getPath } from '@routes/index';
import NotFoundSvg from '@assets/illustrations/not-found.svg?react';

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <SEO title={`${t('not_found.default.title')} | Talent Growth`} />
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container mx-auto flex min-h-screen items-center px-6 py-12">
          <div className="mx-auto flex max-w-sm flex-col items-center text-center">
            <NotFoundSvg className="h-auto w-72" />
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              {t('not_found.default.title')}
            </h1>
            <p className="text-muted mt-4 dark:text-gray-400">
              {t('not_found.default.description')}
            </p>

            <div className="mt-6 flex w-full shrink-0 items-center justify-center gap-x-3 sm:w-auto">
              <Button
                type="button"
                variant="secondary"
                size="lg"
                onClick={() => navigate(-1)}
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

                <span>{t('not_found.default.button.back')}</span>
              </Button>

              <Link to={getPath('home')}>
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                >
                  <span>{t('not_found.default.button.home')}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
