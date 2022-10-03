import { Col } from 'antd';
import { Dispatch } from 'react';
import DropInnerColumn from '../DropInnerColumn/DropInnerColumn';
import IColumn from '../Interfaces/IColumn';
import ITask from '../Interfaces/ITask';
import './OuterColumnItem.css';

export default function OuterColumnItem({ columnId, column, openModal, setItem }: IProps) {
  return (
    <Col span={6} className="kanban__col" key={columnId}>
      <h2 className="kanban__title">{column.name}</h2>
      <DropInnerColumn columnId={columnId} column={column} openModal={openModal} setItem={setItem} />
    </Col>
  );
}

interface IProps {
  columnId: string;
  column: IColumn;
  openModal: Dispatch<boolean>;
  setItem: Dispatch<ITask>;
}