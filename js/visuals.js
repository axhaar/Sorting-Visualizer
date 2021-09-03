var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
}