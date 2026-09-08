import Link from "next/link";
import Hero from "./_components/Hero";
import LoadLatestGear from "./_components/LoadLatestGear";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  return (
    <>
      <Hero />
      {/* Latest Gear Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center text-center">

            {/* Heading */}
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Gear Up for Your{" "}
              <span className="text-primary">Next Adventure</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Discover our latest outdoor gear, carefully selected to make
              every journey more exciting, comfortable, and unforgettable.
            </p>
          </div>

      
          <LoadLatestGear />
    
          <div className="mt-12 flex justify-center">
            <Link
              href="/gear"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              View All Gear

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}