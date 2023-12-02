const hexRegex = /^([a-z0-9]{2})+$/;
const titleElement = document.querySelector('.gallview_head .title_subject');

if (!!titleElement && hexRegex.test(titleElement.innerText)) {
    // 타이틀 변환
    titleElement.innerText = decodeURIComponent(titleElement.innerText.replace(/[0-9a-f]{2}/g, '%$&'));

    // 본문 변환
    Array.from(document.querySelectorAll('.gallview_contents .write_div span'))
        .filter(elem => elem.classList.length === 0 && hexRegex.test(elem.innerText))
        .forEach(elem => elem.innerText = decodeURIComponent(elem.innerText.replace(/[0-9a-f]{2}/g, '%$&')));
}