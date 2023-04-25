import {createContext, useContext , useState , useEffect} from "react";
import axios from "axios";
const BooksContext = createContext();

export const BooksProvider = ({children}) => {
    const [bookList, setBookList] = useState([]); // listelemeyi tutabilmek için oluşturduğumuz state
    const [loading, setLoading] = useState (false) // loading yazısı için oluşturduğumuz state
    const [searchBooks , setSearchBook] = useState(); // inputtan aramayı tutmak için oluşturduğumuz state

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true); // setLoading true dönerek Loading... yazısını alacağız
                if(searchBooks) {
                    // Aranan kitap adını Google Books API'dan getirmek için;
                    const res = await axios.get(
                        `https://www.googleapis.com/books/v1/volumes?q=${searchBooks}`
                    );
                    console.log(res)
                    setBookList(res.data.items) // datadaki items kısmından kitap isimlerini alacağız
                }
            } catch (error) {
                console.error(error); // eğer hata görürsek console kısmına yazdırmak için
            } finally {
                setLoading(false) // listeleme tamamlandıktan sonra Loading... yazısının gitmesi için
            }
          };
        getData();
    }, [searchBooks]);
    

   const values = {
        searchBooks, 
        setSearchBook,
        bookList, 
        setBookList,
        loading, 
        setLoading,
    }

    return (
        <BooksContext.Provider value={values}> {children} </BooksContext.Provider>
    )
}

export const useBooks = () => useContext(BooksContext);