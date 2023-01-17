import '../styles/globals.css'
import ProvidersWrapper from './ProvidersWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  )
}
