import { Dispatch } from 'react';

export default function ModalAlarm({ closeModal, setType }: IProps) {
  const closeWithoutData = () => {
    closeModal(false);
    localStorage.clear();
    setType('read');
  };

  const returnEditMode = () => {
    setType('write');
  };

  return (
    <>
      <div className="modal__header">
        <h4 className="modal__title modal__title_alarm">У вас есть несохранённые изменения!</h4>
        <p className="modal__subtitle modal__subtitle_alarm">Вы уверены, что хотите покинуть страницу?</p>
      </div>

      <div className="modal__main">
        <p className="modal__text modal__text_center">Если вы нажмёте кнопку "ДА" - ваши изменения будут потеряны</p>
        <div className="modal__control">
          <button className="modal__button" name="btn-ready" onClick={closeWithoutData}>ДА</button>
          <button className="modal__button" name="btn-cancel" onClick={returnEditMode}>НЕТ</button>
        </div>
      </div>

      <div className="modal__footer"></div>
    </>
  );
}

interface IProps {
  closeModal: Dispatch<boolean>;
  setType: Dispatch<string>;
}