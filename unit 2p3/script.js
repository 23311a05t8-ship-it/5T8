function performSearch() {
    const inputText = document.getElementById("inputText").value;
    const searchText = document.getElementById("searchText").value;
    const resultText = document.getElementById("outputText");
  
    try {
      const matches = inputText.match(new RegExp(searchText, "g"));
      resultText.value = matches ? matches.join("\n") : "No matches found";
    } catch (error) {
      resultText.value = "Invalid regular expression";
    }
  }
  
  function performReplace() {
    const inputText = document.getElementById("inputText").value;
    const searchText = document.getElementById("searchText").value;
    const replaceText = document.getElementById("replaceText").value;
    const resultText = document.getElementById("outputText");
  
    try {
      resultText.value = inputText.replace(new RegExp(searchText, "g"), replaceText);
    } catch (error) {
      resultText.value = "Invalid regular expression";
    }
  }
  
  function performFormat() {
    const inputText = document.getElementById("inputText").value;
    const resultText = document.getElementById("outputText");
  
    // Capitalize the first letter of every word
    resultText.value = inputText.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  