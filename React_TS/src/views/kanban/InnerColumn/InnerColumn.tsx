import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import DragCard from '../DragCard/DragCard';
import ITask from '../Interfaces/ITask';
import IColumn from '../Interfaces/IColumn';
import CreateButton from '../CreateButton/CreateButton';
import './InnerColumn.css';
import { Dispatch } from 'react';

export default function InnerColumn({ provided, snapshot, column, openModal, setItem }: IProps) {
  const getDragCard = () => {
    const result: JSX.Element[] = [];
    if (column.items) {
      column.items.map((item: ITask, index: number) => 
        result.push(<DragCard key={item.id} item={item} index={index} openModal={openModal} setItem={setItem} />),
      );
    }
    return result;
  };

  return (
    <div {...provided.droppableProps} ref={provided.innerRef} className="kanban__col-drop"
      style={{backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey'}}>
      
      {getDragCard()}

      {column.isCreateButton && <CreateButton openModal={openModal} />}

      {provided.placeholder}
      
    </div>
  );
}

interface IProps {
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  column: IColumn;
  openModal: Dispatch<boolean>;
  setItem: Dispatch<ITask>;
}