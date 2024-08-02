import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import logo from "../../assets/parentune_logo.png";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 items-center p-2 shadow-md">
      <AiOutlineMenu size={25} className="place-content-start" />
      <img src={logo} alt="parentune_logo" className="w-4/5 place-content-center" />
      <span className="flex items-center place-content-end">
        <IoSearchOutline size={25} />
        <IoIosNotificationsOutline size={25} />
      </span>
    </div>
  );
};

export default Navbar;
