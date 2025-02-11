const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 rounded-lg shadow-lg z-50">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center">
          © 2023{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline text-gray-100"
          >
            SocialPsych™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6 text-gray-100">
              About
            </a>
          </li>
          {/* Add more items here */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
