import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonSize, ButtonVariant } from '@components/Button';
import Input from '@components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthHeader from '../components/AuthHeader';
import { t } from 'i18next';
import { useState } from 'react';
import Checkbox from '@components/Checkbox';
import { getPath } from '@routes';
import Modal from '@components/Modal';
import SEO from '@components/SEO';
import { object } from 'yup';
import useYupObject from '@hooks/useYupObject';
import { preventPhoneFormat } from '@utils/formatting';
import { apiUrl, fetchClient } from '@utils/fetch';
import Toast from '@components/Toast';
import { useMutation } from '@tanstack/react-query';

export default function Register() {
  const navigate = useNavigate();
  const [tosModal, setTosModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const yupObject = useYupObject();
  const [yupSchemaRegister] = useState(() => {
    return object({
      full_name: yupObject.full_name,
      email: yupObject.email,
      phone: yupObject.phone,
      website: yupObject.website,
      password: yupObject.password,
      repassword: yupObject.repassword,
      tos: yupObject.tos
    });
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaRegister)
  });

  const mutationRegister = useMutation({
    mutationFn: async (data) => {
      setIsLoading(true);
      return fetchClient()
        .post(`${apiUrl}/register`, {
          name: data.full_name,
          email: data.email,
          phone: data.phone,
          website: data.website,
          password: data.password,
          tos: data.tos
        })
        .then((resp) => {
          let obj = resp.data;
          return obj;
        })
        .catch((resp) => {
          return resp;
        });
    },
    onSuccess: (data) => {
      console.log(data);
      if (data?.status === 'success') {
        reset();
        navigate(getPath('register-send-email-verification'), {
          state: {
            name: data?.data?.name,
            email: data?.data?.email,
            message: data?.message
          }
        });
      } else {
        Toast({
          title: data?.response?.data?.message ?? data.message,
          variant: 'danger'
        });
      }
    },
    onError: (data) => {
      Toast({
        title: data?.response?.data?.message ?? data.message,
        variant: 'danger'
      });
    },
    onSettled: () => {
      setIsLoading(false);
    },
    retry: false
  });

  const onSubmitHandler = (data) => {
    mutationRegister.mutate(data);
  };

  return (
    <>
      <SEO title={`${t('register.title')} | Talent Growth`} />
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <AuthHeader title={t('register.title')} />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="px-6 py-12 dark:bg-gray-900 sm:rounded-lg sm:bg-white sm:px-12 sm:shadow">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <Input
                {...register('full_name')}
                label={t('register.forms.full_name.label')}
                id="full-name"
                name="full_name"
                type="text"
                autoComplete="full-name"
                required={true}
                error={!!errors.full_name}
                errorMessage={errors.full_name?.message}
              />

              <Input
                {...register('email')}
                label={t('register.forms.email.label')}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required={true}
                error={!!errors.email}
                errorMessage={errors.email?.message}
              />

              <Input
                {...register('phone')}
                label={t('register.forms.phone.label')}
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required={true}
                error={!!errors.phone}
                errorMessage={errors.phone?.message}
                onInput={preventPhoneFormat}
              />

              <Input
                {...register('website')}
                label={t('register.forms.website.label')}
                id="website"
                name="website"
                type="website"
                autoComplete="website"
                required={true}
                error={!!errors.website}
                errorMessage={errors.website?.message}
              />

              <Input
                {...register('password')}
                label={t('register.forms.password.label')}
                id="password"
                name="password"
                type="password"
                required={true}
                error={!!errors.password}
                errorMessage={errors.password?.message}
                showTogglePassword={true}
              />

              <Input
                {...register('repassword')}
                label={t('register.forms.repassword.label')}
                id="repassword"
                name="repassword"
                type="password"
                required={true}
                error={!!errors.repassword}
                errorMessage={errors.repassword?.message}
              />

              <Checkbox
                {...register('tos')}
                id="tos"
                name="tos"
                error={!!errors.tos}
                errorMessage={errors.tos?.message}
                label={
                  <>
                    {t('register.forms.tos.label')}{' '}
                    <button
                      type="button"
                      className="font-bold text-primary"
                      onClick={() => setTosModal(true)}
                    >
                      {t('register.forms.tos.link')}
                    </button>
                  </>
                }
              />

              <Button
                type="submit"
                variant={ButtonVariant.primary}
                size={ButtonSize.xl}
                fullWidth={true}
                loading={!!isLoading}
                disabled={!isDirty || !isValid}
              >
                {t('register.forms.button.submit')}
              </Button>
            </form>
          </div>

          <p className="text-muted mt-10 text-center text-sm">
            {t('register.login.label')}{' '}
            <Link
              to={getPath('login')}
              className="font-semibold leading-6 text-primary hover:text-primary-500"
            >
              {t('register.login.action')}
            </Link>
          </p>
        </div>

        <Modal
          open={tosModal}
          setOpen={setTosModal}
          backdrop={true}
          size="xl"
        >
          <div className="max-h-[60vh] min-h-[60vh] overflow-y-scroll">
            <div className="prose prose-sm max-w-2xl dark:prose-invert">
              <h3 className="mb-3">Terms and Conditions for Talent Growth</h3>
              <h4>Introduction</h4>
              <p>
                These Website Standard Terms and Conditions written on this
                webpage shall manage your use of our website, Webiste Name
                accessible at Website.com. These Terms will be applied fully and
                affect to your use of this Website. By using this Website, you
                agreed to accept all terms and conditions written in here. You
                must not use this Website if you disagree with any of these
                Website Standard Terms and Conditions. Minors or people below 18
                years old are not allowed to use this Website.
              </p>
              <h4>Limitation of Liability</h4>
              <p>
                {`The Service is provided to You "AS IS" and "AS AVAILABLE" and
                with all faults and defects without warranty of any kind. To the
                maximum extent permitted under applicable law, the Company, on
                its own behalf and on behalf of its Affiliates and its and their
                respective licensors and service providers, expressly disclaims
                all warranties, whether express, implied, statutory or
                otherwise, with respect to the Service, including all implied
                warranties of merchantability, fitness for a particular purpose,
                title and non-infringement, and warranties that may arise out of
                course of dealing, course of performance, usage or trade
                practice. Without limitation to the foregoing, the Company
                provides no warranty or undertaking, and makes no representation
                of any kind that the Service will meet Your requirements,
                achieve any intended results, be compatible or work with any
                other software, applications, systems or services, operate
                without interruption, meet any performance or reliability
                standards or be error free or that any errors or defects can or
                will be corrected.`}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
