export const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-900 text-white shadow-md z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        {/* <img
          src="/logo.svg"
          alt="FreelanceHub Logo"
          className="h-8 w-8 rounded-full bg-white p-1"
        /> */}
        <h1 className="text-xl font-bold tracking-wide">FreelanceHub</h1>
      </div>
      <nav className="space-x-6 text-sm">
        <a href="#" className="hover:text-yellow-300">Dashboard</a>
        <a href="#" className="hover:text-yellow-300">Clients</a>
        <a href="#" className="hover:text-yellow-300">Projects</a>
        <a href="#" className="hover:text-yellow-300">Payments</a>
      </nav>
    </div>
  </header>
);