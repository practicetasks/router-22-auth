import {type User}  from '../types.ts';

export const users: User[] = [
    {id: crypto.randomUUID(), name: 'Jack', createdAt: '2025-12-12 12:12', reviews: [
        'отзыв 1','отзыв 2','отзыв 3','отзыв 4',
    ]},
    {id: crypto.randomUUID(), name: 'Bob', createdAt: '2025-12-12 12:12', reviews: []},
    {id: crypto.randomUUID(), name: 'Dan', createdAt: '2025-12-12 12:12', reviews: [
            'отзыв 1','отзыв 2','отзыв 3','отзыв 4',
    ]},
    {id: crypto.randomUUID(), name: 'Sam', createdAt: '2025-12-12 12:12', reviews: []}
]

