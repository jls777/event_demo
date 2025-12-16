import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <img src="" alt="" />
          <Link href="/">Home</Link>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main>
        <a href="">
          <img src="" alt="" />
          <h2>Events in London</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptatum rem officia aliquid omnis nulla porro velit dolor? Minima
            esse saepe dignissimos corrupti quas quia voluptatibus blanditiis,
            modi voluptatem laudantium.
          </p>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Events in San Francisco</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptatum rem officia aliquid omnis nulla porro velit dolor? Minima
            esse saepe dignissimos corrupti quas quia voluptatibus blanditiis,
            modi voluptatem laudantium.
          </p>
        </a>
        <a href="">
          <img src="" alt="" />
          <h2>Events in Barcelona</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptatum rem officia aliquid omnis nulla porro velit dolor? Minima
            esse saepe dignissimos corrupti quas quia voluptatibus blanditiis,
            modi voluptatem laudantium.
          </p>
        </a>
      </main>
    </div>
  );
}
