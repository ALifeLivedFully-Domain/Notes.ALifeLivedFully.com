change a list of terms into anki flashcards that each say Definition of *Insert term* 

>[!todo] 
>I would like to make a new one that creates pre-closed question call-outs which will make it useful in anki, Markdown, Hugo, & Quartz

Change:
```
- Term1
- Term2
- Term3
- Term4
```

Into:
```
Q: Definition of "Term1"
A: 


Q: Definition of "Term2"
A: 


Q: Definition of "Term3"
A: 


Q: Definition of "Term4"
A: 
```

Using:
```REGEX
Find:\n- 
Replace: "\nA: \n\nQ: Definition of "
```

And:
1.  Delete the `"\nA: \n\n` from the first item
2. Add `"\nA: ` to the last item

---
Change:
```
Which of these options would be included in a scan to identify a common misconfiguration?

A)

Router admin password

B)

Password policy

C)

Dictionary attack

D)

Packet sniffing
```

Into:
```
Which of these options would be included in a scan to identify a common misconfiguration?
A) Router admin password
B) Password policy
C) Dictionary attack
D) Packet sniffing
```

Using:
```Regex
Find:\n([ABCD])\)\n\n
Replace:$1) 
```

And:
1. add `\n` to `A) `
2. add `\nAnswer: ` and the answer to the end of the options

---
Change:
```
[[Education/CompTIA Security+/Notes/Phishing | Phishing]]
```

Into:
```
[[Phishing]]
```

Using:
```
Find: (\[\[Education\/CompTIA Security\+\/Notes\/)(.*)( \|)(.*)(\]\])
Replace: [[$2]]
```

---
