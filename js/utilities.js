function getInputFieldValueById (id){
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}

function getTextFieldValueById (id){
    const input = document.getElementById(id).innerText;
    const inputNumber = parseFloat(input);
    return inputNumber;
}

function showSelectionById(id){
    document.getElementById('donation-card').classList.add('hidden');
    document.getElementById('history-added').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden') ;
}

function colorSolve(id){
    document.getElementById('show-donation-btn').classList.remove('bg-btnColor', 'hover:bg-lime-200');
    document.getElementById('show-history-btn').classList.remove('bg-btnColor', 'hover:bg-lime-200');


    document.getElementById(id).classList.add('bg-btnColor', 'hover:bg-lime-200');
}