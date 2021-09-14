import React from 'react';

function CreateBook({title, author, onChange, onCreate}){
    return(
        <>
            <input name = "title" placeholder = "책 제목" onChange = {onChange} value = {title}></input>
            <input name = "author" placeholder = "저자" onChange = {onChange} value = {author}></input>
            <button onClick = {onCreate}>책 등록</button>
        </>

    )
};


export default CreateBook;