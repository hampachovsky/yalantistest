import moment from 'moment';

export const formateDate = (date: string, type: string) => {
  if (type === 'toMonth') return moment(date).format('MMMM');
  if (type === 'toFull') return moment(date).format('D MMMM, YYYY');
  return moment(date).format('d, m, y');
};
