

function checkCode4() {
    var code4 = document.getElementById("code4").value;
    var message4 = document.getElementById("message4");
    var inputArea = document.getElementById("inputArea4");

    if (code4 == "TIME") {
      message4.innerHTML = "1 day left. <b> The fourth number is 7 </b>. <br>You’ve completed all the puzzles for today, come back tomorrow!";
      inputArea.style.display = "none";
      egg.style.display = "none";
    } else if (code4 == "SPRING") {
      message4.innerHTML = "1 day left. <b> The fourth number is 9 </b>. <br>You’ve completed all the puzzles for today, come back tomorrow!";
      inputArea.style.display = "none";
      egg.style.display = "none";
    } else {
      message4.innerHTML = "Incorrect sequence, please try again.";
    }
  }


function checkCode3() {
    var code3 = document.getElementById("code3").value;
    var message3 = document.getElementById("message3");
    var inputArea = document.getElementById("inputArea3");

    if (code3 == "29THD03") {
      message3.innerHTML = "2 days left. <b> The third number is 1 </b>. <br>You’ve completed all the puzzles for today, come back tomorrow!";
      inputArea.style.display = "none";
      egg.style.display = "none";
    } else if (code3 == "29THD8W") {
      message3.innerHTML = "2 days left. <b> The third number is 2 </b>. <br>You’ve completed all the puzzles for today, come back tomorrow!";
      inputArea.style.display = "none";
      egg.style.display = "none";
    } else {
      message3.innerHTML = "Incorrect sequence, please try again.";
    }
  }

function checkCode2() {
    var code2 = document.getElementById("code2").value;
    var message2 = document.getElementById("message2");
    var inputArea = document.getElementById("inputArea2");

    if (code2 == "hounbecal") {
      message2.innerHTML = "3 days left. <b> The second number is 4 </b>. <br>You’ve completed all the puzzles for today, come back tomorrow!";
      inputArea.style.display = "none";
      egg.style.display = "none";
    } else {
      message2.innerHTML = "Incorrect sequence, please try again.";
    }
  }

  function checkCode1() {
    var code1 = document.getElementById("code1").value;
    var message1 = document.getElementById("message1");
    var inputArea1 = document.getElementById("inputArea1");

    if (code1 == "132") {
      message1.innerHTML = "4 days left. <b> The first number is 9 </b>. <br>You’ve completed all the puzzles for today, come back tomorrow!";
      inputArea1.style.display = "none";
      egg.style.display = "none";
    } else {
      message1.innerHTML = "Incorrect sequence, please try again.";
    }
  }

