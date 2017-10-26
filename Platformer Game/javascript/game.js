function Level(plan)
{
  this.width = plan[0].length;
  this.height = plan.length;

  this.grid = [];
  //loop through each row in plan, creating an array in grid
  //height
  for (var y = 0; y < this.height; y++)
  {
    var line = plan[y], gridLine = [];
    //loop through each array elementin the inner array for the type of tile
    //width
    for( var x = 0; x < this.width; x++)
    {
      //get the type from the character in the string.  It can be
      // 'x' , '!', or ' '
      // if the character is  ' '
      var ch = line[x], fieldType = null;

      if (ch == 'x')
      {
        fieldType = 'wall';
      }
      else if (ch == '!')
      {
        fieldType = 'lava';
      }
      else if (ch == 'y')
      {
        fieldType = 'floater';
      }
      else if (ch == '@')
      {
        fieldType = 'user';
      }
      else if (ch == 'o')
      {
        fieldType = 'coin';
      }
      // push the fieldType into the gridLine array (at the end)
      gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }
}
function elt(name, className)
{
    var elt = document.createElement(name);
    if (className)
    {
        elt.className = className;
    }
    return elt;
}

function DOMDisplay(parent, level)
{
  this.wrap = parent.appendChild(elt('div', 'game'));
  this.level = level;

  this.wrap.appendChild(this.drawBackground());
}
//global
var scale = 20;
DOMDisplay.prototype.drawBackground = function()
{
    var table = elt('table', 'background');
    table.style.width = this.level.width * scale + 'px';

    //assign a class to new row element directly form the string
    //from each tile in grid
    for (var i = 0; i < this.level.grid.length; i++)
    {
      var rowElt = table.appendChild(elt('tr'));
      rowElt.style.height = scale + 'px';
      for (var j = 0; j < this.level.grid[i].length; j++)
      {
        rowElt.appendChild(elt('td', this.level.grid[i][j]));
      }
    }
    return table;
}

function runLevel(level, Display)
{
  var display = new Display(document.body, level);
}

function runGame(plans, Display){
  function startLevel(n)
  {
    //create an new level using the nth element in array plans
    runLevel(new Level(plans[n]), Display);
  }
  startLevel(0);
}
