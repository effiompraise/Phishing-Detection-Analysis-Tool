const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 shadow-inner py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>Phishing Detection & Analysis Tool &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;