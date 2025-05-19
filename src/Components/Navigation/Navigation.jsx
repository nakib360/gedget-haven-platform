import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div>
      <ul className="menu bg-[white] rounded-box w-full p-5 gap-5 ">
        <li>
          <NavLink to="/" className={({ isActive }) =>
            `btn  border-none shadow-none rounded-full hover:bg-[#9538e2] ${isActive ? "bg-[#9538e2]" : "bg-slate-300"}`}>
            All Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/Laptops" className={({ isActive }) =>
            `btn  border-none shadow-none rounded-full hover:bg-[#9538e2] ${isActive ? "bg-[#9538e2]" : "bg-slate-300"}`}>
            Laptops
          </NavLink>
        </li>
        <li>
          <NavLink to="/Accessories" className={({ isActive }) =>
            `btn  border-none shadow-none rounded-full hover:bg-[#9538e2] ${isActive ? "bg-[#9538e2]" : "bg-slate-300"}`}>
            Accessories
          </NavLink>
        </li>
        <li>
          <NavLink to="/Smart-Watches" className={({ isActive }) =>
            `btn  border-none shadow-none rounded-full hover:bg-[#9538e2] ${isActive ? "bg-[#9538e2]" : "bg-slate-300"}`}>
            Smart Watches
          </NavLink>
        </li>
        <li>
          <NavLink to="/MacBook" className={({ isActive }) =>
            `btn  border-none shadow-none rounded-full hover:bg-[#9538e2] ${isActive ? "bg-[#9538e2]" : "bg-slate-300"}`}>
            MacBook
          </NavLink>
        </li>
        <li>
          <NavLink to="/Iphone" className={({ isActive }) =>
            `btn  border-none shadow-none rounded-full hover:bg-[#9538e2] ${isActive ? "bg-[#9538e2]" : "bg-slate-300"}`}>
            Iphone
          </NavLink>
        </li>
        <li>
          <NavLink to="/Phones" className={({ isActive }) =>
            `btn  border-none shadow-none rounded-full hover:bg-[#9538e2] ${isActive ? "bg-[#9538e2]" : "bg-slate-300"}`}>
            Phones
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
