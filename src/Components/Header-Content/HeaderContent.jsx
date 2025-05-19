import { useLocation } from "react-router";
import { NavLink } from "react-router";

const HeaderContent = () => {
  const location = useLocation();

  let heroClass = "";
  let heading = "";
  let description = "";
  if (location.pathname.includes("/gadgets/")) {
    heroClass = "pt-10 pb-60";
    heading = "Product Details";
    description =
      "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!";
  } else if (location.pathname === "/Statistics") {
    heroClass = "py-20";
    heading = "Statistics";
    description =
      "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!";
  } else if (location.pathname === "/Dashboard" || location.pathname ==="/Dashboard/cart" || location.pathname ==="/Dashboard/wishlist") {
    heroClass = "py-15";
    heading = "Dashboard";
    description =
      "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!";
  }

  // location.pathname === "/" ? "" : "pt-10 pb-60"
  return (
    <div>
      <div className={`hero bg-[#9538e2] ${heroClass} `}>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">{heading}</h1>
            <p className="py-6">{description}</p>
            <div>
              {location.pathname === "/Dashboard" || location.pathname ==="/Dashboard/cart" || location.pathname ==="/Dashboard/wishlist" ? (
                <div className="">
                  <NavLink
                    to="Dashboard/cart"
                    className={({ isActive }) =>
                      `btn btn-outline mr-2 rounded-full ${
                        isActive || location.pathname ==="/Dashboard/cart" || location.pathname === "/Dashboard" ? "text-[#9538e2] bg-white" : ""
                      }`
                    }
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    to="Dashboard/wishlist"
                    className={({ isActive }) =>
                      `btn btn-outline mr-2 rounded-full ${
                        isActive || location.pathname ==="/Dashboard/wishlist" ? "text-[#9538e2] bg-white" : ""
                      }`
                    }
                  >
                    Wishlist
                  </NavLink>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
