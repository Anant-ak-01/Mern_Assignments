let dob = prompt("Enter Your Date Of Birth DD-MM-YYYY")
month=dob.slice(3,5)
date=dob.slice(0,2)
let zodiac_sign;
let energy;
if((date>=21 && month=="03" && date<=31) || (date<=19 && month=="04" && date<=30)){
    zodiac_sign="♈ Aries"
}
else if ((date>=20 && month=="04" && date<=30) || (date<=20 && month=="05" && date<=31)){
    zodiac_sign="♉ Taurus"
}
else if ((date>=21 && month=="05" && date<=31) || (date<=20 && month=="06" && date<=30)){
    zodiac_sign="♊ Gemini"
}
else if ((date>=21 && month=="06" && date<=30) || (date<=22 && month=="07" && date<=31)){
    zodiac_sign="♋ Cancer"
}
else if ((date>=23 && month=="07" && date<=31) || (date<=22 && month=="08" && date<=31)){
    zodiac_sign="♌ Leo"
}
else if ((date>=23 && month=="08" && date<=31) || (date<=22 && month=="09" && date<=30)){
    zodiac_sign="♍ Virgo"
}
else if ((date>=23 && month=="09" && date<=30) || (date<=22 && month=="10" && date<=31)){
    zodiac_sign="♎ Libra"
}
else if ((date>=23 && month=="10" && date<=31) || (date<=21 && month=="11" && date<=30)){
    zodiac_sign="♏ Scorpio"
}
else if ((date>=22 && month=="11" && date<=30) || (date<=21 && month=="12" && date<=31)){
    zodiac_sign="♐ Sagittarius"
}
else if ((date>=22 && month=="12" && date<=31) || (date<=19 && month=="01" && date<=31)){
    zodiac_sign="♑ Capricorn"
}
else if ((date>=20 && month=="01" && date<=31) || (date<=18 && month=="02" && date<=29)){
    zodiac_sign="♒ Aquarius"
}
else if ((date>=19 && month=="02" && date<=29) || (date<=20 && month=="03" && date<=31)){
    zodiac_sign="♓ Pisces"
}
else{
   document.write("Date Format Not Supported Use DD-MM-YYYY")
}

document.write(`Your Zodiac Sign : ${zodiac_sign}`)

if(zodiac_sign=="♈ Aries" || zodiac_sign=="♌ Leo" || zodiac_sign=="♐ Sagittarius"){
    energy = "Fire"
}
else if(zodiac_sign=="♉ Taurus" || zodiac_sign=="♍ Virgo" || zodiac_sign=="♑ Capricorn"){
    energy = "Earth"
}
else if(zodiac_sign=="♊ Gemini" || zodiac_sign=="♎ Libra" || zodiac_sign=="♒ Aquarius"){
    energy = "Air"
}
else if(zodiac_sign=="♋ Cancer" || zodiac_sign=="♏ Scorpio" || zodiac_sign=="♓ Pisces"){
    energy = "Water"
}
else{
    document.write(`Invalid Date Format`)
}
document.write(`<br>Your Zodiac Category : ${energy}`)