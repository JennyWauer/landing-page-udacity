/*Function to populate Navigation Bar */
function populateNavList() {
    const navBar = document.querySelector('.navBar')
    /*array.from property learned from: https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript */
    /*function assisted by html documentation at: https://www.w3schools.com/jsref/met_document_createelement.asp */
    const sections = Array.from(document.querySelectorAll('.section'));
    sections.forEach(function (item) {
        const navItem = document.createElement('li');
        const navContent = document.querySelector('h2')
        navItem.innerHTML = navContent;
        navBar.appendChild(navItem);
    })

}

populateNavList();