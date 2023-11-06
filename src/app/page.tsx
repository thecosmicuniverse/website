import Image from 'next/image'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-20 px-4 md:px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">Welcome to Cosmic Universe</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Join a massive community of players, explore vast landscapes, and engage in epic battles!
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="default">
            Play Now
          </Button>
          <Button
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            variant="outline"
          >
            Learn More
          </Button>
        </div>
      </section>
      <section className="w-full py-20 px-4 md:px-6 bg-black">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Game Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4">
            <svg
              className=" h-12 w-12 text-yellow-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
              <path d="m5 8 4 4" />
              <path d="m12 15 4 4" />
            </svg>
            <h3 className="text-xl font-bold">Magical Abilities</h3>
            <p className="text-gray-300">Unlock and master hundreds of spells and abilities.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <svg
              className=" h-12 w-12 text-yellow-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
              <line x1="13" x2="19" y1="19" y2="13" />
              <line x1="16" x2="20" y1="16" y2="20" />
              <line x1="19" x2="21" y1="21" y2="19" />
            </svg>
            <h3 className="text-xl font-bold">Epic Battles</h3>
            <p className="text-gray-300">Engage in epic battles with players around the world.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <svg
              className=" h-12 w-12 text-yellow-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
            <h3 className="text-xl font-bold">Vast Landscapes</h3>
            <p className="text-gray-300">Explore vast landscapes filled with unique creatures and treasures.</p>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 md:px-6 bg-black">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Hero Carousel</h2>
        <div className="flex overflow-x-scroll space-x-4">
          <img
            alt="Hero 1"
            className="rounded-lg"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
          <img
            alt="Hero 2"
            className="rounded-lg"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
          <img
            alt="Hero 3"
            className="rounded-lg"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </section>
    </main>
  )
}
