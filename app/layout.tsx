import Link from 'next/link';
import './globals.css';
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {/* TODO: Delete this once you start working */}
        <header className="bg-black px-4 py-3 text-white mb-10">
          <nav>
            <ul className="flex items-center justify-center gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/product/test">Product Page</Link>
              </li>
              <li>
                <Link href="/collections">Collections</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
