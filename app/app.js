(()=>{
    // 定数の定義
    const $doc = document;
   // const $top = $doc.getElementById("js-top");
    const $nav = $doc.getElementById("js-nav");
    const $tab = $doc.getElementById("js-tab");
    const $tabItem = $tab.querySelectorAll("[data-tab]");
    const $main = $doc.getElementById("js-main");
    const $content = $main.querySelectorAll("[data-content]");

    //初期化
    const init = () => {
        $content[0].style.display = "block";
    };
    init();

    // クリックでタブを表示する
    $nav.addEventListener("click",((e) => {
        e.preventDefault();
        $tab.classList.toggle("mask");
    }));

    // クリックでクラスリセットとACTクラスを追加する
    const handleClick = (e) => {
        e.preventDefault();

        const $this =e.target;
        const targetVar = $this.dataset.tab;

        let index = 0;
        while(index < $tabItem.length){
            $content[index].style.display ="none";
            $tabItem[index].classList.remove("is-active");
            index++;
        };

        $main.querySelectorAll('[data-content="' + targetVar + '"]')[0].style.display = "block";
        $tabItem[targetVar].classList.add("is-active");
    };


    let index = 0;
    while(index < $tabItem.length){
        $tabItem[index].addEventListener("click", (e) => handleClick(e));
        index++;
    }
    
})();