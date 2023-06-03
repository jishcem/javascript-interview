import { useRef } from 'react';

export default function User({ user }) {
    const clickRef = useRef(0);

    function handleClick() {
        clickRef.current = clickRef.current + 1;
        console.log(`Clicked on the user ${user.username} ${clickRef.current} times`);
    }

  return (
    <div 
        style={{ border: "1px solid", cursor: "pointer" }}        
    >
        <h4>User details</h4>
        <p>
            Username : {user.username}
            <br />
            Email : {user.email}
        </p>
        <button onClick={handleClick}>Show user</button>
    </div>
  );
}
