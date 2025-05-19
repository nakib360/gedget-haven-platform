const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer footer-horizontal footer-center p-10 bg-white text-black rounded-2xl">
        <aside>
          <p className="font-bold text-black text-2xl">AGadget Heaven</p>
          <p className="">
            Leading the way in cutting-edge technology and innovation. Providing
            reliable tech since 1992
          </p>
        </aside>
        <div className="border-t h-1 w-full mx-10"></div>
        <footer className="footer sm:footer-horizontal  bg-white text-black pt-0 md:flex justify-between  lg:px-50 ">
          <nav>
            <h6 className="footer-title text-black">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-black">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </footer>
    </div>
  );
};

export default Footer;
