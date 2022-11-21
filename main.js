let body = $('body');
let newDiv = $('<div>Click Here</div>')
let newUl = $('<ul></ul>')



body.append(newDiv);
body.append(newUl);

newDiv.on('click', () => {

    let inputId = $('#newInput');
    let textDisplay = $(` <li> ${inputId.val()}  </li>`)
    newDiv.append(textDisplay)


})