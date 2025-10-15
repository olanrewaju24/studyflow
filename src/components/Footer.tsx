import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Logo & Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">StudyFlow</h2>
          <p className="text-sm">
            Explore courses, track progress, and achieve your goals with interactive learning.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact & Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-4">Email: info@StudyFlow.com</p>
        
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StudyFlow. All rights reserved.
      </div>
    </footer>
  );
}
