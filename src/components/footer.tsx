export const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-gray-300 text-sm py-3 shadow-inner">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
      <p>© {new Date().getFullYear()} FreelanceHub. All rights reserved.</p>
      <p>
        Built with ❤️ by <a href="#" className="text-yellow-400 hover:underline">Diana</a>
      </p>
    </div>
  </footer>
);