# My experience programming in C
today i decided to start relearning programming in the C programming language. the reason i decided to learn C is that i feel like i can get a greater understanding of how computers work and be more prepared for [Programming in Rust].

I have been using nix dev/shell environments to manage dependencies lately.

| Command                   | Use                                                          |
| ------------------------- | ------------------------------------------------------------ |
| nix-shell shell.nix       | Start the nix dev enviroment                                 |
| gcc -o HelloWorld Hello.c | Compile `Hello.c` into an executable file named `HelloWorld` |
| ./HelloWorld              | Execute the `HelloWorld` program                             |

I will be following along with a [FreeCodeCamp.org Video on C](https://www.youtube.com/watch?v=KJgsSFOSQv0)

>[!todo]
>- i skipped the madlibs project cause i have done all the things required for it and dont think it will teach me anything and i wasnt feeling interested in completing it.


---

## Hello world - in C
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
	printf("Hello world!\n");
	return 0;
	}
```
`#include <stdio.h>` is saying include the standard input/output package
`#include <stdlib.h>` is saying include the standard library

`int main() {}` every C program starts with a "main" function which starts when executed
`printf("");` This is a standard library function to "print formatted"
`return 0;` each program gives a status code when it exits, status code 0 is like all is well.

[Timestamp= 00:09:04](https://www.youtube.com/watch?v=KJgsSFOSQv0&t=544s)

## Drawing ASCII shape - in C
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
	printf("   /|\n");
	printf("  / |\n");
	printf(" /  |\n");
	printf("/___|\n");

	return 0;
	}
```
pretty self explanatory, just using the `printf` function to print out an ASCII triangle

[Timestamp= 00:12:51](https://www.youtube.com/watch?v=KJgsSFOSQv0&t=771s)

## Variables - in C
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
	char yourName[] = "Dani";
	int yourAge = 26;
	printf("Hello %s! \n", yourName);
	printf("You are %d years old. \n", yourAge);

	yourAge = 15;
	printf("Now your name is %s. \n", yourName);
	printf("and your age is %d. \n", yourAge);

	return 0;
	}
```

`%s` tells it to insert a string there, it gets the data from the `yourName` variable.

## Data types - in C

```c
#include <stdio.h>
#include <stdlib.h>
  
int main() {
	int yourAge = 26;         // %d
	char yourGrade = 'A';     // %c
	double pi = 3.14;         // %f
	char yourName[] = "Dani"; // %s
	  
	printf("Hello %s! \n", yourName);
	printf("You are %d years old. \n", yourAge);
	printf("The value of Pi is: %f. \n", pi);
	printf("and your grade is %c. \n", yourGrade);
	
	return 0;
}
```

- Int
- Double
- Char
	- Char array (String)

## Working with numbers - in C
```c
#include <stdio.h>
#include <stdlib.h>
  
int main() {

	// Square root
	printf("%f", sqrt(16));

	// Rounding to floor/ceiling
	printf("%f", ceil(1.4));  
	printf("%f", floor(1.4));

	// Power of
	printf("%f", pow(4, 3));
	
	return 0;
}
```

- Math done with 2 integers will return an integer even if it "should" return a decimal
	- Eg. 5 / 4 = 1 instead of 1.25
- math done with any floats will return a float
	- Eg. 1.25 + 1 = 2.25

| Function name | Description                                |
| ------------- | ------------------------------------------ |
| sqrt(16)      | Square root                                |
| ceil(1.4)     | Round to ceiling                           |
| floor(1.4)    | Round to floor                             |
| pow(4, 3)     | returns the value of _x_ to the power of y |

## Constants - in C
```c
#include <stdio.h>
#include <stdlib.h>
  
int main() {
	// This code will refuse to compile due to trying to rewrite a read only variable

	// Set the vars (able to change)
	int yourAge = 26;         // %d
	char yourGrade = 'A';     // %c
	double pi = 3.14;         // %f
	char yourName[] = "Dani"; // %s

	// Set the constant vars (Unable to change)
	const int constAge = 26;         // %d
	const char constGrade = 'A';     // %c
	const double constPi = 3.14;     // %f
	const char constName[] = "Dani"; // %s

	// Print the vars
	printf("Hello %s! \n", yourName);
	printf("You are %d years old. \n", yourAge);
	printf("The value of Pi is: %f. \n", pi);
	printf("and your grade is %c. \n", yourGrade);

	// Print the const vars
	printf("Hello %s! \n", constName);
	printf("You are %d years old. \n", constAge);
	printf("The value of Pi is: %f. \n", constPi);
	printf("and your grade is %c. \n", constGrade);

	// Modify the vars
	yourAge = 62;         // %d
	yourGrade = 'F';      // %c
	pi = 3.2;            // %f
	yourName = "Not Dani";    // %s

	// Try to modify the constant vars
	constAge = 46;         // %d
	constGrade = 'B';      // %c
	constPi = 3.9;        // %f
	constName = "Also not Dani";    // %s

	// Print the vars agian
	printf("Hello %s! \n", yourName);
	printf("You are %d years old. \n", yourAge);
	printf("The value of Pi is: %f. \n", pi);
	printf("and your grade is %c. \n", yourGrade);

	// Print the const vars again
	printf("Hello %s! \n", constName);
	printf("You are %d years old. \n", constAge);
	printf("The value of Pi is: %f. \n", constPi);
	printf("and your grade is %c. \n", constGrade);
	
	return 0;
}
```

