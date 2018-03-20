pragma solidity ^0.4.18;

/**
 * The Books contract does this and that...
 */
contract Books {

	bytes16[] public bookTitles;
	mapping (bytes16 => BookInformation) books;

    struct BookInformation {
        bytes16 author;
        bytes16 language;
    }

	function setBook(bytes16 title, bytes16 _author, bytes16 _language) public {
        var book = books[title];
        book.author = _author;
        book.language = _language;
        
        bookTitles.push(title);
    }

    function getBooksCount() public constant returns(uint) {
        return bookTitles.length;
    }
}

