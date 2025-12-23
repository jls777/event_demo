import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const { events_categories } = await import("../data/data.json");

  return (
    <div>
      <header>
        <nav>
          {/* <img src="" alt="" /> */}
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </header>
      <main>
        {events_categories.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image
              src={event.image}
              alt={event.title}
              width={200}
              height={400}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}
