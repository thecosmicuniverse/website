import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border">
      <p className="text-xs text-gray-500">© {new Date().getUTCFullYear()} Cosmic Universe. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-gray-500 hover:text-yellow-400" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs text-gray-500 hover:text-yellow-400" href="#">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  )
}