function rfoSet() {
    let rfo = document.getElementById('rfoReady').alt;
    console.log(rfo);
    if (rfo == "Yes") {
        $("#rfoReady").removeClass('d-none');
    }
}
setTimeout(rfoSet, 4000)