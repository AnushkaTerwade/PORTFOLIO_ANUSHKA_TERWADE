AOS.init({ disable: window.innerWidth < 768 });

// Collapse section 

function toggleCollapse(collapseId) {
  var collapseContent = document.getElementById(collapseId);

  // Hide all other collapse items
  var allCollapseItems = document.querySelectorAll('.collapse-content');
  allCollapseItems.forEach(function (item) {
    if (item.id !== collapseId) {
      item.style.display = 'none';
    }
  });

  // Toggle display of the clicked collapse item
  if (collapseContent.style.display === 'block') {
    collapseContent.style.display = 'none';
  } else {
    collapseContent.style.display = 'block';
  }
}


// To Top Button

let topbtn = document.getElementById("topbtn");
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

function handleOnClick() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// get year dynamically

document.getElementById('year').innerHTML = new Date().getFullYear();


// form validation

$("#commonform").validate();
jQuery('.numbersOnly').keyup(function () {
  this.value = this.value.replace(/[^0-9\.]/, '');
});

