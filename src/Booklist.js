import React from 'react';

function Book({bookInfo}){
    return(
        <div>
            {bookInfo.title} by {bookInfo.author}
        </div>
    )
}


function BookList({book}){



    return(
        <>
            {/* <Book bookInfo = {books[0]}></Book>
            <Book bookInfo = {books[1]}></Book>
            <Book bookInfo = {books[2]}></Book> */}

            {book.map(book =>(
              <Book bookInfo = {book} key = {book.num}></Book>
            ))}

        </>

    )
}


export default BookList;