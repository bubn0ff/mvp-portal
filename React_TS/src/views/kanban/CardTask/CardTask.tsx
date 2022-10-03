import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Dispatch } from 'react';
import ITask from '../Interfaces/ITask';
import './CardTask.css';

export default function CardTask({ provided, snapshot, item, openModal, setItem }: IProps) {
  const showModal = () => {
    setItem(item);
    openModal(true);
  };

  return (
    <div 
      ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 
      className="kanban__task" onClick={showModal}
      style={{ backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86', ...provided.draggableProps.style }}>
      
      <div className="kanban__task-header">
        <div className="kanban__task-title">{item.title}</div>
        <div className="kanban__task-avatar">
          <img src={item.avatar} alt="Аватар" width="35" />
        </div>
      </div>

      <div className="kanban__task-footer">
        <div className="kanban__task-id">
          <span>#</span>
          <span>{item.id}</span>
        </div>
        <div className="kanban__task-date">
          <span>{item.date}</span>
        </div>
        <div className="kanban__task-type">
          <strong>{item.type}</strong>
        </div>
      </div>
    </div>
  );
}

interface IProps {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  item: ITask;
  openModal: Dispatch<boolean>;
  setItem: Dispatch<ITask>;
}