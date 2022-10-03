import ITask from './ITask';

export default interface IColumn {
  readonly id: string,
  name: string;
  isCreateButton?: boolean,
  items: ITask[];
}