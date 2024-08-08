function calculateAge() { 
    var birthdate = document.getElementById('birthdate').value; 
    var birthdateObj = new Date(birthdate); 
    var currentDate = new Date(); 
 
    // Calculate age in years 
    var ageInYears = currentDate.getFullYear() - birthdateObj.getFullYear(); 
    var birthMonth = birthdateObj.getMonth(); 
    var currentMonth = currentDate.getMonth(); 
 
    // Adjust age if birthday hasn't occurred yet this year 
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() 
< birthdateObj.getDate())) { 
        ageInYears--; 
    } 
 
    // Calculate age in months 
    var ageInMonths = (currentDate.getMonth() - birthdateObj.getMonth()) + (12 * 
(currentDate.getFullYear() - birthdateObj.getFullYear())); 
    if (currentDate.getDate() < birthdateObj.getDate()) { 
        ageInMonths--; 
    } 
 
    // Calculate age in days 
    var ageInDays = Math.floor((currentDate - birthdateObj) / (1000 * 60 * 60 * 24)); 
 
    // Calculate age in hours 
    var ageInHours = Math.floor((currentDate - birthdateObj) / (1000 * 60 * 60)); 
 
    var result = `Ha vivido aproximadamente:<br> 
                  ${ageInYears} años,<br> 
                  ${ageInMonths} meses,<br> 
${ageInDays} días,<br> 
${ageInHours} horas.`; 
document.getElementById('result').innerHTML = result; 
}