function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
document.getElementById("randomNumberGenerator").addEventListener('click',function()
{
    var min =1;
    var max =100;

    var randomNumber =randomNumberGenerator(min,max);

    document.getElementById("result").textContent =randomNumber;
});