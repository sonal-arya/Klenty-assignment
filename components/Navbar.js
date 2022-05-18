import Link from "next/link";
import Image from "next/image";
// import '../styles/globals.css'

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="nav">
     
        <Image src="/logo.png" width="120" height="50" className="logo" />
        <div className="NavLink">
          <a href="#">
            <span className="span">Platform</span>
          </a>
          <a href="#">
            <span>Pricing</span>
          </a>
          <a href="#">
            <span>Acceleration</span>
          </a>
          <a href="#">
            <span>Resources</span>
          </a>
          <a href="#">
            <span>Customer Stories</span>
          </a>
        </div>
      </div>
      <div className="btn-grp">
        <button className="login">
          <span>Log in</span>
        </button>

        <button className="demo ">
          <span>SCHEDULE DEMO</span>
        </button>
        <button className="try">
          <span>TRY FOR FREE</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
