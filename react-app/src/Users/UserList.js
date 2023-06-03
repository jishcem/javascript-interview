import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import User from "./User";
import { selectUsers } from "./usersSlice";

export default function UserList() {
    const users = useSelector(selectUsers);

    const userList = users.map(user => <User key={user.id} user={user}></User>);
    
    return (
        <div>
            <NavLink to={`/add-user`}>Add User</NavLink>
            {userList}
        </div>
    );
}