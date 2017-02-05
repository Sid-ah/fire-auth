$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyAzAwOIgpMa__UKGXxI7TVznVOcxcX8r8M",
    authDomain: "int-sid.firebaseapp.com",
    databaseURL: "https://int-sid.firebaseio.com",
    storageBucket: "int-sid.appspot.com",
    messagingSenderId: "804643232028"
  };
  firebase.initializeApp(config);

  // GET Element by id
  const email = document.getElementById('txtEmail')
  const password = document.getElementById('txtPassword')
  const btnSignup = document.getElementById('btnSignup')
  const btnLogin = document.getElementById('btnLogin')

  // btnSignup.addEventListener('click', e => {
  //
  // });

  btnLogin.addEventListener('click', e => {
    e.preventDefault()
    const pass =  txtPassword.value
    const email = txtEmail.value
    // debugger;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
  })

  btnSignup.addEventListener('click', e => {
    e.preventDefault()
    const pass =  txtPassword.value
    const email = txtEmail.value
    // debugger;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    // promise.catch(e => console.log(e.message))
    promise
          // .then(user => console.log(user))
          .catch(e => console.log(e.message))
  })

  btnLogout.addEventListener('click', e => {
    firebase.auth().signout();
  })

  firebase.auth().onAuthStatechange(firebaeUser => {
    if (firebaseUser) {
      console.log(firebaseUser)
      btnLogout.show()
      btnSignup.hide()
      btnLogin.hide()
    } else {
      btnLogout.hide()
      console.log('not logged in')
    }
  })
});
