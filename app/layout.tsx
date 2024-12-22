// types
import { type Metadata, type Viewport } from 'next';

// styles
import './styles/ui.css';
import './styles/site.css';

// variables
export const runtime = 'edge';

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

const title = 'Modern ticketing';
const canonical = 'https://modern-ticketing.com';
const description = 'Modern ticketing is a modern ticketing solution';

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#ffffff',
  initialScale: 1,
};

export const metadata: Metadata = {
  title,
  description,
  robots: 'noindex, nofollow', // TODO: change in production
  keywords: 'modern ticketing',
  alternates: { canonical },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
    shortcut: '/logo192.png',
  },
  metadataBase: new URL(canonical),
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    images: '/logo192.png',
    siteName: 'Modern Ticketing',
  },
};

export default RootLayout;
