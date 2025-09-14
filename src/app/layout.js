import { AppProviders } from '@/components/providers';
import './globals.css';

export const metadata = {
  title: 'SupraArc',
  description: 'Building Digital Solutions for Every Industry',
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
