import { Dispatch } from 'react';
import './CreateButton.css';

export default function CreateButton({ openModal }: IProps) {
  const createCardTask = () => {
    localStorage.setItem('create', 'create');
    openModal(true);
  };

  return (
    <div className="kanban__create">
      <button className="kanban__add" onClick={createCardTask}>Создать <span>+</span></button>
    </div>
  );
}

interface IProps {
  openModal: Dispatch<boolean>;
}