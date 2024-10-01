import './globals.css'
import { NavigationMenu } from './components/NavigationMenu'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 font-sans">
        <NavigationMenu />
        {children}
        <footer className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Evan Crews. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
