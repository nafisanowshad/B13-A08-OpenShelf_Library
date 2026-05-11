import Link from "next/link";
import { FiTwitter, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#37353E]/20 text-[#37353E] border-t border-gray-900/10 mx-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-primary mb-2">
              <MdMenuBook size={32} className="text-[#37353E]" />
              <span className="text-2xl text-[#37353E] font-bold tracking-wide">OpenShelf</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium">
              <FiPhone className="text-[#695D5E] text-lg shrink-0"/> 
              <span className="underline text-[#695D5E]">01322918236</span> 
              <span className="hidden sm:inline font-normal text-[10px] text-[#695D5E]/60">(Sales)</span>
            </div>
            <div className="flex items-center text-[#695D5E] gap-3 text-xs sm:text-sm font-medium">
              <FiMail className="text-lg shrink-0"/>openshelf31@gmail.com
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#695D5E] font-medium leading-relaxed">
              <FiMapPin className="text-lg shrink-0 mt-0.5"/> 
              <span>31/1, Toyenbee Circular Road, <br/> Motijheel, Dhaka-1200.</span>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col gap-3">
            <h6 className="text-base text-[#37353E] font-bold mb-1">Quick Links</h6>
            <div className="flex flex-col gap-2">
                <Link href="/" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">Home</Link>
                <Link href="/books" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">All Books</Link>
                <Link href="/login" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">Login</Link>
                <Link href="/register" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">Register</Link>
            </div>
          </div>

          {/* 3. Policy */}
          <div className="flex flex-col gap-3">
            <h6 className="text-base text-[#37353E] font-bold mb-1">Policy</h6>
            <div className="flex flex-col gap-2">
                <Link href="/terms" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">Terms & Conditions</Link>
                <Link href="/privacy" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">Privacy Policy</Link>
                <Link href="/return" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">Return Policy</Link>
                <Link href="/faq" className="text-[#695D5E] text-xs sm:text-sm hover:translate-x-1 transition-transform">FAQ</Link>
            </div>
          </div>

          {/* 4. Socials */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h6 className="text-base font-bold text-[#37353E] mb-1">Connect With Us</h6>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform"><FiTwitter size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#333333] flex items-center justify-center text-white hover:scale-110 transition-transform"><FiGithub size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:scale-110 transition-transform"><FiLinkedin size={16} /></a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-[#37353E]/10 bg-[#37353E]">
        <div className="max-w-7xl text-white mx-auto px-4 py-4 text-center text-xs sm:text-sm font-medium">
          <p>Copyright © 2026 OpenShelf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}