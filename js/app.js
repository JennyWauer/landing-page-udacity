function populateNavList() {
    const navBar = document.getElementById('nav-bar');
    /*array.from property learned from: https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript */
    let sections = Array.from(document.getElementsByClassName('section'));
    for (var i of sections) {
        var navItem = document.createElement("li");
        navItem.innerHTML = sections[i].textContent;
        navItem.appendChild(navItem);
               
    }
}