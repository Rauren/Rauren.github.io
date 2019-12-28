ToggleStyleSheet();
ToggleStyleSheet();

function ToggleStyleSheet()
{
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    Toggle = localStorage.getItem("Toggle")
    if(Toggle == null || Toggle == "1")
    {
      localStorage.setItem("Toggle", "0");
    }
    else
    {
      localStorage.setItem("Toggle", "1");
    }
    if (Toggle == "0")
    {
      links[0].disabled = false;
      links[1].disabled = true;
    }
    else
    {
      links[0].disabled = true;
      links[1].disabled = false;
    }    
  }