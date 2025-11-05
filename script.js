    function getFormvalue() {
      

      let first_name = document.forms["form1"]["fname"].value.trim();
      let last_name = document.forms["form1"]["lname"].value.trim();

      if (!first_name && !last_name) {
        alert("Please enter your first and last name");
        return;
      }

      alert(`${first_name} ${last_name}`.trim());
    }