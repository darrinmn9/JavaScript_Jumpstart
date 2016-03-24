var book = {
  author: 'JK Rowling',
  genre: 'Fiction',
  'main title': "harry potter and the sorcerer's stone"

};

var author = book.author; // this is the same as writing book['author']
var genre = book.genre;
var title = book['main title'];

//book.author --> 'JK Rowling'

author = 'fake name';

//book.author --> 'JK Rowling'

book.author = 'lets try again';

//book.author --> 'lets try again'


delete book.author;

//book.author --> undefined
