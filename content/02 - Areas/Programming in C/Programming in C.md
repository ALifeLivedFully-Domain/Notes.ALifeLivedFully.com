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


## ⭐ MadLibs - in C
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
| !($) |         | Negation opperator              |

## Switch statements - in C
```c
#include <stdio.h>
#include <stdlib.h>

int main () {
    char grade = 'A';

    switch (grade) {
        case 'A':
            printf("Great job!");
            break;
        case 'B':
            printf("Good job!");
            break;
        case 'C':
            printf("Good job.");
            break;
        case 'D':
            printf("seems like we need to work on this more.");
            break;
        case 'F':
            printf("See me after class please.");
            break;
        default:
            printf("Invalid grade!");
    }
}
```

in the `case` where `grade` is equal to `A` print "Great job!"

## Structs - in C
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct User {
    char name[50];
    int age;
    double rating;
};

int main() {
    struct User bobby;
    strcpy(bobby.name, "Robert");
    bobby.age = 23;
    bobby.rating = 2.5;

    printf("Username: bobby \n
			Name: %s \n
			Age: %d \n
			Rating: %lf", bobby.name, bobby.age, bobby.rating);
    return 0;
}
```
structs seem pretty useful.

## While loops
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // While loop example
    int index = 11;

	printf("Index is starting at: %d \n", index);

    while (index <= 10) {
        printf("Index is: %d\n", index);
        index++; // same as putting index = index + 1;
    }

	printf("Index is ending at: %d \n", index);

    printf("Done!");

    return 0;
}
```
- checks if the condition is true and if its true it executes the code then checks the condition again
- executes code **While** condition is true
- a while loop doesnt need to keep track of iterations

### Do-while loops
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // While loop example
    int index = 11;

	printf("Index is starting at: %d \n", index);

    do {
        printf("Index is: %d\n", index);
        index++; // same as putting index = index + 1;
    } while (index <= 10);

	printf("Index is ending at: %d \n", index);

    printf("Done!");

    return 0;
}
```
- similar to a while loop but it excecutes the code first before checking the condition.
- if the condition is false to start with, it will still execute the code 1 time to start before finally checking if the condition is true and executes code if condition is true(?)

## ⭐ Guessing game
```c
#include <stdlib.h>
#include <stdio.h>

// Goal: create a game to guess the number until user gets it right or runs out of guesses

int main() {
    int secret = 7;
    int maxNum = 10;
    int minNum = 1;
    int guessLimit = 3;
    int guess;
    int index = 1;

    while (secret != guess && guessLimit >= index) {
        printf("Guess %d/%d | Guess a number between 1 and 10: ", index, guessLimit);
        scanf("%d", &guess);
        if (guess < minNum || guess > maxNum) {
            printf("Reminder that the secret number is between 1 and 10. \n");
        }
        if (guess == secret) {
            printf("Congrats! you got it right on attempt #%d with %d attempts remaining! \n", index, (guessLimit - index));
            break;
        }
        if (secret != guess && guessLimit <= index) {
            printf("Sorry, you reached your guess limit! (Guess limit: %d) \n", guessLimit);
            break;
        }
        else {
	        // seems like this code would benifit from being a switch statement.
            index++;
        }
    }
}
```
- take input
- while loop
- if/else
- etc
- proud of the end result
	- i had cleaner looking code earlier but kept changing stuff.

## For loops - in C
```c
int i;
int binaryCounting[] = {1, 2, 4, 8, 16, 32, 64, 128}
for (i = 1; i <= 5; i++) {
	// Do something until test condition is met
}
for (i = 0; i <= 8; i++) {
	printf("Position %d: %d \n", i, binaryCounting[i]);
}
```
- similar idea to while loops but more explicit on incrementing an index

for loop has 3 sections plus the code its executing:
1. the initialization
2. the test condition (a Boolean expression)
3. the update statement
	1. this can be any statement like `i--`, `i = i + 2`, `a=4`, etc
4. code to execute each loop.

## 2D arrays - in C
```c
#include <stdlib.h>
#include <stdio.h>

int main() {
    int nums[3][5] = {
        {1, 2, 3, 4, 5},
        {2, 4, 6, 8, 10},
        {3, 6, 9, 12, 15}
    }
    printf("%d", nums[2][4]); // This will print out the number 15
}
```
- Arrays where each item is an array
- is an array of strings actually a 2D array since strings are array of characters?

## Nested For loops - in C
```c
#include <stdlib.h>
#include <stdio.h>

int main() {
    // 2D Array:
    int nums[3][5] = {
        {1, 2, 3, 4, 5},
        {2, 4, 6, 8, 10},
        {3, 6, 9, 12, 15}
    };
    int x;
    int y;

    // printf("%d", nums[2][4]); // This will print out the number 15

    // Nested for loop:
    for(x = 0; x < 3; x++) {
        printf("\nArray %d: ", x);
        for(y = 0; y < 5; y++) {
            printf("%d ", nums[x][y]);
        };
    };
}
```

Output:
```text

Array 0: 1 2 3 4 5 
Array 1: 2 4 6 8 10 
Array 2: 3 6 9 12 15
```

- really good for accessing data in a 2D array
- maybe game loops? like the game delta progressing and then if you start taking damage lower health x amount of times? idk

## Memory addresses - in C
```c
// do something
```
- Memory addresses are the part of C that intimidates me and i worry i wont be able to understand. we shall see...
- 