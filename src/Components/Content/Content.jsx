import { Outlet, useRouteError } from "react-router";
import Navigation from "../Navigation/Navigation";
import banner from "../../assets/banner.jpg"
import { Helmet } from "react-helmet-async";


const Content = () => {
  const error = useRouteError();
  return (
    <div>
      <Helmet>
        <title>Home | gadget haven</title>
      </Helmet>
      <div className="mb-10 md:mb-90">
        <div className=" rounded-b-2xl bg-[#9538e2]">
          <div className="hero-content text-center mx-10 lg:mx-40 pt-5 md:pt-30 flex flex-col items-center">
            <div className="">
              <h1 className="text-2xl md:text-5xl font-bold">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <button className="btn btn-primary rounded-full bg-white text-[#9538e2] p-5">
                Shop Now
              </button>
            </div>
            <div className="card w-outo hidden md:block rounded-3xl p-5 bg-[#ffffff60] border-2 border-white mt-10 md:mt-20 -mb-30 md:-mb-80">
              <figure>
                <img className="rounded-2xl" src={banner} alt="Shoes" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-black text-center mb-10">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex w-full flex-col md:flex-row gap-10">
        <div className=" bg-[] rounded-box grid  grow  md:w-1/4">
          <Navigation />
        </div>
        <div className=" bg-[] rounded-box grid grow md:w-3/4">
          {error ? (
            <div className="text-red-500">
              <h2>Oops! Something went wrong.</h2>
              <p>{error.statusText || error.message}</p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
