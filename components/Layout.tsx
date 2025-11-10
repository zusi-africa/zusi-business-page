import Header from "./Header";
import Footer from "./Footer";
import WaitlistNotification from "./WaitlistNotification";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col pt-16 md:pt-20">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      <WaitlistNotification />
    </>
  );
}

