import { Link } from "react-router-dom";
import fakeFaceImage from "../assets/fake-face-detector-high-resolution-logo-grayscale-transparent.png";

function Footer() {
  return (
    <footer className="bg-[#DBE0FD] text-[#1a2542]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src={fakeFaceImage}
              alt="Fake Face Detector Logo"
              className="h-16 rounded-sm"
            />
            <p className="text-sm leading-relaxed">
              Xception-based deepfake detection system using transfer learning.
              Images are processed temporarily and are not stored. Trained on
              publicly available deepfake datasets.
            </p>
          </div>

          {/* Project */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Project</h4>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/pages/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/pages/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Resources</h4>
            <a
              href="https://sciforum.net/paper/view/27925"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              Research Paper
            </a>
            <a
              href="https://github.com/Eslam-Aly/fake-face-detector-client.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              GitHub (Client)
            </a>
            <a
              href="https://github.com/Eslam-Aly/fake-face-detection.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              GitHub (API)
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Contact</h4>
            <a href="tel:+491623320059" className="hover:text-blue-600">
              Phone: +49 162 332 0059
            </a>
            <a
              href="mailto:eslam.aly@eslamaly.com"
              className="hover:text-blue-600"
            >
              Email: eslam.aly@eslamaly.com
            </a>
            <a
              href="https://eslamaly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              Portfolio: eslamaly.com
            </a>
            <a
              href="https://www.linkedin.com/in/eslam-aly-88b66ab8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-[#1a2542]/30" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm space-y-4 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} Fake Face Detector. All rights
            reserved.
          </p>
          <p className="text-[#1a2542]/70">Privacy-first · Academic project</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
