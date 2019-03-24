#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* cut_symb(char str1[255], int numsymb)

{
memmove(&str1[numsymb],&str1[numsymb + 1],strlen(str1) - numsymb);
// printf("%s\n",str1);
return str1;
}

char* clearchar(char* str1, char to_del[255])

{
int pos;
char* p;
p = strpbrk(str1,to_del) ;
if (p!=NULL) 
{
pos= strlen(str1) - strlen(p);
cut_symb(str1,pos);
// printf("1 %s %s %d\n",str1,p,pos);
clearchar(str1,to_del);
}
return str1;
}


int isPalindrom(char str4[255])

{

if (strlen(str4) == 0) return 1;

if (str4[0] == str4[strlen(str4)-1]) 
    {
       str4 = cut_symb(str4, 0); 
       str4 = cut_symb(str4, strlen(str4)-1);
       isPalindrom(str4);
    }
else 
{
    return 0;
}

}

int main()
{

char str2[255] = "TimurZilb";

int isp;

//printf("1 %s\n", str2);

//str3 = cut_symb(str2,7);

//printf("2 %s\n", str3);

//strcpy(str2,"abcd123dcba");

printf("Enter a string: ");
fgets(str2,255,stdin);
if ((strlen(str2) > 0) && (str2[strlen (str2) - 1] == '\n'))
        str2[strlen (str2) - 1] = '\0';
clearchar(str2,",. !;:?");
strlwr(str2);
// printf("5 %s!\n", str2);
isp = isPalindrom(str2);

if (isp)
        printf("This is a palindrom");
        else
        {
            printf("This is NOT a palindrom");
        }
        

}