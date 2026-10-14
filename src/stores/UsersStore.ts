import { create } from 'zustand'
import type { User } from '../api/users';

interface UsersState {
    users: User[];
    selectedUserId?: number;
    getUsersCount: () => number;
    selectUser: (user: User) => void;
    removeSelectedUser: () => void;
    removeUser: (id: number) => void;
    removeUsers: () => void;
    setUsers: (users: User[]) => void;
}

export const useUsers = create<UsersState>((set, get) => ({
    users: [],
    usersCount: 0,
    selectedUserId: undefined,

    getUsersCount: () => get().users.length,

    setUsers: (users: User[]) => set({
        users
    }),

    selectUser: (user: User) => set({
        selectedUserId: user.id
    }),
    removeSelectedUser: () => set({
        selectedUserId: undefined
    }),
    removeUser: (id: number) => set(
        { users: {...get().users.filter((user) => user.id !== id)} }
    ),
    removeUsers: () => set(
        { users: [] }
    ),
}));
