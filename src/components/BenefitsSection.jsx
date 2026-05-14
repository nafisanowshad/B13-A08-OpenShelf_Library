import { FiBookOpen, FiShield, FiStar } from "react-icons/fi";

const BenefitsSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default BenefitsSection;
