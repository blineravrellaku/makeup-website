function kontrolloFormen(event) {
  const emri = document.getElementById("name").value.trim();
  const emaili = document.getElementById("email").value.trim();
  const mesazhi = document.getElementById("message").value.trim();

  if (emri === "" || emaili === "" || mesazhi === "") {
    alert("Ju lutem plotësoni të gjitha fushat para se të dërgoni mesazhin.");
    event.preventDefault(); // Ndalo dërgimin e formës
    return false;
  }

  alert("Faleminderit për mesazhin tuaj!");
  return true;
}
