## Date
Yesterday: <%tp.date.yesterday("YYYY-MM-DD")%>
Today: <%tp.date.now("YYYY-MM-DD")%>
Tomorrow: <%tp.date.tomorrow("YYYY-MM-DD")%>

Monday: <%tp.date.weekday("YYYY-MM-DD",1)%>
Tuesday: <%tp.date.weekday("YYYY-MM-DD",2)%>
Wednesday: <%tp.date.weekday("YYYY-MM-DD",3)%>
Thursday: <%tp.date.weekday("YYYY-MM-DD",4)%>
Friday: <%tp.date.weekday("YYYY-MM-DD",5)%>
Saturday: <%tp.date.weekday("YYYY-MM-DD",6)%>
Sunday: <%tp.date.weekday("YYYY-MM-DD",7)%>

3 Days past: <%tp.date.now("YYYY-MM-DD", "P-3D")%>
3 Months past: <%tp.date.now("YYYY-MM-DD", "P-3M")%>
3 Years past: <%tp.date.now("YYYY-MM-DD", "P-3Y")%>

3 Days future: <%tp.date.now("YYYY-MM-DD", "P+3D")%>
3 Months future: <%tp.date.now("YYYY-MM-DD", "P+3M")%>
3 Years future: <%tp.date.now("YYYY-MM-DD", "P+3Y")%>

1st of last month: <%tp.date.now("YYYY-MM-01","P-1M")%>
1st of this month: <%tp.date.now("YYYY-MM-01")%>
1st of next month: <%tp.date.now("YYYY-MM-01","P+1M")%>

1st day of last year: <%tp.date.now("YYYY-01-01","P-1Y")%>
1st day of this year: <%tp.date.now("YYYY-01-01")%>
1st day of next year: <%tp.date.now("YYYY-01-01","P+1Y")%>

## Prompts
<%tp.system.prompt("this is the prompt", "This is the default value", false, true)%>

## Suggested responses
<%tp.system.suggester(["Unrated","1 star","2 stars","3 stars","4 stars","5 stars"], ["Unrated","⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐"], false)%>

## Whitespace control notes
```markdown
A specific syntax exists for whitespace control:

- An underscore `_` at the **beginning** of a tag (`<%_`) will trim **all** whitespace **before** the command
- An underscore `_` at the **end** of a tag (`_%>`) will trim **all** whitespace **after** the command
- A dash `-` at the **beginning** of a tag (`<%-`) will trim **one** newline **before** the command
- A dash `-` at the **end** of a tag (`-%>`) will trim **one** newline **after** the command.
```

## If else statements
```markdown
<%* if (tp.file.title == "MyFile" ) { -%>
This is my file!
<%* } else { -%>
This isn't my file!
<%* } -%>
Some content ...
```

## Web
```markdown
// Daily quote
<% tp.web.daily_quote() %>

// Random picture
<% tp.web.random_picture() %>

// Random picture with size
<% tp.web.random_picture("200x200") %>

// Random picture with size and query
<% tp.web.random_picture("200x200", "landscape,water") %>

// Simple request
<% tp.web.request("https://jsonplaceholder.typicode.com/todos/1") %>

// Request with path
<% tp.web.request("https://jsonplaceholder.typicode.com/todos", "0.title") %>
```

## Frontmatter
```markdown
<%*
const file = tp.file.find_tfile("path/to/file");
await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
  frontmatter["key"] = "value";
});
%>
```