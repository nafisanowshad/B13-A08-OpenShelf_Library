const Marquee = () => {
  return (
    <div>
      <section className="bg-primary/10 py-3 overflow-hidden whitespace-nowrap rounded-lg">
        <div className="inline-block animate-[marquee_15s_linear_infinite] text-primary font-semibold text-lg">
          🚀 New Arrivals: Quantum Computing | Get 50% off on your first month.
          📚 Read unlimited books!
        </div>
      </section>
    </div>
  );
};

export default Marquee;
