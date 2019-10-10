import validation from 'validate.js';
import Messages from './message';

let constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: Messages.emailBlank,
    },
    format: {
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: Messages.emailInvalid,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: Messages.pwdBlank,
    },
    length: {
      minimum: 6,
      message: Messages.pwdLenght,
    },
  },
  fullName: {
    presence: {
      allowEmpty: false,
      message: Messages.fullNameBlank,
    },
    length: {
      maximum: 50,
      tooLong: Messages.fullNameLength,
    },
  },
  mobileNo: {
    presence: {
      allowEmpty: false,
      message: Messages.mobileNoBlank,
    },
    format: {
      pattern: '^[0-9]{10}$',
      message: Messages.mobileNoInvalid,
    },
  },
};

export default function validate(fieldName, value) {
  let formValues = {};
  formValues[fieldName] = value;

  let formFields = {};
  formFields[fieldName] = constraints[fieldName];

  let result = validation(formValues, formFields, {fullMessages: false});

  if (result) {
    return result[fieldName][0];
  }
  return null;
}

let PasswordConstraints = {
  password: {
    presence: {
      message: Messages.pwdBlank,
    },
    length: {
      minimum: 6,
      message: Messages.pwdLenght,
    },
  },
  confirmPassword: {
    presence: {
      message: Messages.confirmPwdBlank,
    },
    equality: {
      attribute: 'password',
      message: Messages.pwdMisMatch,
    },
  },
};

/**
 * @return {null}
 */
export function PasswordValidate(password, confirmPassword) {
  let result1 = validation(
    {
      password: password,
      confirmPassword: confirmPassword,
    },
    PasswordConstraints,
    {fullMessages: false},
  );

  if (result1 !== undefined && result1['confirmPassword'] !== undefined) {
    return result1['confirmPassword'][0];
  }
  return null;
}
