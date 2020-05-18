function populateNavList() {
    const navBar = document.querySelector('.navBar')
    /*array.from property learned from: https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript */
    const sections = Array.from(document.querySelectorAll('.section'));
    sections.forEach(function (item) {
        const navItem = document.createElement('li');
        const navContent = document.querySelector('h2')
        navItem.innerHTML = navContent;
        navBar.appendChild(navItem);
    })

}

populateNavList();