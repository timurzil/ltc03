let input_string_good = "55ddrt(test example(11(1)) n1)";
let input_string_bad_1 = "123456(test ex()(am(ple)(11()1)) n1)";
let input_string_bad_2 = "1123(test ex )( )a(m(ple11(1)) n1)";
let input_string_bad_3 = "12)(test ex )( ample(11(1) n1)";


console.log(input_string_good, is_there_enough_closing(input_string_good));
console.log(input_string_bad_1, is_there_enough_closing(input_string_bad_1));
console.log(input_string_bad_2, is_there_enough_closing(input_string_bad_2));
console.log(input_string_bad_3, is_there_enough_closing(input_string_bad_3));

function char_cut(string_to_cut, num_char)
{

return string_to_cut.slice(0,num_char) + string_to_cut.slice(num_char+1);

}

function is_there_enough_closing (string_with_closes)
{
    let parenthesis_open_1, parenthesis_close_1, sub_string;
    
    parenthesis_open_1 = string_with_closes.indexOf("(");
    parenthesis_close_1 = string_with_closes.indexOf(")");
        // console.log(s_begin,s_end);
        if (parenthesis_open_1 == -1 && parenthesis_close_1 == -1)
    {
        console.log("Exit 1");
        return " Correct";
    
    }
    
    else if ((parenthesis_open_1 == -1) || (parenthesis_close_1 == -1)
            || (parenthesis_close_1 < parenthesis_open_1)) 
                return " Incorrect";
        else
        {
            
            sub_string = char_cut(string_with_closes,parenthesis_open_1);
            parenthesis_close_1 = sub_string.indexOf(")");
            sub_string = char_cut(sub_string,parenthesis_close_1);
    
            console.log(sub_string);
            return is_there_enough_closing(sub_string);               
        }
    
 
}
