const body = document.body;

function toggleTheme(){
    if (body.getAttribute('class') == 'light-mode') {
        body.setAttribute('class', 'dark-mode');
    }else if(body.getAttribute('class') == 'dark-mode'){
        console.log('utygfkjhgjlhgjhgj')
        body.setAttribute('class', 'light-mode');
    }
}