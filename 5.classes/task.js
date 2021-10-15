class PrintEditionItem {

	constructor(name, releaseDate ,pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
	    this.type = null;
	}

	fix() {
		return this.state = 100;
	}

	set state(state) {
		if(state < 0) {
			this._state = 0;
		} else if (state >100) {
			this._state = 100 
		} else {
			this._state = state
		}
	}

	get state() {
		return this._state;
	}
}


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate ,pagesCount) {
		super(name, releaseDate ,pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate ,pagesCount) {
		super(name, releaseDate ,pagesCount);
		this.author = author;
		this.type = 'book';
	}	
}

class  NovelBook extends Book {
	constructor(name, releaseDate ,pagesCount, author) {
		super(name, releaseDate ,pagesCount, author);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate ,pagesCount, author) {
		super(name, releaseDate ,pagesCount, author);
		this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
	constructor(name, releaseDate ,pagesCount, author) {
		super(name, releaseDate ,pagesCount, author);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
	    this.books = [];
	}

	addBook(book) {
		if(book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
    for(let i = 0; i < this.books.length; i++) {
      let obj = this.books[i];
      for(let prop in obj) {
        if(type === prop && value === obj[prop]) {
          return obj;
        }
      }
    }
    return null; 
  }

  giveBookByName(bookName) {
  	for(let i = 0; i < this.books.length; i++) {
      let obj = this.books[i];
      for(let prop in obj) {
        if(bookName === obj[prop]) {
          this.books.splice(i);
          return obj;     
        }
      }
    } 
    return null;
 } 
}
