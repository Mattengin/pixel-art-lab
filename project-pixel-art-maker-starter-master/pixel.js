const tbl = document.getElementById("pixel_canvas");

// function that restarts based on inputs

document.getElementById("sub").addEventListener("click", function() {

    //clears grid then rests
    
  tbl.innerHTML = "";
    
    //pick width and height variable 

  const w = document.getElementById("input_width").value;

  const h = document.getElementById("input_height").value;
    
    // use width and/or height to make a grid

  for (let i = 0; i < h; i++) {
    const rows = document.createElement("tr");

    let j = 0;

    while (j < w) {
      const cells = document.createElement("td");

      j++;

      rows.appendChild(cells);
    }

    tbl.appendChild(rows);
  }
  associateCellEvents();
});

//use changecolour func on blocks

const associateCellEvents = () => {
  for (let i = 0; i < tbl.rows.length; i++) {
    for (let j = 0; j < tbl.rows[i].cells.length; j++)
      tbl.rows[i].cells[j].onclick = function() {
        changeColour(this);
      };
  }
};

const changeColour = cell => {
  const colour = document.getElementById("colorPicker").value;

  cell.style.backgroundColor = colour;
};

const validateForm = () => {
  return false;
};

