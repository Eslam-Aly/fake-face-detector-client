import fakeFaceImage from "../assets/fake-face-detector-high-resolution-logo-transparent-2.png";

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#314473] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 text-[#EBEEF7]">
        <div className="flex items-center">
          <a href="#">
            <img
              className=" h-14 rounded-sm hover:scale-105 transition-all duration-200"
              src={fakeFaceImage}
              alt="Fake Face Detector Logo"
            />
          </a>
        </div>
        <nav className="flex items-center space-x-4 text-lg font-medium">
          <a
            href="#"
            className="hover:text-blue-400 hover:scale-105 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-400 hover:scale-105 transition-all duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-blue-400 hover:scale-105 transition-all duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
