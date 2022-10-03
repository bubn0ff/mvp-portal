import { FC, useCallback, useEffect, useState } from "react";
import { Props } from "../types";
import { Table, Typography } from "antd";
import { fetchUsers, } from "./data"

import { Link } from "react-router-dom";
 
import moment from "moment";
import Moment from "react-moment";



const { Text } = Typography;

const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        render: (name: any) => (
               <Text type="success">{name}</Text>
          ),
    },
    {
        title: 'Фамилия',
        dataIndex: 'surname',
        key: 'surname',
        render: (surname: any) => (
            <Text type="warning">{surname}</Text>
       ),
    },
    {
        title: 'Роль',
        dataIndex: 'role',
        key: 'role',
        render: (role: any) => (
            <Text mark>{role}</Text>
       ),
    },
    {
        title: 'Дата последнего посещения',
        dataIndex: 'lastVisitDate',
        key: 'lastVisitDate',
        render: (date: moment.Moment) => (
            <Text type="secondary"><Moment format="DD.MM.YYYY" >{date}</Moment></Text>
       ),
    },
    {
        title: 'Дата регистрации',
        dataIndex: 'signUpDate',
        key: 'signUpDate',
        render: (date: moment.Moment) => (
            <Text italic><Moment format="DD.MM.YYYY" >{date}</Moment></Text>
       ),
    },
    {
        title: 'Перейти в профиль',
        dataIndex: 'id',
        render: (id: number | string) => {
            return (
            <Link to={`/profile/${id}`}>GO</Link>
        )},
        key: 'user-id',
        width: 170,
    },
]

const Users: FC<Props> = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [userList, setUserList] = useState<any[]>([]);
    const [requestPage, setRequestPage] = useState(1);
    const [isFullList, setIsFullList] = useState(false);

    const requestUsers = useCallback(() => {
        setIsLoading(true)
        setRequestPage((prevState) => prevState + 1)
        const response = fetchUsers(requestPage + 1, 15);
       
        const { result: { users }, pages } = response;
        setUserList((prevState) => {
            return [...prevState, ...users]
        })
        setIsFullList(pages === requestPage)
        setIsLoading(false)
    },[requestPage])


    const scrollHandler = useCallback((e: any) => {
        const { target: { scrollTop, scrollHeight, clientHeight } } = e;
        const isNeedRequest = (scrollHeight - (scrollTop + clientHeight)) < 150 && !isLoading && !isFullList;
        if(isNeedRequest){
            requestUsers() 
        }
     
    }, [requestPage, requestUsers, isLoading, isFullList])
    
    
    useEffect(() => {
        const table = document.querySelector('.ant-table-body')
       
        if(table){
            table.addEventListener('scroll', scrollHandler)
        }
        return function () {
            table?.removeEventListener('scroll', scrollHandler)
        };
    },[scrollHandler])

     
    useEffect(() => {
        const response = fetchUsers(requestPage, 15);
        const { result: { users } } = response;
        setUserList(users)
    },[])
    


  

    return (
        <Table 
            rowKey={(item) => item.id}
            dataSource={userList}
            columns={columns}
            pagination={false}
            scroll={{
                x: 1200,
                y: 600,
              }}
        />   
    );
  };
  
  export default Users;