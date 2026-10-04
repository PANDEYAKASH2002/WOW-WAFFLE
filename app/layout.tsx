import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WOW! WAFFLE | Delicious Waffles in Ankleshwar & Beyond',
  description:
    'Explore the WOW! WAFFLE menu, discover classic and premium waffles, and find your nearest outlet. Visit our Ankleshwar branch in Garden City, Bharuch, Gujarat.',
  keywords: [
    'WOW! WAFFLE',
    'Waffles in Ankleshwar',
    'Garden City Ankleshwar',
    'Nutella Waffle',
    'Chocolate Waffle',
    'Fudge Brownie',
    'Best Waffles Gujarat',
    'Waffle Cart Ankleshwar'
  ],
  authors: [{ name: 'WOW! WAFFLE' }],
  openGraph: {
    title: 'WOW! WAFFLE | Delicious Waffles in Ankleshwar & Beyond',
    description:
      'Explore the WOW! WAFFLE menu, discover classic and premium waffles, and find your nearest outlet.',
    url: 'https://wowwaffle.in',
    siteName: 'WOW! WAFFLE',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#080808] text-white antialiased selection:bg-[#FFD400] selection:text-[#080808]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
