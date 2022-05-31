import React, { ChangeEvent,FormEvent,useState } from 'react';



 interface User {
        name: string,
        age: number
    }

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState<User | null>(null)
    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }

   

    const handleUser = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'adam',
            age: 50
        }
        setUser(userData);
    }   
    const handleElement = (e: ChangeEvent<HTMLInputElement>): void => {
        
    }
    return (
        <div>
            <h2>This is counter</h2>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;