import { FC } from "react";

interface UserBoxProps {
    user: User
}

const UserBox: FC<UserBoxProps> = ({user}) => {
    return ( 
        <div className="w-full border-2 border-solid border-slate-300 rounded-md p-2 hover:shadow-md cursor-pointer">
            <div>
                <span>id: </span>
                <span>{user.id.toString()}</span>
            </div>
            <div>
                <span>name: </span>
                <span>{user.name}</span>
            </div>
            <div>
                <span>username: </span>
                <span>{user.username}</span>
            </div>
            <div>
                <span>Website: </span>
                <span><a href={`https://${user.website}`} target="_blank" className="text-blue-400">{user.website}</a></span>
            </div>
            <div>
                <span>Company: </span>
                <span>{user.company.name}</span>
            </div>
        </div>
    );
}
 
export default UserBox;