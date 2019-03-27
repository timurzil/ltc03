var string1 = "abcdefedcba";
var string2 = "abcde.,fe dc;ba";
var string3 = "abcdefefeeedcba";
var string4 = "abc,de.fe.dchba";
var string_clear;

string_clear = clear_char(string1,",. ;:!?");
string1 = string_clear;

string_clear = clear_char(string2,",. ;:!?");
string2 = string_clear;

string_clear = clear_char(string3,",. ;:!?");
string3 = string_clear;

string_clear = clear_char(string4,",. ;:!?");
string4 = string_clear;

console.log(string1,"  ");
if (isPalindrome(string1)) console.log("This is a palindrome");
else
    {
        console.log("This is NOT a palindrome");
    }   

console.log(string2,"  ");
if (isPalindrome(string2)) console.log("This is a palindrome");
else
    {
        console.log("This is NOT a palindrome");
    }   

console.log(string3,"  ");
if (isPalindrome(string3)) console.log("This is a palindrome");
else
    {
        console.log("This is NOT a palindrome");
    }   

console.log(string4,"  ");
if (isPalindrome(string4)) console.log("This is a palindrome");
else
    {
        console.log("This is NOT a palindrome");
    }   
    

function char_cut(string_to_cut, num_char)
{
    return string_to_cut.slice(0,num_char) + string_to_cut.slice(num_char+1);
}

function strpbrk(string_to_parse, to_del)

{
    for (var i=0, length_str = string_to_parse.length; i < length_str; ++i)
    {
        if (to_del.indexOf(string_to_parse.charAt(i)) >= 0 )
        {
            return string_to_parse.slice(i);
        }
    }
return false;
}

function clear_char(string_to_clear, to_del)
{

var position_char, sub_string;

sub_string = strpbrk(string_to_clear,to_del);
if (sub_string != false) 
    {
        position_char = string_to_clear.length - sub_string.length;
        return clear_char(char_cut(string_to_clear,position_char),to_del);

    }   
return string_to_clear;
}

function isPalindrome(input_string)
{


if  (input_string.length == 0) return true;

if (input_string.charAt(0) == input_string.charAt(input_string.length - 1))
    {
        input_string = char_cut(input_string,0);
       // console.log(input_string);
        input_string = char_cut(input_string,input_string.length-1);
        console.log(input_string);
        return isPalindrome(input_string);
    }
else    
    {
        return false;        
    }

}