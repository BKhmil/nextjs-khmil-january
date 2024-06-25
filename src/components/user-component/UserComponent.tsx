import React, {FC} from 'react';
import Link from "next/link";

const UserComponent: FC = ({user}: IUser) => {
    return (
        <div>
            <Link href={'/users/' + user.id}>{user.id} - {user.name}</Link>
        </div>
    );
};

export default UserComponent;