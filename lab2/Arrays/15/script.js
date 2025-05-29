let booksByAuthors = {
    "Пушкин": ["Евгений Онегин", "Александр Сергеевич Пушкин"],
    "Есенин": ["Собрание стихотворений", "Истоки"],
    "Данцова": ["Книга о любви"]
};

function DisplayBooks(booksByAuthors) {
    for (let author in booksByAuthors) {
        console.log(`Автор: ${author}`);
        console.log("Книги:");
        booksByAuthors[author].forEach(book => {
            console.log(`- ${book}`);
        });
        console.log("-=-=-=-=-=-=-=-=-=-=-");
    }
}

function FifteenDisplayInfo() {
    console.log("\nПятнадцатое задание");
    DisplayBooks(booksByAuthors);
}