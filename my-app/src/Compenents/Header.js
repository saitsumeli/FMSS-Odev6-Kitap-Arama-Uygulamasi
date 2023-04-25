import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"; // useNavigate tıkladığımızda sayfaya yönlendirmek içindir
import { useBooks } from "../Context/BooksContext";

function Header() {
   const {setSearchBook} = useBooks();
   const [searchedBook, setSearchedBook] = useState();
  const navigate = useNavigate();
   
   //Formu submit ettiğimizde çalışmasını istediğimiz fonksiyon;
   const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedBook(e.target.value)
    setSearchBook(searchedBook)
    // Ana sayfaya yönlendirme yapıyoruz
    navigate("/");
   }

   // Input değiştiğinde çalıştıracağımız fonksiyon;
   const handleChange = (e) => {
      setSearchBook(e.target.value);
   }

  return (
    <div className='header'>
        <h1 className='headerTxt'>Book Search using React</h1>
        <form onSubmit={handleSubmit}>
          <input value={searchedBook} onChange={handleChange}  type='search' placeholder='Book Title'></input>
          <button className='searchBtn'>{<AiOutlineSearch/>}</button>
        </form>
    </div>
  )
}

export default Header