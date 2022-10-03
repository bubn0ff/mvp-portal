export const rulesName:any = [
  {
    required: true,
    message: 'Введите ваше имя',
  },
  {
    max: 50,
    message: 'Имя не должно превышать 50 символов',
  },
  {
    type: 'string',
  },
  {
    whitespace: true,
    message: 'Имя не должно состоять из пробелов',
  },
  {
    pattern: /^[a-zA-Zа-яА-Я]+$/,
    message: 'Имя не должно состоять из цифр и символов',
  },
];


export const rulesSurName:any = [
  {
    required: true,
    message: 'Введите вашу фамилию',
  },
  {
    max: 50,
    message: 'Фамилия не должна превышать 50 символов',
  },
  {
    type: 'string',
  },
  {
    whitespace: true,
    message: 'Фамилия не должна состоять из пробелов',
  },
  {
    pattern: /^[a-zA-Zа-яА-Я]+$/,
    message: 'Фамилия не должна состоять из цифр и символов',
  },
];

export const rulesNewPassword:any = [
  {
    required: false,
    message: 'Введите новый пароль!',
  },
  {
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
    message: 'Новый пароль должен состоять не менее 8 символов, иметь 1 цифру, одну заглавную букву, 1 спец символ',
  },
  {
    whitespace: true,
    message: 'Новый пароль не должен состоять из пробелов',
  },
];

