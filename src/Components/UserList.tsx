import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import UserBox from "./UserBox";


interface UserListProps {
    query: string
}

const UserList: FC<UserListProps> = ({query}) => {

    const { users } = useAppSelector(state=>state);
    const [parsed, setParsed] = useState<User[]>([]);

    useEffect(()=>{
        parseUsers();
    },[query, users])

    const parseUsers = () => {
        if (users.length > 0) {
            const filtered = users.filter(user => {
                if (
                    user.name.toLowerCase().match(query.toLowerCase()) || 
                    user.username.toLowerCase().match(query.toLowerCase())
                ) return true;
                else return false;
            })
            setParsed([...filtered]);
        }
    }

    useEffect(()=>{
        console.log(parsed);
    }, [parsed])

    return ( 
        <div className="flex flex-col gap-10 mt-[30px]">
            <>
                {parsed.map(user=>(
                    <UserBox key={user.id} user={user} />
                ))}
            </>
        </div> 
    );
}
 
export default UserList;