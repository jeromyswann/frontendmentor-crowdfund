window.onload = function() {
    console.log('Loaded');
    var dollarsBacked = 89914;
    var totalBackers = 5007;
    var daysLeft = 56;
    var progressBarWidth = `${89914.0 / 100000.0 * 100}%`;
    document.getElementById('progressBarInner').style.width = progressBarWidth;

    var elements = document.getElementsByClassName('select-reward-button');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', openModal);
    }
    elements = document.getElementsByClassName('back-project-button');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', openModal);
    }
    document.getElementById('closeModal').addEventListener('click', closeModal);
    elements = document.getElementsByClassName('continue-button');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', openSuccessModal);
    }
    document.getElementById('closeSuccessModal').addEventListener('click', closeModal);
};

function openModal(event) {
    document.getElementById('selectModal').classList.remove('hidden'); 
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    var optionToSelect = event.target.dataset.radiooption;
    console.log(optionToSelect);
    if (optionToSelect != null)
        document.getElementById(optionToSelect).checked = true;
}

function closeModal(event) {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    var elements = document.getElementsByClassName('modal-container');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
}

function openSuccessModal(event) {
    closeModal(event);
    document.getElementById('successModal').classList.remove('hidden');
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
}
