export const JOURNEY_NAMES = {
  HomeOwner: 'home-owner',
  QnbMotor: 'qnb-motor',
  FNOL: 'fnol',
  ClientMTA: 'client-mta',
};

export const FORM_HOST = `${process.env.GATSBY_DIGITAL_JOURNEY_SERVICE}`;

export const getCompanyIdByEnv = () => {
  switch (process.env.GATSBY_ACTIVE_ENV) {
    case 'core-dev':
      return '3891b342-cf3d-4dbc-a161-d1e2a58c6513';
    case 'core-test':
      return 'ada53e1a-0c35-437e-afa9-f25f15760df4';
    case 'core-prod':
      return 'ada53e1a-0c35-437e-afa9-f25f15760df4';
    case 'core-demo':
      return 'f9e48b6e-645e-4580-bdcd-ea4c4a6664ad';
    default:
      return '3891b342-cf3d-4dbc-a161-d1e2a58c6513';
  }
};

export const JOURNEY_TYPES = {
  PRODUCTS: 'products',
  QNB_MOTOR: 'motor_qnb',
  FNOL: 'fnol',
  MTA: 'mta',
  QNB: 'qnb',
};

export const COMPANY = getCompanyIdByEnv();
