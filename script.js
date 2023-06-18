
let ol = document.getElementById("infi-list");


ol.addEventListener("scroll", function(){
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    
    let lastEleInd = ol.children[ol.children.length-1];
    let itemno = lastEleInd.textContent.split(' ');
    let lastno = parseInt(itemno[1]);
    let curno = lastno + 1;
    let nextno = curno + 1;
    
    li1.textContent = `Item ${curno}`;
    li2.textContent = `Item ${nextno}`;

    ol.appendChild(li1);
    ol.appendChild(li2);   

})
