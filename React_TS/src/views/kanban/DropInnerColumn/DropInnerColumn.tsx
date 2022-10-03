import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import IColumn from '../Interfaces/IColumn';
import InnerColumn from '../InnerColumn/InnerColumn';
import { Dispatch } from 'react';
import ITask from '../Interfaces/ITask';

export default function DropInnerColumn({ columnId, column, openModal, setItem }: IProps) {
  const getInnerColumn = (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
    return (<InnerColumn provided={provided} snapshot={snapshot} column={column} 
      openModal={openModal} setItem={setItem} />);
  };

  return (
    <div className="kanban__col-wrap">
      <Droppable droppableId={columnId} key={columnId} 
        children={(provided, snapshot) => getInnerColumn(provided, snapshot)} 
      />
    </div>
  );
}

interface IProps {
  columnId: string;
  column: IColumn;
  openModal: Dispatch<boolean>;
  setItem: Dispatch<ITask>;
}