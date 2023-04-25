import React from 'react'
import { FaSpinner } from "react-icons/fa";
import { useBooks } from '../Context/BooksContext'
import { Link } from "react-router-dom";

function Home() {
const {bookList , loading } = useBooks();
  return (
    <div>
      {!loading ? (
        bookList ? (
          bookList.map((book) => (
            <div key={book.id}>
              {/* deatil kısmına gitmek için */}
              <Link to={`/detail/${book.id}`}> 
              {
                <img src={
                  book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "https://via.placeholder.com/150"
                }
                alt={book.volumeInfo.title}
                />
              }
              <div>
                <h5>
                  {/* title kısı için */}
                  {book.volumeInfo.title}
                </h5>
                <p>
                  {/* kitabın yazarı için  */}
                  {book.volumeInfo.authors?.join(",")}
                </p>
                <p>
                  {/* yayınlanma tarihi için */}
                  {book.volumeInfo.publishedDate}
                </p>
              </div>
              </Link>
            </div>
          ))
        ) : (
          <h1>
            Böyle bir kitap yok
          </h1>
        )
      ) : (
        <div>
          <FaSpinner className="animate-spin mr-2 text-5xl" /> Loading...
        </div>
      )}
    </div>
  )
}

export default Home