import Navigation from '../app/components/navigation'



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}
      <Navigation></Navigation>
      </body>
    </html>
  );
}
