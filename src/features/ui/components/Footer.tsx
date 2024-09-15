import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Company Name</h2>
          <p className="text-sm">© 2024 All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <Link href="#" className="text-sm hover:text-gray-400">
            About Us
          </Link>
          <Link href="#" className="text-sm hover:text-gray-400">
            Services
          </Link>
          <Link href="#" className="text-sm hover:text-gray-400">
            Contact
          </Link>
          <Link href="#" className="text-sm hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>

        <div className="mt-6 flex space-x-4 md:mt-0">
          <Link href="#" className="hover:text-gray-400">
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaTwitter className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
