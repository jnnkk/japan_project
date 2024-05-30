import React from 'react';

const LinkIcon = {
  scale: '150%'
}

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <a className='m-2 p-2' href='https://www.instagram.com/songjy0405/'><img src='img/instagram.svg' alt='...' style={LinkIcon}></img></a>
      <a className='m-2 p-2' href='https://github.com/jnnkk'><img src='img/github.svg' alt='...' style={LinkIcon}></img></a>
      <p className='mt-2'>&copy; 2024 Japan Travel Guide. SJY Web Programming.</p>
    </footer>
  );
}

export default Footer;
