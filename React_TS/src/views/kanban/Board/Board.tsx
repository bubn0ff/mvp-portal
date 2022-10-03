import { Row } from 'antd';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useState } from 'react';
import columnsData from '../api/data';
import OuterColumnItem from '../OuterColumnItem/OuterColumnItem';
import Modal from '../Modal/Modal';
import ITask from '../Interfaces/ITask';
import IColumn from '../Interfaces/IColumn';
import moment from 'moment';
import './Board.css';

const removeItemFromSource = (items: ITask[], index: number) => items.splice(index, 1);

const appendItemToNewLocation = (items: ITask[], index: number, item: ITask) => {
  items.splice(index, 0, item);
};

const onDragEnd = (result: DropResult, columns: IColumn[]) => {
  const { source, destination } = result;
  
  if (!destination) return;
  
  const sourceId: string = source.droppableId;
  const sourceColumn: IColumn | undefined = columns.find(el => el.id === sourceId);

  const destId: string = destination.droppableId;
  const destColumn: IColumn | undefined = columns.find(el => el.id === destId);

  if (!sourceColumn || !destColumn) return;
  
  const sourceItems: ITask[] = sourceColumn.items;
  const sourceItemToDragIndex: number = source.index;
  const sourceItemToDrag: ITask = sourceItems[sourceItemToDragIndex];

  const destItems: ITask[] = destColumn.items;
  const destItemToDragIndex: number = destination.index;

  if (sourceColumn.id !== destColumn.id) {
    removeItemFromSource(sourceItems, sourceItemToDragIndex);
    appendItemToNewLocation(destItems, destItemToDragIndex, sourceItemToDrag);
    sourceItemToDrag.column = destColumn.name;
  } else {
    removeItemFromSource(sourceItems, sourceItemToDragIndex);
    appendItemToNewLocation(sourceItems, destItemToDragIndex, sourceItemToDrag);
  }

  const parseDate = (strDate: string) => moment(strDate, 'DD.MM.YYYY HH:mm');
  columns.filter(i => i.items.sort((a, b) => (parseDate(a.date) as any) - (parseDate(b.date) as any)));
};

export default function Board() {
  const [columns, setColumns] = useState<IColumn[]>(columnsData);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState({} as ITask);

  const getOuterColumnItems = () => {
    const result: JSX.Element[] = [];

    columns.forEach((column: IColumn) => {
      result.push(<OuterColumnItem key={column.id} columnId={column.id} column={column} 
        openModal={setIsShowModal} setItem={setModalItem}/>,
      );
    });
    
    return result;
  };

  return (
    <>
      <Row gutter={[16, 16]} align="middle" className="kanban__row">
        <DragDropContext onDragEnd={result => onDragEnd(result, columns)}>
          {getOuterColumnItems()}
        </DragDropContext>
      </Row>

      <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} item={modalItem} />
    </>
  );
}
