import React, {useRef, useState} from 'react';
import Booklist from './Booklist'
import CreateBook from './CreateBook';

function App() {

  // 새로운 book을 만드는데 사용할 props (title 과 author를 지정)
  const [inputs, setInputs] = useState({
    title:'',
    author : ''
  });
  
  const {title, author} = inputs;
  
  // onChange 함수에서 이용할 name과 value를 지정
  const onChange = (e) => {
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  // 배열 books를 props 형태로 바꿈 
  const [books, setBooks] = useState([
      {
          num : 1,
          title : 'What is Justice?' ,
          author : 'Kim',
          highlight : true
        },
        {
          num : 2,
          title : 'martion' ,
          author : 'Hyun',
          highlight : false
        },
        {
          num : 3,
          title : 'Demian' ,
          author : 'Wook',
          highlight : false
      }
  
  ]);

  // num( index역할)에 쓸 다음 값. 기본은 4
  const nextNum = useRef(4);

  // 버튼을 누르면 input에 들어간 값과 nextnum으로 이루어진 book 객체 생성
  const onCreate = ()=>{

    const book = {
      num : nextNum.current,
      title,
      author
    };

    // spread나 concat를 이용해 기존 배열에 새로운 book을 추가

    // spred를 이용한 배열 추가 방법
    // setBooks([...books, book]);

    // concat를 이용한 배열 추가 방법
    // concat는 기존의 배열을 바꾸지 않고 추가함
    setBooks(books.concat(book));


    // 추가하고 나면 input 칸이 비워지도록 함
    setInputs({
      title:'',
      author : ''
    })

    nextNum.current += 1;

  };
                    // 여기에는 중괄호를 치면 안된다카이... why??
                    // 이건 Javascript의 변수가 아니라, Book Component에서 받아오는 bookInfo.num에 대입되는 변수라?
  const onRemove = (num)=>{
    setBooks(books.filter(book => book.num !== num))
  }


  const onToggle = (num) => {
    setBooks(books.map(book => book.num === num? {...book, highlight : !book.highlight} : book))
  }

return(
  <>
    <CreateBook onCreate = {onCreate} title = {title} onChange = {onChange} author = {author}></CreateBook>
    <Booklist book = {books} onRemove = {onRemove} onToggle = {onToggle}></Booklist>
  </>

)
}

export default App;
