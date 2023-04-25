import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../Context/BooksContext";
import { FaSpinner } from "react-icons/fa";

function Detail() {
    const [bookDetail, setBookDetail] = useState({});
    const { loading, setLoading } = useBooks();
    const { id } = useParams();

    // useEffect ile kitapların detay kısımlarını alacağız;
    useEffect(() => {
        const getBook = async () => {
            try {
                setLoading(true);
                await axios(`https://www.googleapis.com/books/v1/volumes/${id}`)
                .then(res => {
                    setBookDetail(res.data); // kitap detaylarını alır
                }
                ); 
            } catch (error){
                console.error(error)
            } finally {
                setLoading(false)
            }
        };
        getBook();
    } , [id , setLoading])
    return (
        // Kitap detaylarını almak için;
        <div>
          {console.log(bookDetail)}
    
          {!loading ? (
            bookDetail && bookDetail.volumeInfo ? (
              <div >
                <a
                  href="/"
                >
                  Geri
                </a>
                <div >
                  <div>
                    <img
                      src={
                        bookDetail.volumeInfo.imageLinks
                          ? bookDetail.volumeInfo.imageLinks.thumbnail
                          : "https://via.placeholder.com/150"
                      }
                      alt={bookDetail.volumeInfo.title}
                      
                    />
                  </div>
                  <div>
                    <h2>
                      {bookDetail.volumeInfo.title}
                    </h2>
                    {/* yazar bilgisi için */}
                    <p>
                      {bookDetail.volumeInfo.authors
                        ? bookDetail.volumeInfo.authors.join(", ")
                        : "Yazar Bilgisi Yok"}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {bookDetail.volumeInfo.description}
                    </p>
                    <div>
                        {/* çıkış tarihi bilgisi için */}
                      <div>
                        <p>Çıkış Tarihi</p>
                        <p>
                          {bookDetail.volumeInfo.publishedDate
                            ? bookDetail.volumeInfo.publishedDate
                            : "Çıkış Tarihi Yok"}
                        </p>
                      </div>
                      <div>
                        {/* yayıncı bilgisi için */}
                        <p>Yayıncı</p>
                        <p>
                          {bookDetail.volumeInfo.publisher
                            ? bookDetail.volumeInfo.publisher
                            : "Yayıncı Yok"}
                        </p>
                      </div>
                      <div>
                        {/* puan bilgisi için */}
                        <p>Puan</p>
                        <p>
                          {bookDetail.volumeInfo.averageRating
                            ? bookDetail.volumeInfo.averageRating
                            : "Puanı Yok"}
                        </p>
                      </div>
                      <div>
                        {/* sayfa sayısı bilgisi için  */}
                        <p>Sayfa Sayısı</p>
                        <p>
                          {bookDetail.volumeInfo.pageCount
                            ? bookDetail.volumeInfo.pageCount
                            : "Sayfa Sayısı Yok"}
                        </p>
                      </div>
                      <div>
                        {/* barkot bilgisi için */}
                        <p>Barkot</p>
                        <p>
                          {bookDetail.volumeInfo.industryIdentifiers
                            ? bookDetail.volumeInfo.industryIdentifiers[1]
                              ? "ISBN 13: " +
                                bookDetail.volumeInfo.industryIdentifiers[1]
                                  .identifier
                              : "ISBN 10: " +
                                bookDetail.volumeInfo.industryIdentifiers[0]
                                  .identifier
                            : "Barkot Bilgisi Yok"}
                        </p>
                      </div>
                      <div>
                        {/* boyut bilgisi için */}
                        <p>Boyut</p>
                        <p>
                          {bookDetail.volumeInfo.dimensions &&
                          bookDetail.volumeInfo.dimensions.height &&
                          bookDetail.volumeInfo.dimensions.width
                            ? bookDetail.volumeInfo.dimensions.height +
                              " x " +
                              bookDetail.volumeInfo.dimensions.width
                            : "Boyut Bilgisi Yok"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={bookDetail.volumeInfo.previewLink}
                 
                >
                  İncele
                </a>
              </div>
            ) : (
              <div>
                <p>Böyle bir kitap detayı yok.</p>
                <a
                  href="/"
                  title="Return Home"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Anasayfaya Dön</span>
                </a>
              </div>
            )
          ) : (
            <div>
              <FaSpinner className=" animate-spin mr-2 text-5xl" /> Loading...
            </div>
          )}
        </div>
      );
    };

export default Detail