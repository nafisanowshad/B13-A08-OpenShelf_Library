import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://b13-a08-open-shelf-library-two7.vercel.app/data.json",
  );
  const books = await res.json();
  const book = books.find((p) => p.id == id);
  return (
    <div className="max-w-5xl mx-auto py-10">
      <Link
        href="/all-books"
        className=" mb-5 inline-flex items-center gap-2 border-2 border-[#37353E] text-[#37353E] hover:bg-[#37353E] hover:text-white py-2.5 px-4 text-sm font-bold rounded-xl transition-all duration-300 group">
        <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
        <span>Back to All Books</span>
      </Link>

      <div className="card  flex-row shadow-2xl overflow-hidden glass-panel">
        <figure className="lg:w-3/4 p-4 lg:p-8 ">
          <img
            src={book.image_url}
            alt={book.title}
            className="rounded-2xl shadow-xl  h-[500px] w-full"
          />
        </figure>
        <div className="card-body lg:w-4/5 p-8 lg:p-12 justify-center space-x-9">
          <div className="absolute top-9 left-130 px-8 py-3 text-[17px] font-bold uppercase tracking-wider bg-gray-400 backdrop-blur-md text-white rounded-full shadow-sm">
            {book.category}
          </div>
          <h1 className=" pt-8 text-4xl text-[#37353E] font-extrabold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

          <div className="divider"></div>

          <div className="prose mb-6">
            <h3 className="text-2xl font-bold text-gray-600/50 pb-3">Description</h3>
            <p className="text-gray-500 leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="bg-gray-500/50 p-4 rounded-xl mb-8 flex justify-between items-center">
            <span className="font-semibold">Availability</span>
            <span
              className={` p-2 badge badge-lg ${book.available_quantity > 0 ? "bg-green-500 text-white" : "bg-red-500"}`}
            >
              {book.available_quantity > 0
                ? `${book.available_quantity} copies left`
                : "Out of Stock"}
            </span>
          </div>

          <div className="card-actions justify-end mt-auto">
            <button className="block text-center border-2 border-[#37353E] text-[#37353E] hover:bg-[#37353E] hover:text-white py-2.5 px-4 text-sm font-bold rounded-xl transition-all duration-300 w-full">
              Borrow This Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
