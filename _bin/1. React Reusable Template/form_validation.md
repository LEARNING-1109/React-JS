[Notes 1 : Apna College 🔗](<https://github.com/All-CODE-with-Explanation/Web-Development-Learning/tree/main/REACT%20JS%20(Learning)>)

[Notes 2 Link : Tech Gun 🔗](<https://github.com/All-CODE-with-Explanation/Web-Development-Learning/tree/main/REACT%20JS%20(Learning)/Tech%20Gun%20(React%20JS)>)

## [Notes 3 Link : Form Validation using JS 👇]

Note :- For more explanation to form validation

Refer to the Code With harry form validation tutorial. ✅

---

# HTML Content of Form Validation :

```html
<form action="/login.html" name="myForm" onsubmit="return validateForm()" method="post">

    <div class="mb-3 " id="name">
        <label for="fname">First Name</label>
        <input type="text" name="fname" class="form-control form-design"  />
        <span class="form_error"></span> <!-- 🔓 -->
    </div>

    <input type="submit" value="submit" class="btn btn-primary" />

    </form>
```

## JS file content :- 👇

```js
function setError(id, error_msg) {
  element = document.getElementById(id);
  element.getElementsByClassName("form_error")[0].innerHTML = error_msg;
}

function clearErrors() {
  errors = document.getElementsByClassName("form_error");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function validateForm() {
  var returnVal = false;

  // 👇 If error is display once then after writing correct value it don't clears the span field
  // To Solve this error we have created a separate clearErrors() function
  clearErrors();

    // in the square brackett we add [name_attribute_of_form_tag][name_attribute_of_form_input_element]
  var name = document.forms["myForm"]["fname"].value;
  // console.log(name);
  if (name.length < 5) {
    setError("name", "*Length of Name can't be NULL");
    returnVal = false;
  }


  return returnVal;
}

```



