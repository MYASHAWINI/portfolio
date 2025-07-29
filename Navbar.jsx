export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 fixed w-full top-0 z-50">
      <ul className="flex justify-center gap-6">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  )
}
