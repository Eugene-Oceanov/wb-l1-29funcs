class Book {
    constructor(title,author,year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
    
    changeTitle(title) {
      this.title = title;
    }
    
    changeAuthor(author) {
      this.author = author;
    }
    
    changeYear(year) {
      this.year = year;
    }
  }