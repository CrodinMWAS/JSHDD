function Calculate() {
    if(capacityInput.value == ""){
        capacityInput.value = 1
    }
megabyte = parseFloat(capacityInput.value);
secmegabyte = parseFloat(range.value);
final = 0;

console.log(megabyte);
console.log(secmegabyte);

if (cbCapacity.value == 2)
{
    megabyte = parseFloat(capacityInput.value) * 1000;
}
if (cbCapacity.value == 3)
{
    megabyte = parseFloat(capacityInput.value) * 1000000;
}

if (cbSpeed.value == 1)
{
    secmegabyte = parseFloat(range.value) / 8;
}
if (cbSpeed.value == 2)
{
    secmegabyte = parseFloat(range.value) / 1000;
}
if (cbSpeed.value == 4)
{
    secmegabyte = parseFloat(range.value) * 1000;
}

final = megabyte / secmegabyte;


alert(`Its Going To Take ${final.toFixed(3)} Seconds To Ruin The HDD`);    
}