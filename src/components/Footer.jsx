import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex flex-col  gap-3">
            <img src={assets.logo} alt="logo" className="w-50 h-10" />
            <span className="text-xl font-semibold">Food Delivery</span>
          </div>
          <p className="text-sm text-gray-400">
            Delicious food delivered fast to your door. Fresh, hot, and ready to
            eat.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a className="hover:text-white" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Menu
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Cart
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Order
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">support@fooddelivery.example</p>
          <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-16 h-16 rounded-full ring-2 ring-orange-400 overflow-hidden shrink-0">
            <img
              src="/me.jpg"
              alt="Mohamad Reza Rajabi"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">Mohamad Reza Rajabi</p>
            <p className="text-sm text-gray-400">Frontend Developer</p>

            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-gray-800 rounded-md hover:bg-gray-700"
              >
                <img
                  src={assets.linkedin_icon}
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>

              <a
                href="https://github.com/rrealmrezarajabi"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-gray-800 rounded-md hover:bg-gray-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-200"
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-1.86c-3.07.67-3.72-1.48-3.72-1.48-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.29 3.02 1.12a10.52 10.52 0 012.75-.37c.93 0 1.86.12 2.75.37 2.1-1.41 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.58 5.15-5.04 5.42.39.34.73 1.02.73 2.06v3.04c0 .29.2.64.76.53 4.4-1.47 7.56-5.63 7.56-10.53C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Food Delivery. Built by Mohamad Reza
        Rajabi.
      </div>
    </footer>
  );
};

export default Footer;
