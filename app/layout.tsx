import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Find Top Restaurants",
  description: "Discover Your Next Dining Adventure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
