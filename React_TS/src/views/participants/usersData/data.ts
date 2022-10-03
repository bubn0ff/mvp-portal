import moment from "moment";
import { EGender } from "../../profile/consts/consts";

interface IUser {
    name: string,
    surname: string,
    role: string,
    lastVisitDate: moment.Moment,
    signUpDate: moment.Moment,
    id: number,
    sex: EGender,
    birthday: moment.Moment
    avatar?: string
}



export const users: IUser[] = [
    {
        name: 'Александр',
        surname: 'Коргаполов',
        role: 'стажер',
        lastVisitDate: moment(new Date(2022, 6, 15)),
        signUpDate: moment(new Date(2022, 4, 9)),
        id: 1,
        sex: EGender.Male,
        birthday: moment(new Date(1993, 6, 17)),
        avatar: 'https://sib.fm/new_files/img/cats/cat-right.jpg',
    },
    {
        name: 'Олег',
        surname: 'Гаврилов',
        role: 'ментор',
        lastVisitDate: moment(new Date(2022, 4, 25)),
        signUpDate: moment(new Date(2022, 2, 14)),
        id: 2,
        sex: EGender.Male,
        birthday: moment(new Date(1993, 6, 17)),
        avatar: 'https://sib.fm/new_files/img/cats/cat-right.jpg',
    },
    {
        name: 'Любовь',
        surname: 'Протавкина',
        role: 'стажер',
        lastVisitDate: moment(new Date(2022, 2, 10)),
        signUpDate: moment(new Date(2022, 1, 12)),
        id: 3,
        sex: EGender.Female,
        birthday: moment(new Date(1993, 6, 17)),
        avatar: 'https://sib.fm/new_files/img/cats/cat-right.jpg',
    },
    
]


export const getMockUsers = (count: number) => {
    const result = [];
    let j = 0;
    for(let i = 0; i <= count; i++){
        if(j >= users.length){
            j = 0;
        }
        result.push({
            ...users[j],
            id: i
        })
        j++;
    }
    return result;
}

const mockUsersData = getMockUsers(100)

export const fetchUsers = (page: number, perPage: number = 25) => {
    const pages = Math.ceil(mockUsersData.length / perPage)
  
    const lastIndex = perPage * page;
    const firstIndex = lastIndex - perPage;

    const users = mockUsersData.filter((_, i) => i < lastIndex && i >= firstIndex)


    return {
        result: {
            users,
        },
        pages,
        perPage,
        total: mockUsersData.length,
    }
}

export const fetchUserById = (id: number) => {
    return mockUsersData.find((item) => item.id === id)
}

