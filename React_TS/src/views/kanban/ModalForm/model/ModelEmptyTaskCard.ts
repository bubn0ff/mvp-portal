import createID from '../utils/createID';
import dateToday from '../utils/dateToday';

const ModelEmptyTaskCard = {
  id: createID(),
  avatar: 'https://clck.ru/qrjuh',
  author: 'Admin',
  title: '',
  description: '',
  trainee: '',
  topic: '',
  date: dateToday,
  column: 'К изучению',
  status: 'Активна',
  type: '',
  priority: 'Средний',
  dedline: '',
  grade: '1',
};

export default ModelEmptyTaskCard;