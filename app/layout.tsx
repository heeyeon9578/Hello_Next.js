import Navigation from '../app/components/navigation'
import "../styles/global.css"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navigation></Navigation>
      {children}
      
      </body>
    </html>
  );
}
