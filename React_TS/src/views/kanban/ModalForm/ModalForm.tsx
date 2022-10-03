import { ChangeEvent, Dispatch, SyntheticEvent, useEffect, useState } from 'react';
import ITask from '../Interfaces/ITask';
import { tasksData as toDoColumn } from '../api/data';
import moment from 'moment';
import './ModalForm.css';

const createID = () => ('' + (Math.random() * Math.random() * 10000).toFixed()).slice(1, 5);
const dateToday = moment().format('DD.MM.YYYY HH:mm');

export default function ModalForm({ closeModal, item, setType }: IProps) {
  const keyNewItem = localStorage.getItem('newItem');
  const keyCreate = localStorage.getItem('create');
  const empty = {
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
  const loadedData: ITask = keyNewItem ? JSON.parse(keyNewItem) : (keyCreate ? empty : item);
  const [newItem, setNewItem] = useState(loadedData);

  useEffect(() => {
    localStorage.setItem('newItem', JSON.stringify(newItem));
  }, [newItem]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    
    if (keyCreate) {
      toDoColumn.push(newItem);
    } else {
      for (const key in newItem) {
        item[key as keyof ITask] = newItem[key as keyof ITask]!;
      }
    }

    closeModal(false);
    setType('read');
    localStorage.clear();
  };

  const closeForm = (e: SyntheticEvent) => {
    e.preventDefault();
    
    if (newItem === item || newItem === empty) {
      closeModal(false);
      setType('read');
      localStorage.clear();
    } else {
      setType('alarm');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
    localStorage.setItem('new', JSON.stringify('new'));
  };

  return (
    <>
      <div className="modal__header">
        <h4 className="modal__title">Режим создания/редактирования</h4>
        <p className="modal__subtitle">Создание/редактирование сведений стикера задачи</p>
      </div>

      <div className="modal__main">
        <form action="#" id="modal-form1" className="modal__form" onSubmit={handleSubmit} >
          <fieldset form="modal-form1" className="modal__form-main">
            <div className="modal__form-base">
              <p className="modal__form-info">Основные поля для заполнения помечены звёздочкой 
                <strong className="modal__form-star"> *</strong>
              </p>
              <div className="modal__form-body">
                <div className="modal__form-group modal__form-group_base">
                  <label htmlFor="author" className="modal__form-label">Автор стикера</label>
                  <input type="text" id="author" name="author" className="modal__form-input" 
                    placeholder="Имя пользователя" onChange={e => handleChange(e)}
                    title="Разрешено использовать только русские или латинские слова с пробелами, 
                    не менее 3 символов и не более 30" 
                    pattern="^[A-Za-zА-Яа-яЁё\s]{3,30}" maxLength={30} value={newItem.author} disabled 
                  />
                </div>
                <div className="modal__form-group modal__form-group_base">
                  <label htmlFor="title" className="modal__form-label">Название задачи 
                    <span className="modal__form-star"> *</span>
                  </label>
                  <input type="text" id="title" className="modal__form-input" 
                    placeholder="например: Создание стикера задачи" name="title"
                    title="Разрешено использовать только русские или латинские слова с пробелами, 
                    не менее 15 символов и не более 50" onChange={e => handleChange(e)}
                    pattern="^[A-Za-zА-Яа-яЁё\s-]{15,50}" minLength={15} maxLength={50} 
                    value={newItem.title} required autoFocus
                  />
                </div>
                <div className="modal__form-group modal__form-group_base">
                  <label htmlFor="description" className="modal__form-label">Описание задачи 
                    <span className="modal__form-star"> *</span>
                  </label>
                  <textarea id="description" name="description" cols={30} rows={5} 
                    className="modal__form-textarea" onChange={e => handleChange(e)}
                    title="Разрешено использовать цифры, а также русские или латинские слова с пробелами, 
                    длиной не менее 100 символов и не более 3000"
                    placeholder="Опишите, что конкретно нужно сделать..." minLength={100} maxLength={3000} 
                    value={newItem.description} required 
                  >
                  </textarea>
                </div>
                <div className="modal__form-group modal__form-group_base">
                  <label htmlFor="trainee" className="modal__form-label">Стажёр</label>
                  <select id="trainee" name="trainee" className="modal__form-select" 
                    onChange={e => handleChange(e)} value={newItem.trainee} >
                    <option value="">Выберите разработчика:</option>
                    <option value="N0by">N0by</option>
                    <option value="Nikita">Nikita</option>
                    <option value="Dany">Dany</option>
                    <option value="Ilya">Ilya</option>
                    <option value="Sveta">Sveta</option>
                    <option value="Igor">Igor</option>
                    <option value="Ivan">Ivan</option>
                    <option value="Alex">Alex</option>
                    <option value="Guest">Guest</option>
                  </select>
                </div>
                <div className="modal__form-group modal__form-group_base">
                  <label htmlFor="topic" className="modal__form-label">Изучаемая тема</label>
                  <select id="topic" name="topic" className="modal__form-select" 
                    onChange={e => handleChange(e)} value={newItem.topic} >
                    <option value="">Выберите тему:</option>
                    <option value="React">React</option>
                    <option value="Typescript">Typescript</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React + TS">React + TS</option>
                    <option value="Backend">Backend</option>
                    <option value="Fullstack">Fullstack</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal__form-attribute">
              <p className="modal__form-info">Блок аттрибутов</p>
              <div className="modal__form-body">
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="id" className="modal__form-label">Номер задачи</label>
                  <input type="number" id="id" name="id" className="modal__form-input" 
                    title="Разрешён числовой формат, от 1 до 99999" pattern="[0-9]{1,5}" 
                    min="1" max="99999" size={5} onChange={e => handleChange(e)}
                    value={newItem.id} disabled 
                  />
                </div>
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="date" className="modal__form-label">Дата создания</label>
                  <input type="text" id="date" name="date" className="modal__form-input" 
                    onChange={e => handleChange(e)} value={newItem.date} disabled 
                  />
                </div>
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="column" className="modal__form-label">Столбец</label>
                  <input type="text" id="column" className="modal__form-input" 
                    title="Разрешено использовать только русские или латинские слова с пробелами, 
                    не менее 5 символов и не более 11" name="column" onChange={e => handleChange(e)}
                    pattern="^[A-Za-zА-Яа-яЁё\s]{5,11}" maxLength={11} value={newItem.column} disabled 
                  />
                </div>
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="status" className="modal__form-label">Статус задачи</label>
                  <select id="status" name="status" className="modal__form-select" 
                    onChange={e => handleChange(e)} value={newItem.status} >
                    <option value="">Выберите статус задачи:</option>
                    <option value="Активна">Активна</option>
                    <option value="Приостановлена">Приостановлена</option>
                    <option value="Закрыта">Закрыта</option>
                  </select>
                </div>
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="type" className="modal__form-label">Тип задачи</label>
                  <select id="type" name="type" className="modal__form-select" 
                    onChange={e => handleChange(e)} value={newItem.type} >
                    <option value="">Выберите тип задачи:</option>
                    <option value="Сбор данных">Сбор данных</option>
                    <option value="Алгоритм">Алгоритм</option>
                    <option value="Разработка">Разработка</option>
                    <option value="Тестирование">Тестирование</option>
                    <option value="Анализ проекта">Анализ проекта</option>
                    <option value="Изучение темы">Изучение темы</option>
                  </select>
                </div>
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="priority" className="modal__form-label">Приоритет</label>
                  <select id="priority" name="priority" className="modal__form-select" 
                    onChange={e => handleChange(e)} value={newItem.priority} >
                    <option value="">Выберите приоритет задачи:</option>
                    <option value="Высокий">Высокий</option>
                    <option value="Средний">Средний</option>
                    <option value="Низкий">Низкий</option>
                  </select>
                </div>
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="dedline" className="modal__form-label">Дедлайн</label>
                  <input type="date" id="dedline" name="dedline" className="modal__form-input" 
                    min="2022-01-01" onChange={e => handleChange(e)} value={newItem.dedline}
                  />
                </div>
                <div className="modal__form-group modal__form-group_attribute">
                  <label htmlFor="grade" className="modal__form-label">Оценка</label>
                  <input type="number" id="grade" name="grade" className="modal__form-input" 
                    title="Учёт оценки сложности задачи в человеко-днях. Разрешён числовой формат, 
                    допускающий до двух знаков после запятой. Максимально допустимое значение до запятой - 10" 
                    pattern="^\d*(\.\d{0,2})?$" min="1" max="10" step=".01" size={5} 
                    onChange={e => handleChange(e)} value={newItem.grade} 
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset form="modal-form1" className="modal__control">
            <button type="submit" className="modal__button" name="btn-ready" >Сохранить</button>
            <button type="reset" className="modal__button" name="btn-cancel" onClick={closeForm}>Отмена</button>
          </fieldset>
        </form>
      </div>

      <div className="modal__footer"></div>
    </>
  );
}

interface IProps {
  closeModal: Dispatch<boolean>;
  item: ITask;
  setType: Dispatch<string>;
}