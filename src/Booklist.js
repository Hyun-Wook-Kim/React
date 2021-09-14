import React from 'react';

function Book({bookInfo, onRemove, onToggle}){
    return(
        <div>
            <b style= {
                {
                    cursor : 'pointer',
                    color : bookInfo.highlight ? 'red' : 'black'
                }
            }
            onClick = {() => onToggle(bookInfo.num)}
            >
            {bookInfo.title} by {bookInfo.author}
            </b>
            <button onClick = {() => onRemove(bookInfo.num)}>삭제하기</button>
        </div>
    )
}


function BookList({book, onRemove, onToggle}){



    return(
        <>
            {/* <Book bookInfo = {books[0]}></Book>
            <Book bookInfo = {books[1]}></Book>
            <Book bookInfo = {books[2]}></Book> */}

            {book.map(book =>(
              <Book bookInfo = {book} key = {book.num} onRemove = {onRemove} onToggle = {onToggle}></Book>
            ))}

        </>

    )
}


export default BookList;