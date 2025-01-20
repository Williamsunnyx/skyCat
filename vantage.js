

document.getElementById('button').addEventListener('click',
    dropdownToggle);

function dropdown() {
    const dropdown=document.getElementById('dropdown');

    if (dropdown.style.display === 'block') {
        dropdown.style.display ='none';
    } else {
        dropdown.style.display ='block';
    }
    }


// const listItems = document.querySelectorAll('.list-item');
// const imageBox = document.querySelector('.image-box');
// const image = document.querySelector('.image');

// listItems.forEach((listItem) => 
//     {
// listItem.addEventListener('mouseover', () =>
// {
//     const imageUrl = 
//     listItem.getAttribute('data-image');
//     image.src = imageUrl;
// });
// });

function img1() {
    document.getElementById('img1').style.display='block'
}
