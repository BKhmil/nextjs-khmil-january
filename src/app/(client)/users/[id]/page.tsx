import React, {FC} from 'react';

interface IProps {
    params: {
        id: string;
    }
}

const UserPage: FC<IProps> = async ({params:{id}}) => {
    const user: IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json());

    return (
        <div>
            {user.id} {user.name} {user.email}
        </div>
    );
};

export default UserPage;