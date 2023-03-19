import { useState, useEffect } from 'react';
import axios from 'axios';

const GetApiCustomHook = (link) => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await axios.get(link);
      
      // console.log("response.data==", response.data);
      setBooks(response.data.movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return [books];
};

export default GetApiCustomHook;
