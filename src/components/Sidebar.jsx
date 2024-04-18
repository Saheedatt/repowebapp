import React from "react";
import { Button } from "@chakra-ui/react";
import "../index.css";

const Sidebar = ({ user }) => {
  return (
    <div className="h-full lg:w-1/4 p-6 sticky top-0 font-monteserrat sidebar">
      <div className="flex flex-col items-center space-x-4 mb-4">
        <img
          src={user.avatarUrl}
          alt="User Avatar"
          className="w-1/2 h-1/2 rounded-full"
          onError={(event) => {
            event.target.src = "/profile.jpg";
          }}
        />
        <div className="flex flex-col items-center">
          <p className="font-bold lg: text-2xl name">{user.name}</p>
          <p className="text-gray-600 user">@{user.username}</p>
        </div>
      </div>
      <p className="text-sm mb-4 bio">{user.bio}</p>
      <div className="flex cta">
        <Button className="bg-black text-white px-4 text-xl py-2 rounded-full mb-4 w-1/2 mr-2 hover:bg-gray-900 button">
          Follow
        </Button>
        <Button className="bg-black text-white px-4 text-xl py-2 rounded-full mb-4 w-1/2 hover:bg-gray-900 button">
          Collaborate
        </Button>
      </div>
      <div>
        <div className="text-xl pb-6 pt-6 text-center location">
          <p>{user.location}</p>
        </div>
        {user.socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="text-gray-700 hover:text-gray-400 block mb-4 links"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
