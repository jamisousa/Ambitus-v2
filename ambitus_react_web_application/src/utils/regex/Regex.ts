export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  
 //at least 1 letter and 1 number
 export const validPassword = new RegExp(".{5,}");

 //name and last name must start with a uppercase
 //needs to be separate with a blank space
 export const validName = new RegExp("^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$");