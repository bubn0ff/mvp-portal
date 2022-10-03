import { Dispatch } from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import CardTask from '../CardTask/CardTask';
import ITask from '../Interfaces/ITask';

export default function DragCard({ item, index, openModal, setItem }: IProps) {
  const getCardTask = (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
    return (<CardTask provided={provided} snapshot={snapshot} item={item} openModal={openModal} setItem={setItem} />);
  };
  
  return (
    <Draggable 
      key={item.id} draggableId={item.id} index={index} 
      children={(provided, snapshot) => getCardTask(provided, snapshot)} 
    />
  );
}

interface IProps {
  item: ITask;
  index: number;
  openModal: Dispatch<boolean>;
  setItem: Dispatch<ITask>;
}