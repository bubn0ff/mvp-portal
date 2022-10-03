import moment from 'moment';

export enum EGender {
    Male = 'мужской',
    Female = 'женский'
  }

export interface IInitialState {
    name: string;
    surname?: string;
    sex: EGender;
    birthday?: moment.Moment;
    avatar?: string;
    signUpDate?: moment.Moment;
    lastVisitDate?: moment.Moment;
  }
  
  
export const initialState: IInitialState = {
  name: 'Александр',
  surname: 'Коргаполоф',
  sex: EGender.Male,
  birthday: moment(new Date(1993, 6, 17)),
  avatar: 'https://sib.fm/new_files/img/cats/cat-right.jpg',
  signUpDate: moment(new Date(2022, 5, 23)),
  lastVisitDate: moment(new Date(2022, 6, 2)),
};
  

export interface IProps {
  isModalVisible: boolean;
  initialState?: IInitialState;
  onOk: (data: IInitialState) => void;
  onClose: () => void;
}
