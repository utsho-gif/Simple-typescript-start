import React, { FC } from 'react';
import UserModel from '../types/models';

// interface Props {
//     name: string,
//     age: number,
//     addUser: () => void
// }
interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({user, addUser}) => {
    const {name, email} = user;
    return (
        <div>
            <h3>Hello {name}</h3>
            <h3>Email: {email}</h3>
            <button onClick={() => addUser(user)}>Add me</button>
        </div>
    );
};

export default User;