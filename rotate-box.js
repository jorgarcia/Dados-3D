var init = function() {
  var box = document.querySelector('.contenedor2').children[0],
      showPanelButtons = document.querySelectorAll('#botones button'),
      panelClassName = 'show-frente',

      onButtonClick = function( event )
      {
        box.removeClassName( panelClassName );
        panelClassName = event.target.className
        box.addClassName( panelClassName );
      };




  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
  document.getElementById('toggle-backface-visibility').addEventListener( 'click', function()
  {
    box.toggleClassName('panels-backface-invisible');
  }, false);
  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);


function lanzar()

{
    var randomdice=Math.round(Math.random()*5)
    var randomdice2=Math.round(Math.random()*5)
    var cubo = document.getElementById('cubo');
    var cubo2 = document.getElementById('cubo2');

    if (randomdice == 1)
    {
      cubo.className="show-frente";
    }

    else if (randomdice == 2)
    {
      cubo.className="show-respaldo";
    }

    else if (randomdice == 3)
    {
      cubo.className="show-derecha";
    }

    else if (randomdice == 4)
    {
      cubo.className="show-izquierda";
    }

    else if (randomdice == 5)
    {
      cubo.className="show-arriba";
    }

    else
    {
      cubo.className="show-debajo";  
    }    

    if (randomdice2 == 1)
    {
      cubo2.className = "show-frentew"
    }

    else if (randomdice2 == 2)
    {
       cubo2.className = "show-respaldo";
    }

     else if (randomdice2 == 3)
     {
        cubo2.className = "show-derecha";
     }

     else if (randomdice2 == 4)
     {
       cubo2.className = "show-izquierda";
     }

     else if (randomdice2 == 5)
     {
       cubo2.className = "show-arriba";
     }

     else 
     {
       cubo2.className = "show-debajo";
     }
}


