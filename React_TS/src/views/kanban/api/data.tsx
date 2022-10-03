import { v4 as uuid } from 'uuid';
import ITask from '../Interfaces/ITask';
import IColumn from '../Interfaces/IColumn';

export const tasksData: ITask[] = [
  { 
    id: '1',
    avatar: 'https://clck.ru/qrjuh',
    author: 'Lehamedtg',
    title: 'Создание модальных окон',
    description: `Создание модальных окон Создание модальных окон Создание модальных окон Создание модальных окон 
                  Создание модальных окон Создание модальных окон `,
    trainee: 'N0by',
    topic: 'React + TS',
    date: '31.01.2022 14:41',
    column: 'К изучению',
    status: 'Активна',
    type: 'Разработка',
    priority: 'Средний',
    dedline: '2022-08-07',
    grade: '7',
  },
  { 
    id: '2',
    avatar: 'https://clck.ru/qrjuh',
    author: 'singleton11',
    title: 'Рефакторинг кода',
    description: `Рефакторинг кода Рефакторинг кода Рефакторинг кода Рефакторинг кода Рефакторинг кода 
                  Рефакторинг кода Рефакторинг кода Рефакторинг кода`,
    trainee: 'Dany',
    topic: 'Backend',
    date: '07.06.2022 15:55',
    column: 'К изучению',
    status: 'Активна',
    type: 'Тестирование',
    priority: 'Высокий',
    dedline: '2022-02-17',
    grade: '5.5',
  },
  { 
    id: '3',
    avatar: 'https://clck.ru/qrjuh',
    author: 'singleton11',
    title: 'Создание профилей пользователей',
    description: `Создание профилей пользователей Создание профилей пользователей Создание профилей пользователей 
                  Создание профилей пользователей Создание профилей пользователей`,
    trainee: 'Nikita',
    topic: 'Backend',
    date: '13.06.2022 19:25',
    column: 'К изучению',
    status: 'Приостановлена',
    type: 'Алгоритм',
    priority: 'Низкий',
    dedline: '2022-03-06',
    grade: '4.8',
  },
];

const columnsData: IColumn[] = [
  { id: uuid(), isCreateButton: true, name: 'К изучению', items: tasksData },
  { id: uuid(), name: 'В работе', items: [] },
  { id: uuid(), name: 'На проверке', items: [] },
  { id: uuid(), name: 'Готовые', items: [] },
];

export default columnsData;