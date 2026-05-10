import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch(
    "https://b13-a08-open-shelf-library-two7.vercel.app/data.json",
  );
  const books = await res.json();
  const topBooks = books.slice(0, 4);
  return (
    <>
      <div className="bg-[#D4D9D7]/30 p-17 pt-12">
        <h1 className="text-3xl text-[#37353E] md:text-4xl font-bold mb-4 max-w-2xl pb-6">
          Featured Books
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {topBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedBooks;
