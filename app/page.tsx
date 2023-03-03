import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const bebasNeue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <nav className="absolute z-10 p-4 flex justify-between items-center w-full text-white">
        <div className="logo">
          <h1 className={`text-red-600 ${bebasNeue.className} text-4xl`}>
            NETFLIX
          </h1>
        </div>
        <div className="nav-links text-sm">
          <select className="bg-transparent mr-2 border-2 rounded">
            <option>English</option>
          </select>
          <Link href="/login" className="bg-red-600 p-1 px-2 rounded">
            Sign In
          </Link>
        </div>
      </nav>
      <div className="banner relative h-4/6-screen md:h-5/6-screen border-b-8 border-neutral-700">
        <Image
          src={`/assets/images/netflix-banner.jpg`}
          alt="Banner Image"
          fill={true}
          className="object-cover"
        />
        <div className="absolute bg-gradient-to-b from-neutral-900 via-transparent to-black h-full w-full"></div>
        <div className="absolute bg-black h-full w-full opacity-30"></div>
        <div className="h-full w-full z-10 absolute flex flex-col items-center justify-center text-white p-4 text-center">
          <h2 className="text-2xl font-medium w-80">
            Unlimited movies, TV shows and more.
          </h2>
          <p className="mt-4">Watch anywhere. Cancel anytime</p>
          <p className="mt-4 w-80 leading-normal">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="mt-4 w-full">
            <input type="text" className="block h-12 w-full" />
            <button className="bg-red-600 p-3 rounded mt-3">
              Get Started &#62;
            </button>
          </form>
        </div>
      </div>
      <div className="faq-section text-white mt-10 w-full border-b-8 border-neutral-700 pb-10">
        <h2 className="text-2xl font-medium text-center mb-4">
          Frequently Asked Questions
        </h2>
        <div className="faq-items">
          <div className="faq-item bg-neutral-800 mb-2">
            <div className="faq-question-section flex justify-between p-4 border-b-2 border-black">
              <p>What is Netflix?</p>
              <div>
                <button>X</button>
              </div>
            </div>
            <div className="faq-answer-section p-4">
              <span className="leading-normal text-left">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more
                &#8211; on thousands of internet-connected devices. <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad &#8211; all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </span>
            </div>
          </div>
          <div className="faq-item bg-neutral-800 mb-2">
            <div className="faq-question-section flex justify-between p-4 border-b-2 border-black">
              <p>What is Netflix?</p>
              <div>
                <button>X</button>
              </div>
            </div>
            <div className="faq-answer-section p-4">
              <span className="leading-normal text-left">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more
                &#8211; on thousands of internet-connected devices. <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad &#8211; all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-4">
        <div className="grid grid-cols-2"></div>
      </footer>
    </main>
  );
}
