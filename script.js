console.log('hello!');

 

function jsFunctionTogetFormValues(event) {

  const form = new FormData(event.target);

  if (form.get('Name') === '') {

    alert('Name is required');

    return false;

  }

  console.log(form.get('name'));

  console.log(form.get('password'));

  console.log(form.get('email'));

  console.log(form.get('telephone'));

  console.log(form.get('terms'));

  console.log(form.get('gender'));

  console.log(form.get('address'));

  return false;

}

function myFunction() {

  document.getElementById('demo').innerHTML = 'Learn more!!';

}

//function myFunction() {

// document.getElementById('demo').style.backgroundColor = 'red';

//}