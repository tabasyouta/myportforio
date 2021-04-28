console.log("Hello World");

(() => {
    const $doc = document;
    const $nav = $doc.getElementById("js-nav");
    const $tab = $doc.getElementById("js-tab");
        $nav.addEventListener("click",function(){
            $tab.querySelectorAll("[data-tab]");
            $tab.style.display = "block";
            console.log($tab);
        });

})();