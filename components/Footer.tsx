import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaSquareXTwitter } from "react-icons/fa6";

import Link from "next/link";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Footer = () => {
  return (
<footer className="flex flex-col bg-black-100  ">
  <Button className="flex flex-col md:flex-row items-center justify-between md:space-y-0  rounded-lg px-10 py-10 cursor-none">
    <div className="flex flex-col">
      <div className="flex mb-6 gap-x-4 justify-center md:justify-start">
        <div className="w-10 h-10 bg-white rounded-full flex mr-2">
          <img
            src="/favicon.jpeg"
            alt="Bulkpe"
            className="flex  mx-auto rounded-md"
            defaultChecked
          />
        </div>
        <div className="text-2xl font-semibold">PayBolt</div>
      </div>
      <div className="flex flex-col items-center">
        <address className="not-italic mb-6 text-center md:text-start">
          PayBolt Technologies Private Limited <br /> 504, 1st floor, Sector
          3, HSR Layout, <br /> Bengaluru, Karnataka 560102.
        </address>
        <div className="flex space-x-4 mb-10 justify-center md:self-start">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700"
          >
            <FaFacebook className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700"
          >
            <FaSquareXTwitter className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.Linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-x-20 gap-y-2">
      <Link href='/home' className="mb-2 hover:text-gray-700">
        PayBolt
      </Link>
      <Link
        href='/qr-collections'
        className="mb-2 hover:text-gray-700"
      >
        Products
      </Link>
      <Link href='/pricing' className="mb-2 hover:text-gray-700">
        Pricing
      </Link>
      <Link href='/contacts' className="mb-2 hover:text-gray-700">
        Contact Us
      </Link>
      <Link href="/t&c" className="mb-2 hover:text-gray-700">
        Terms of Service
      </Link>
      <Link href="/privacy" className="mb-2 hover:text-gray-700">
        Privacy Policy
      </Link>
    </div>
  </Button>
    <div className="flex items-center justify-center text-left ml-10  mb-4 mt-4">
      @ Copyright 2024 PayBolt Technologies Private Limited
    </div>
</footer>
  );
};

export default Footer;
