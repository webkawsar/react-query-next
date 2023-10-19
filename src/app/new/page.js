"use client"
import { useState } from "react";


const initialData = {
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  };


const AddBook = () => {

    const [inputData, setInputData] = useState(initialData);
    // const [addBook, { data: book, isLoading, isSuccess, isError, error }] = useAddBookMutation();
  

    const handleChange = (e) => {
        // checking field is checkbox or another input
        const featured = e.target.name === "featured";
        if (featured) {
          setInputData({
            ...inputData,
            [e.target.name]: e.target.checked,
          });
        } else {
          setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
          });
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputData, 'inputData')
    

        // api action fire
        // addBook(inputData);


    
        // redirect to homepage

    }

    const { name, author, thumbnail, price, rating, featured } = inputData;

  return (
    <div>
        <main className="py-6 2xl:px-6">
            <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form className="book-form" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label htmlFor="lws-bookName">Book Name</label>
                    <input
                    required
                    className="text-input"
                    type="text"
                    id="lws-bookName"
                    name="name"
                    onChange={handleChange}
                    value={name}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-author">Author</label>
                    <input
                    required
                    className="text-input"
                    type="text"
                    id="lws-author"
                    name="author"
                    onChange={handleChange}
                    value={author}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-thumbnail">Image Url</label>
                    <input
                    required
                    className="text-input"
                    type="text"
                    id="lws-thumbnail"
                    name="thumbnail"
                    onChange={handleChange}
                    value={thumbnail}
                    />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input
                        required
                        className="text-input"
                        type="number"
                        id="lws-price"
                        name="price"
                        onChange={handleChange}
                        value={price}
                    />
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input
                        required
                        className="text-input"
                        type="number"
                        id="lws-rating"
                        name="rating"
                        min="1"
                        max="5"
                        onChange={handleChange}
                        value={rating}
                    />
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                    id="lws-featured"
                    type="checkbox"
                    name="featured"
                    className="w-4 h-4"
                    onChange={handleChange}
                    checked={featured}
                    />
                    <label htmlFor="lws-featured" className="ml-2 text-sm">
                    {" "}
                    This is a featured book{" "}
                    </label>
                </div>

                <button type="submit" className="submit" id="lws-submit">
                    Add Book
                </button>
                </form>
            </div>
            </div>
        </main>
    </div>
  )
}

export default AddBook