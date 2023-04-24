import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUser, handleClickEdit}) => {
  return (
    <section className='grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(250px,_380px))] justify-center mx-auto px-2'>
      {
        users.map((user) => <UserCard key={user.id} deleteUser={deleteUser} handleClickEdit={handleClickEdit} user={user}/>)
      }
    </section>
  )
}

export default UsersList