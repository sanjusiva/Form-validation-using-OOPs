class Form_Validation{
        constructor(firstName,lastName,phoneNo,mailId,Date_of_birth){
            this.firstName = firstName;
            this.lastName =lastName;
            this.phoneNo = phoneNo;
            this.maildId = mailId;
            this.Date_of_birth = Date_of_birth;
    }
    validatingFistName()
    {
      if(firstName.value.length===0){
          document.getElementById("fnameErrMsg").innerHTML="First Name cannot be null";
        }
        else if(!conditionCheck.lengthCheck(firstName.value)){
            document.getElementById("fnameErrMsg").innerHTML="First Name cannot be too short";
        }
        else if(!conditionCheck.alphaPatternCheck(firstName.value))
        {
          document.getElementById("fnameErrMsg").innerHTML="Fist Name must be ony alphabets ";
        }
        else if(conditionCheck.alphaPatternCheck){
          document.getElementById("fnameErrMsg").innerHTML=" ";
        }
    }
    validatingLastName()
    {
      if(lastName.value.length===0){
        document.getElementById("lnameErrMsg").innerHTML="Last Name cannot be null";
      }

      else if(!conditionCheck.alphaPatternCheck(lastName.value))
        {
          document.getElementById("lnameErrMsg").innerHTML="Fist Name must be ony alphabets ";
        }
        else if(conditionCheck.alphaPatternCheck){
          document.getElementById("lnameErrMsg").innerHTML=" ";
        }
    }
    validatingMailId()
    {
      if(mailId.value.length===0){
          document.getElementById("emailErrMsg").innerHTML="Cannot ommit this field";
        }
      else if(!conditionCheck.alphaNumericPatternCheck(mailId.value))
      {
        document.getElementById("emailErrMsg").innerHTML="Mail Id should be in proper format.eg:'example@gmail.com' or 'example@abc.co.in'";
      }
      else if(conditionCheck.alphaNumericPatternCheck(mailId.value))
      {
        document.getElementById("emailErrMsg").innerHTML=" ";
      }
    }
    validatingDateOfBirth()
    {
      if(conditionCheck.calculateAge()>=18 && conditionCheck.calculateAge()<=60)
      {
        document.getElementById("age").innerHTML="Your age is "+conditionCheck.calculateAge()+" .You are eligible";
      }
      else if(conditionCheck.calculateAge()<18 && conditionCheck.calculateAge()>=0)
      {
        document.getElementById("age").innerHTML="Your age is "+conditionCheck.calculateAge()+" ,which is less than 18.You are not eligible";
      }
      else if(conditionCheck.calculateAge()<0)
      {
        document.getElementById("age").innerHTML="Future dates are not accepted. Please enter correct date of birth"
      }
    }
    validatingPhoneNumber()
    {
      if(!conditionCheck.numericPatternCheck(phoneNo.value))
      {
        document.getElementById("phoneErrMsg").innerHTML="Entered phone number is incorrect.<br>Please ensure the given phone number is in 10 digit<br>First digit of the phone number should be either 6,7,8,9";
      }
      else if(conditionCheck.numericPatternCheck(phoneNo.value))
      {
        document.getElementById("phoneErrMsg").innerHTML=" ";
      }
    }
  }
  class ConditionCheck extends Form_Validation
  {
  lengthCheck(input)
  {
    var lengthOfInput=input.length;
        if(lengthOfInput<=2){
          return false;
        }
        else 
          return true;
  }
  alphaPatternCheck(input)
  {
    var alphaFormat=/\d/;
    if (alphaFormat.test(input)) {
      return false;
    }
    else if(alphaFormat.test(input)==false)
    {
      return true;
    }
  }
  alphaNumericPatternCheck(input)
  {
    var alphaNumericFormat=/([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
    if (alphaNumericFormat.test(input)==false) {
      return false;
    }
    else if(alphaNumericFormat.test(input))
    {
      return true;
    }
  }
numericPatternCheck(input)
{
  var numericFormat=/^[6-9]\d{9}$/;
  if(numericFormat.test(input)==false){
    return false;
  }
  else if(numericFormat.test(input))
  {
    return true;
  }

}
calculateAge()
{
  var birthDay = document.getElementById("dob").value;
  var birthDate=new Date(birthDay);
  var birth_date = birthDate.getDate();
  var birth_month=(birthDate.getMonth())+1;
  var birth_year=birthDate.getFullYear();

  /*console.log(birth_date);
  console.log(birth_month);
  console.log(birth_year);*/
  
  var today_day = new Date();
  var today_date = today_day.getDate();
  var today_month = (today_day.getMonth())+1;
  var today_year = today_day.getFullYear();
  /*console.log(today_date);
  console.log(today_month);
  console.log(today_year);*/
  
  var calculatedAge=0;
  
  if (today_month> birth_month)
    calculatedAge = today_year - birth_year;
  else if (today_month == birth_month)
 {
  if (today_date >= birth_date) 
    calculatedAge = today_year - birth_year;
  else calculatedAge = today_year - birth_year - 1;
  }
    else calculatedAge = today_year - birth_year - 1;
    return calculatedAge;
}

  }
    var firstName=document.getElementById("fname");
    var lastName=document.getElementById("lname");
    var phoneNo =document.getElementById("phoneno");
    var mailId=document.getElementById("email");
    var Date_of_birth = document.getElementById("dob");
   
    var object = new Form_Validation(firstName,lastName,phoneNo,mailId,Date_of_birth);

    firstName.addEventListener("blur",object.validatingFistName);
    lastName.addEventListener("blur",object.validatingLastName);
    phoneNo.addEventListener("blur",object.validatingPhoneNumber);
    mailId.addEventListener("blur",object.validatingMailId);
    
    var conditionCheck = new ConditionCheck();