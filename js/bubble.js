function Bubble()
{
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");              //Colour

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");            //Colour
                div_update(divs[j+1],div_sizes[j+1], "red");        //Colour

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");            //Height
                div_update(divs[j+1],div_sizes[j+1], "red");        //Height
            }
            div_update(divs[j],div_sizes[j], "blue");               //Colour
        }
        div_update(divs[j],div_sizes[j], "green");                  //Colour
    }
    div_update(divs[0],div_sizes[0], "green");                      //Colour

    enable_buttons();
}