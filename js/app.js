function populateNavList() {
    const navBar = document.getElementById('nav-bar');
    /*array.from property learned from: https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript */
    let sections = Array.from(document.getElementsByClassName('section'));
    for (var i of sections) {
        let content = document.getElementsByTagName('h2');
        let navItem = document.createElement("li");
        for (var y of content) {
        navItem.innerHTML = content.textContent;
        navBar.appendChild(navItem);
        }
               
    }
}