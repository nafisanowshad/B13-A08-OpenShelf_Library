const NewsletterSection = () => {
  return (
    <div>
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
};

export default NewsletterSection;
