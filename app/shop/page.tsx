import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <div className="max-w-screen-lg mx-auto my-8">
        <h1 className="font-bold text-xl">Balloon animals for sale</h1>
        <p>Quick and time-saving. Perfect for lazy clowns everywhere.</p>

        <section className="flex flex-col my-4">
          <div className="w-fit">
            <Image
              src="/balloon.jpg"
              className="rounded"
              alt="Blue Dog"
              height={300}
              width={200}
            />
            <p className="my-2">Blue dog.</p>
            <Link className="hover:underline font-extrabold" href="/checkout">
              👉 Buy Now! 👈
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
