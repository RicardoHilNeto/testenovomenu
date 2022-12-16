const fix=document.getElementsByTagName("fix")[0];
const topoFix=fix.offsetTop;

window.onscroll=function(){
    fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= topoHeader) {
        fix.classList.add("FixoNoTopo");
    }else{
        fix.classList.remove("FixoNoTopo")
    }
}