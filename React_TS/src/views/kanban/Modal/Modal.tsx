import { Dispatch, useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';
import ModalView from '../ModalView/ModalView';
import ITask from '../Interfaces/ITask';
import ModalAlarm from '../ModalAlarm/ModalAlarm';
import './Modal.css';

export default function Modal({ isShowModal, setIsShowModal, item }: IProps) {
  const [type, setType] = useState('read');

  if (type === 'read' && localStorage.getItem('create') !== null) {
    setType('write');
  }

  if (isShowModal === true) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
  }

  const closeModal = () => {
    if (type === 'write' && localStorage.getItem('new') !== null) {
      setType('alarm');
    } else {
      setIsShowModal(false);
      setType('read');
      localStorage.clear();
    }
  };

  const View = <ModalView closeModal={setIsShowModal} item={item} setType={setType} />;
  const Edit = <ModalForm closeModal={setIsShowModal} item={item} setType={setType} />;
  const Alarm = <ModalAlarm closeModal={setIsShowModal} setType={setType} />;

  return (
    <div className={isShowModal ? 'modal active' : 'modal'} onClick={closeModal}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>

        { type === 'read' && View }
        { type === 'write' && Edit }
        { type === 'alarm' && Alarm }

        <button className="modal__close" onClick={closeModal} >&times;</button>
      </div>
    </div>
  );
}

interface IProps {
  isShowModal: boolean;
  setIsShowModal: Dispatch<boolean>;
  item: ITask;
}