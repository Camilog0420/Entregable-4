import React from "react";

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article>
      <div>
        <img
          className="w-[100px] aspect-[3/5] object-cover mx-auto rounded-md"
          src={user.image_url ? user.image_url : "/images/noProfile.jpg"}
          alt=""
        />
      </div>
      <div className="border border-[#E5E5E5] rounded-md">
        <h3 className="text-center font-semibold text-2xl py-3">
          {user.first_name} {user.last_name}
        </h3>
        <ul className="px-5">
          <li>
            <h4 className="text-gray-400 pt-3">CORREO</h4>
            <span className="text-xl">{user.email}</span>
          </li>
          <li>
            <h4 className="text-gray-400 pt-4">CUMPLEAÑOS</h4>
            <span>
              <i className="bx bx-gift text-xl"></i>
              {user.birthday}
            </span>
          </li>
        </ul>

        <div className="flex justify-end pr-4 pb-4 gap-3">
          <button
            className="border border-[#D93F3F] bg-[#D93F3F] text-white text-xl h-[43px] w-[43px] rounded-md"
            onClick={() => deleteUser(user.id)}
          >
            <i className="bx bxs-trash"></i>
          </button>
          <button className="border border-[#BDBDBD] bg-[#F6F6F6] text-[#BDBDBD] text-xl h-[43px] w-[43px] rounded-md" onClick={() => handleClickEdit(user)}>
            <i className="bx bxs-pencil"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
