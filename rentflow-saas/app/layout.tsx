export const metadata = {
  title: 'SimTrace SmartPip',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>SimTrace</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
