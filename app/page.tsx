import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const phone = "8801712345678";
  const message = "Hello, I would like to know more about your services.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  // window.open(url, "_blank");

  return (
    <div className="bg-white">
      <div className="m-auto w-11/12">
        <Navbar />
      </div>
      <Header />
      <div className="mt-12">
        <Footer />
      </div>
      {/* <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href={`${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a> */}
    </div>
  );
}
