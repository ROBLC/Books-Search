import axios from "axios";

export default {
    getBooks: function (query) {

        return axios.get("api/google", { params: { q: query } });
    },
    saveBook: function (bookData) {
        console.log(bookData);
        return axios.post("/api/books", bookData);
    }

};