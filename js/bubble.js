function Bubble()
{
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");
            }
        }
    }
}