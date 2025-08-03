import React from 'react';

const FooterContact = () => {
  return (
    <div className="bg-[#111111] w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pb-8">
          <p>DESIGNED BY <a className="hover:text-white transition-colors" href="#">THAER</a></p>
          
          <div className="flex space-x-6 my-4 md:my-0">
            <a 
              className="hover:text-white transition-colors" 
              href="https://x.com/SinghAshir65848" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              TWITTER/X
            </a>
            <a 
              className="hover:text-white transition-colors" 
              href="https://www.linkedin.com/in/ashirwad08singh/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a 
              className="hover:text-white transition-colors" 
              href="https://github.com/Ethan4582" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               GITHUB
            </a>
          </div>
          
          <p>© {new Date().getFullYear()} STARTYOURSTORY.COM</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;