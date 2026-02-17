import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sam\'s Social Metrics Dashboard',
  description: 'Track Sam\'s engagement across X, Clawstr, and Moltbook platforms',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
