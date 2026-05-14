import Banner from "@/components/Banner";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import NewsletterSection from "@/components/NewsletterSection";
import { FiBookOpen, FiShield, FiStar } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Banner />

      <section className="bg-primary/10 py-3 overflow-hidden whitespace-nowrap rounded-lg">
        <div className="inline-block animate-[marquee_15s_linear_infinite] text-primary font-semibold text-lg">
          🚀 New Arrivals: Quantum Computing | Get 50% off on your first month.
          📚 Read unlimited books!
        </div>
      </section>

      <FeaturedBooks />

      <section className="py-12 px-6 bg-base-200 rounded-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-base-content/60 mt-3 max-w-xl mx-auto">
            Experience the best digital library platform with premium features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <FiBookOpen size={32} />
            </div>
            <h3 className="font-bold text-xl">Vast Collection</h3>
            <p className="text-sm text-base-content/70">
              Access thousands of books from various genres.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-secondary/10 rounded-full text-secondary">
              <FiStar size={32} />
            </div>
            <h3 className="font-bold text-xl">Top Rated</h3>
            <p className="text-sm text-base-content/70">
              Read the most popular and highly rated titles.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-accent/10 rounded-full text-accent">
              <FiShield size={32} />
            </div>
            <h3 className="font-bold text-xl">Secure Borrowing</h3>
            <p className="text-sm text-base-content/70">
              Your data and reading history are safe with us.
            </p>
          </div>
        </div>
      </section>


        <section className="hero bg-linear-to-br from-primary to-secondary rounded-3xl text-primary-content shadow-xl py-12">
        <div className="hero-content text-center flex-col">
          <h2 className="text-3xl font-bold">Stay Updated!</h2>
          <p className="max-w-md mx-auto my-4 text-primary-content/80">
            Subscribe to our newsletter to get updates on new arrivals and
            exclusive offers.
          </p>
          <div className="join w-full max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered join-item w-full text-base-content"
            />
            <button className="btn btn-neutral join-item">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
