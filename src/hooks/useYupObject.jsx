import { string, ref, bool } from 'yup';
import validator from 'validator';
import { useTranslation } from 'react-i18next';

const rules = {
  name: {
    min: 3,
    max: 100
  },
  password: {
    min: 8,
    max: 100
  },
  title: {
    min: 3,
    max: 100
  },
  phone_property: {
    min: 9,
    max: 14
  }
};

export const yupRegex = {
  alphanumeric: /^[a-zA-Z0-9 ]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url: /^(?:http?:\/\/)?(?:https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,10}$/,
  // this phone_property regex get from backend
  phone_property: /^([0-9\s\-+()]{9,14})$/,
  number: /^[0-9]*$/
};

export const useYupObject = () => {
  const { t } = useTranslation();

  return {
    name: string()
      .required(t('yup.validation.name.required'))
      .min(
        rules.name.min,
        t('yup.validation.name.min', {
          min: rules.name.min
        })
      )
      .max(
        rules.name.max,
        t('yup.validation.name.max', {
          min: rules.name.max
        })
      )
      .matches(yupRegex.alphanumeric, t('yup.validation.full_name.matches')),
    full_name: string()
      .required(t('yup.validation.full_name.required'))
      .min(
        rules.name.min,
        t('yup.validation.full_name.min', {
          min: rules.name.min
        })
      )
      .max(
        rules.name.max,
        t('yup.validation.full_name.max', {
          min: rules.name.max
        })
      )
      .matches(yupRegex.alphanumeric, t('yup.validation.full_name.matches')),
    email: string()
      .email(t('yup.validation.email.matches'))
      .required(t('yup.validation.email.required'))
      .test({
        name: 'Revalidate email',
        message: () => t('yup.validation.email.matches'),
        test: (value) => validator.isEmail(value)
      }),
    password: string()
      .required(t('yup.validation.password.required'))
      .min(
        rules.password.min,
        t('yup.validation.password.min', {
          min: rules.password.min
        })
      )
      .max(
        rules.password.max,
        t('yup.validation.password.max', {
          min: rules.password.max
        })
      ),
    tos: bool().oneOf([true], t('yup.validation.tos.required')),
    repassword: string()
      .required(t('yup.validation.repassword.required'))
      .oneOf([ref('password'), null], t('yup.validation.repassword.matches')),
    password_loose: string().required(t('yup.validation.password.required')),
    phone: string()
      .required(t('yup.validation.phone.required'))
      .matches(yupRegex.phone, t('yup.validation.phone.matches')),
    website: string()
      .required(t('yup.validation.website.required'))
      .matches(yupRegex.url, t('yup.validation.website.matches'))
  };
};

export default useYupObject;
