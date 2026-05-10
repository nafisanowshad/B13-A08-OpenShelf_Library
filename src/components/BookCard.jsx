import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="h-full flex justify-center">
      <div
        key={book.id}
        className="group w-full max-w-[320px] flex flex-col bg-[#D4D9D7]/20 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-900/5 overflow-hidden"
      >
        <div className="relative h-[280px] w-full overflow-hidden bg-[#37353E]">
          <img
            src={book.image_url}
            alt={book.title}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          <div className="absolute top-3 right-2 px-4 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#37353E] rounded-full shadow-sm">
            {book.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-[#37353E] text-2xl font-bold leading-tight mb-2">
            {book.title}
          </h3>
          <p className="text-base text-gray-600 font-medium mb-4">
            by <span className="opacity-90">{book.author}</span>
          </p>

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
            {book.description}
          </p>

          {/* Action Button */}
          <div className="mt-auto">
            <Link
              href={`/all-books/${book.id}`}
              className="block text-center border-2 border-[#37353E] text-[#37353E] hover:bg-[#37353E] hover:text-white py-2.5 px-4 text-sm font-bold rounded-xl transition-all duration-300 w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;