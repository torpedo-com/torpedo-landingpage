import CallToActionBanner from "../../images/call-to-action.svg";
import { Link} from "react-scroll";
import "./homepage_css/homepage.css";

const CallToAction = () => {
  return (
    <div
      className="bg-cover bg-no-repeat w-full flex h-screen"
      style={{
        backgroundImage: `url('${CallToActionBanner}')`,
      }}
    >
      <div className="flex flex-col justify-center items-center gap-10 text-center w-full text-white">
        <h2 className="text-4xl md:text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-aqua font-black text-center ">
        An enterprise backed platform. 
        </h2>
        <h2 className="self-center tracking-wider font-light md:text-2xl lg:w-3/4 text-center md:px-20">
        Find opportunities curated just for you, accelerate your skills, and build incredible portfolios.
        </h2>

        <div className="bg-gradient-to-r from-purple to-aqua justify-content-center text-lg font-bold tracking-wider text-center rounded-lg text-white py-3 background-animate h-10 w-48 px-10 flex flex-row items-center text-center">
          <Link
            className="w-full uppercase"
            to="join"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            join now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
