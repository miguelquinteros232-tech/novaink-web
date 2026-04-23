import './globals.css'
export const metadata = {
  title: 'Nova Ink',
  description: 'Sublimación y Estampados',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
