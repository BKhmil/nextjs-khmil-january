import React from 'react';
import UserComponent from "@/components/user-component/UserComponent";

const UsersComponent = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());

    return (
        <div>
            <ul>
                {
                    users.map((user: IUser, index) => <UserComponent key={index} user={user}/>)
                }
            </ul>
        </div>
    );
};

export default UsersComponent;