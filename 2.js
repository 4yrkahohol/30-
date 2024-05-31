function knopka(){
    let items = document.querySelectorAll('#itemList li');
    let inputs = document.getElementById('filterInput')
    console.log(items)
    items.forEach(item => {
        if (item.textContent.includes(inputs.value)) {
            console.log('1')
            item.style.display = ''
        }
        else{
            item.style.display = 'none'
        }
    })
}
