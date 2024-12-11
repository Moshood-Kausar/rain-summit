import "./globals.css";
import { poppins } from "./fonts";
import { NotificationProvider } from "./contexts";

export const metadata = {
  title: 'RAIN Summit 1.0: Transformation is Upon Us',
  description: 'Witness innovation & opportunity at RAIN Summit 1.0. 10 teams compete, industry leaders share insights, & the future of leadership unfolds.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}
