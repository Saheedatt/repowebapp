import React, {useState} from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon, ViewIcon, StarIcon } from "@chakra-ui/icons";
import CreateModal from "./Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewButton = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header flex bg-black text-white p-8 w-full justify-between sticky top-0 font-monteserrat">
      <nav className="flex">
        <ul className="flex list-none">
          <li className=" pr-4 flex items-center">
            <ViewIcon className="icon" boxSize={15} mr={2} />
            <Link to="/overview">Overview</Link>
          </li>
          <li className=" pr-4 flex items-center">
            <HamburgerIcon className="icon"  boxSize={15} mr={2} />
            <Link to="/">Repositories</Link>
          </li>
          <li className="flex items-center">
            <StarIcon className="icon"  boxSize={15} mr={2} />
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <button className="flex bg-white text-black px-4 py-2 rounded-full w-1/8 hover:bg-gray-900 hover:text-white" onClick={handleNewButton}> New</button>

      <CreateModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    
  );
}
export default Header;
