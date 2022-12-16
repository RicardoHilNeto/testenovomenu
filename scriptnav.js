const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll=function(){
    fixarNavNoTopo();
}

function fixarNavNoTopo(){
    if(window.pageYOffset >= topoNav) {
        nav.classList.add("FixaNavTopo");
    }else{
        nav.classList.remove("FixaNavTopo")
    }
}