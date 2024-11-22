# My experience programming in C
today i decided to start programming in the C programming language. the reason i decided to learn C is that i feel like i can get a greater understanding of how computers work and be more prepared for [Programming in Rust].

I have been using nix dev/shell environments to manage dependencies lately.

| Command                   | Use                                                          |
| ------------------------- | ------------------------------------------------------------ |
| nix-shell shell.nix       | Start the nix dev enviroment                                 |
| gcc -o HelloWorld Hello.c | Compile `Hello.c` into an executable file named `HelloWorld` |
| ./HelloWorld              | Execute the `HelloWorld` program                             |

I will be following along with a [FreeCodeCamp.org Video on C](https://www.youtube.com/watch?v=KJgsSFOSQv0)



---

## Hello world - in C
```C
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
```C
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
```C
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
