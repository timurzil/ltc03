let input_string_good = "55ddrt(test example(11(1)) n1)";
let input_string_bad_1 = "123456(test ex()(am(ple)(11()1)) n1)";
let input_string_bad_2 = "1123(test ex )( am(ple11(1)) n1)";
let input_string_bad_3 = "12)(test ex )( ample(11(1) n1)";


console.log(input_string_good, is_there_enough_closing(input_string_good));
console.log(input_string_bad_1, is_there_enough_closing(input_string_bad_1));
console.log(input_string_bad_2, is_there_enough_closing(input_string_bad_2));
console.log(input_string_bad_3, is_there_enough_closing(input_string_bad_3));

function is_there_enough_closing (string_with_closes)
{
    let parenthesis_open_1, parenthesis_close_end, sub_string;
    let parenthesis_open_2, parenthesis_close_1;
    let parenthesis_open_end, parenthesis_close_before_end;
    parenthesis_open_1 = string_with_closes.indexOf("(");
    parenthesis_close_end = string_with_closes.lastIndexOf(")");
   
    // console.log(s_begin,s_end);
    if (parenthesis_open_1 == -1 && parenthesis_close_end == -1)
    {
        console.log("Exit 1");
        return " Correct";
    
    }
    
    else if ((parenthesis_open_1 == -1) || (parenthesis_close_end == -1)) 
            return " Incorrect";
        else
        {
            sub_string = string_with_closes.substring
                    (parenthesis_open_1+1,string_with_closes.length);
            
            parenthesis_open_2 = sub_string.indexOf("(");
            parenthesis_close_1 = sub_string.indexOf(")");
            if (parenthesis_close_1 < parenthesis_open_2 && 
                parenthesis_open_2 != -1 && parenthesis_close_1 != -1) 
                    parenthesis_open_1 = parenthesis_open_2 +
                    string_with_closes.length - sub_string.length;

                    sub_string = string_with_closes.substring
                    (1,parenthesis_close_end);
           
            parenthesis_open_end = sub_string.lastIndexOf("(");
            parenthesis_close_before_end = sub_string.lastIndexOf(")");
            if (parenthesis_close_before_end < parenthesis_open_end && 
                parenthesis_open_end != -1 && parenthesis_close_before_end != -1) 
                    parenthesis_close_end = parenthesis_close_before_end;

            sub_string = string_with_closes.substring
                   (parenthesis_open_1+1,parenthesis_close_end);
            console.log(sub_string);
            return is_there_enough_closing(sub_string);               
        }
    
 
}