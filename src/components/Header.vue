<template>
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="../assets/wish-logo-800.png" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link to="/user-settings">
              <i class="fa fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/wish-list">
              <i class="fa fa-heart"></i>
              <span id="nav-not"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/shopping-cart">
              <i class="fa fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
// set little red dot above icons nav
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input'); 
  let notif = document.getElementById('nav-not');

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => { 
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()){
      // console.log('true');
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // console.log('false');
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }
  
  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener('click', setNotif);
});

  export default {
      name:'Header'
  }

</script>