- Code like shown above **Refuses to compile** since you cant rewrite a const
- constants are good for certain known constants like the speed of light, pi, etc.
- Const vars are commonly written in **ALL CAPS**

## Getting user input - in C
```c
#include <stdio.h>
#include <stdlib.h>
  
int main() {
	int age; // printf: %d | scanf: %d
	char grade; // printf: %c | scanf: %c
	double gpa; // printf: %f | scanf: %lf
	char name[20]; // printf: %s | scanf: %s
	
	// you have to specify how many chars to allocate memory for with strings
	// gotta use a pointer to reference the memory address
	
	printf("Enter your name: ");
	fgets(name, 20, stdin);
	// scanf("%s", name); // strings dont need pointers in scanf... Why?
	printf("you entered: %s \n", name);
	
	printf("Enter your grade: ");
	scanf("%c", &grade);
	printf("you entered: %c \n", grade);
	  
	printf("Enter your age: ");
	scanf("%d", &age);
	printf("you entered: %d \n", age);
	  
	printf("Enter gpa: ");
	scanf("%lf", &gpa); // floats are called %lf in scanf... Why?
	printf("you entered: %f \n", gpa);
	  
	return 0;
}
```

- `scanf` function works similar to to the `printf` function but in reverse
- `fgets` is like scanf but you can include spaces but cant use it for floats, ints, etc
- `fgets` enter key will insert a new line and then end entry so your var will include a new line character
- %lf instead of %f inside of the scanf function
- you need to use a pointer to reference the memory address but not for strings
- i was getting this warning for the above code: 
	`warning: ignoring return value of ‘scanf’ declared with attribute ‘warn_unused_result’`


## MadLibs - in C
this is a pretty simple project recreating a madlib using C using the techniques we have already covered. i plan to do it later as its kinda uninteresting to me currently.
```c

```

## Arrays - in C
```c
#include <stdio.h>
#include <stdlib.h>
  
int main() {
	int someNums[] = {1, 2, 4, 8, 16, 32, 64, 128};
	char name[] = "Dani";
	int search;
	printf("choose an index: ");
	scanf("%d", &search);
	printf("index number %d holds the following data: %d \n", search, someNums[search]);
	printf("The first letter of your name is: %c", name[0]); // Strings are just arrays!
	  
	return 0;
}
```
- Learning about arrays explains a bit more why strings are kinda funky sometimes. **strings are just arrays** of the char type so you have to treat them as such.
- arrays are kinda fun! remind me of things like CSV files, and working with databases in php/mysql

## Functions - in C
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    helloWorld();
    helloUser("Dani", 26);

    return 0;
}

void helloWorld() {
    printf("Hello world! \n");
}

void helloUser(char userName[], int userAge) {
    printf("Hello %s! you are %d years old.", userName, userAge);
}
```
Super excited to work on some functions in C! unlocking new parts of the superpower!
- works basically how i thought it would.
- not exciting by itself obviously but the possibilities are exciting.

## Function return statements - in C
```c
#include <stdio.h>
#include <stdlib.h>

double cube(double num) {
	return num * num * num;
}

int main() {
    double myNum = 7.0;
    printf("%f cubed is: %f", myNum, cube(myNum));
    return 0;
}
```
- the return type goes right before the function name
- don't forget to add a return statement to the function!
- seems like the return type of the main function is `int`,i wonder if its just convention or makes an actual difference.

## If statements - in C
```c
#include <stdio.h>
#include <stdlib.h>

int max(int num1, int num2) {
    int result;
    if (num1 > num2) {
        result = num1;
    }
    else {
        result = num2;
    }
    return result;
}

int main() {
    int num1 = 8;
    int num2 = 9;
    printf("the bigger number is: %d", max(num1, num2));
}
```
- i have heard that for most use cases a switch statement is better performing/faster?

### Else if statements
```c
#include <stdio.h>
#include <stdlib.h>

int maxOf3(int num1, int num2, int num3) {
    int result;
    if (num1 >= num2 && num1 >= num3) {
        result = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        result = num2;
    }
    else {
        result = num3;
    }
    return result;
}

int main() {
    printf("The max number is: %d", maxOf3(2, 4, 8));
}
```
- why is a switch statement faster/better?

## Logical operators - in C
| Sign | Example | Description                     |
| ---- | ------- | ------------------------------- |
| >    |         | "Greater-than" sign             |
| <    |         | "Less than" sign                |
| >=   |         | "Greater than or equal to" sign |
| <=   |         | "Less than or equal to" sign    |
| =    |         | set equal to                    |
| ==   |         | compare if equal                |
| &&   |         | And                             |
| \|\| |         | Or                              |
| !    |         | Not                             |
