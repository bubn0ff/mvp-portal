import { Dispatch } from 'react';
import ITask from '../Interfaces/ITask';
import './ModalView.css';
import reverseString from './utils/reverseString';

export default function ModalView({ closeModal, item, setType }: IProps) {
  return (
    <>
      <div className="modal__header">
        <h4 className="modal__title">Режим просмотра</h4>
        <p className="modal__subtitle">Просмотр сведений стикера задачи</p>
      </div>

      <div className="modal__main">
        <div className="modal-view">
          <div className="modal-view__main">
            <div className="modal-view__base">
              <p className="modal-view__info">Основная информация</p>
              <div className="modal-view__body">
                <div className="modal-view__group modal-view__group_base">
                  <p className="modal-view__text">Автор стикера</p>
                  <p className="modal-view__data">{item.author}</p>
                </div>
                <div className="modal-view__group modal-view__group_base">
                  <p className="modal-view__text">Название задачи</p>
                  <p className="modal-view__data">{item.title}</p>
                </div>
                <div className="modal-view__group modal-view__group_base">
                  <p className="modal-view__text">Описание задачи</p>
                  <p className="modal-view__data modal-view__data_scroll">{item.description}</p>
                </div>
                <div className="modal-view__group modal-view__group_base">
                  <p className="modal-view__text">Стажёр</p>
                  <p className="modal-view__data">{item.trainee}</p>
                </div>
                <div className="modal-view__group modal-view__group_base">
                  <p className="modal-view__text">Изучаемая тема</p>
                  <p className="modal-view__data">{item.topic}</p>
                </div>
              </div>
            </div>
            <div className="modal-view__attribute">
              <p className="modal-view__info">Блок аттрибутов</p>
              <div className="modal-view__body">
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Номер задачи</p>
                  <p className="modal-view__data">{item.id}</p>
                </div>
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Дата создания</p>
                  <p className="modal-view__data">{item.date}</p>
                </div>
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Столбец</p>
                  <p className="modal-view__data">{item.column}</p>
                </div>
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Статус задачи</p>
                  <p className="modal-view__data">{item.status}</p>
                </div>
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Тип задачи</p>
                  <p className="modal-view__data">{item.type}</p>
                </div>
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Приоритет</p>
                  <p className="modal-view__data">{item.priority}</p>
                </div>
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Дедлайн</p>
                  <p className="modal-view__data">{item.dedline ? reverseString(item.dedline) : ''}</p>
                </div>
                <div className="modal-view__group modal-view__group_attribute">
                  <p className="modal-view__text">Оценка</p>
                  <p className="modal-view__data">{item.grade}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__control">
            <button className="modal__button modal__button_edit" name="btn-edit" 
              onClick={() => setType('write')}>Редактировать</button>
            <button className="modal__button modal__button_cancel" name="btn-cancel" 
              onClick={() => closeModal(false)}>Отмена</button>
          </div>
        </div>
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