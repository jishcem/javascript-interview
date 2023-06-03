import { useSelector } from "react-redux";
import User from "./User";
import { selectUsers } from "./usersSlice";

export default function UserList() {
    const users = useSelector(selectUsers);

    const userList = users.map(user => <User key={user.id} user={user}></User>);
    
    return (
        <div>
            {userList}
        </div>
    );
}