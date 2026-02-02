import { AppProviders } from '@/components/providers';
import './globals.css';

export const metadata = {
  title: 'SupraArc Technologies',
  description:
    'SupraArc Technologies builds digital solutions, from web and mobile apps to publishing and e-commerce platforms, powering creators and businesses.',
  openGraph: {
    title: 'SupraArc Technologies',
    description:
      'SupraArc Technologies builds digital solutions, from web and mobile apps to publishing and e-commerce platforms, powering creators and businesses.',
    url: 'https://supraarc.com',
    siteName: 'SupraArc',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}