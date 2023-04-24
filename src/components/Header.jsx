import React from 'react'

const Header = ({setIsShowForm}) => {

  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
  }

  return (
    <header className='flex justify-between px-11 py-12'>
      <h1 className='font-bold text-4xl px-10'>Usuarios</h1>

      <button onClick={handleClickShowModal} className="bg-purple-p text-white px-4 py-2 hover:bg-purple-p/80 transition-colors text-sm ">+ Crear nuevo usuario</button>
    </header>
  )
}

export default Header