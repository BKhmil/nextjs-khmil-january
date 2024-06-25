import React, {FC} from 'react';
import {Metadata} from "next";

export const generateMetadata = async ({params}: {params: {id: string}}): Promise<Metadata> => {
    const user: IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        .then(response => response.json());

    return  {
        title: user.name
    }
}

const UserLayout: FC = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;