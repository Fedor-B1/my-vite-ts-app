import { UserCard } from "../components/UserCard";
import { getUsers } from "../api/users";
import {
  useQuery,
} from '@tanstack/react-query'
import { useEffect } from "react";
import { useUsers } from "../stores/UsersStore";

export function UsersPage () {
    const {data, refetch, isLoading, isFetching} = useQuery({ queryKey: ['users'], queryFn: getUsers });
    const loading = isFetching || isLoading;
    const { setUsers } = useUsers();

    useEffect(() => {
        if (data?.data) {
            setUsers(data.data)
        }
    }, [data])


    return (
       <div>
            <div>
                <h1>Users list</h1>
                </div>
                    <button
                        type="button"
                        className="counter"
                        onClick={() => refetch()}
                    >
                    Update user list
                </button>
                <div className='usersContainer'>
                    {loading && <h1>Users list loading...</h1>}
                    {!loading && data?.data.map((user) => <UserCard {...user} />)}
            </div>
       </div>
    );
}