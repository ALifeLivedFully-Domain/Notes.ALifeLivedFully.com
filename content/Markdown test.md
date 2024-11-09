### This README can be used as a reference for github-flavored-markdown styling (and possibly behavior).

---

# H1
followed by some text

## H2
followed by some text

### H3
followed by some text

#### H4
followed by some text

##### H5
followed by some text

###### H6
followed by some text

Auto-detected link: http://www.france.com

Some Ignored_multiple_underscore_italics here

A line of normal text with `inline code` and *italics*, **strong font**, and even some μ†ℱ ╋ℯ╳╋. Followed by lots of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem purus, eu commodo tortor. Donec malesuada ultricies dolor a eleifend. In hac habitasse platea dictumst. Vivamus a faucibus ligula. Nullam molestie tristique arcu, eu elementum metus ultricies sed. Aenean luctus congue lectus, vitae semper erat rhoncus non. Nulla facilisi.

Followed by another line of normal text with `inline code` and *italics*, **strong font**, and even some μ†ℱ ╋ℯ╳╋. Followed by lots of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem purus, eu commodo tortor. Donec malesuada ultricies dolor a eleifend. In hac habitasse platea dictumst. Vivamus a faucibus ligula. Nullam molestie tristique arcu, eu elementum metus ultricies sed. Aenean luctus congue lectus, vitae semper erat rhoncus non. Nulla facilisi.

Thin horizontal rule:

--

Thick horizontal rule:

------

|Table Header 1|Table Header 2           |
|--------------|-------------------------|
|Content       |http://example.org       |
|Content       |http://localhost:\<port\>|
Text right below table. Follows is a table with an empty cell, and unaligned indenting.

|Table Header 1|Table Header 2|
|--------------|--------------|
|Content  |  Cntent        |
|Content       |      |

Empty line between table and this text

    def this_is
      puts "some #{4-space-indent} code"
    end

<code>
def this_is
  puts "some #{code tag} code"
end
</code>

<pre>
def this_is
  puts "some #{pre tag} code"
end
</pre>

```
def this_is
  puts "some #{fenced} code"
end
```

```ruby
class Classy
  def this_is
    puts "some #{colored} ruby code with ruby syntax highlighting"
    @someobj.do_it(1, 2)
  end
end
```

```javascript
var test = function this_is(){
  console.log("some" + colored + "javascript code with javascript syntax highlighting really long");
}
```

```clojure
(defproject myproject "0.5.0-SNAPSHOT"
  :description "Some clojure code with syntax highlighting."
  :dependencies [[org.clojure/clojure "1.5.1"]]
  :plugins [[lein-tar "3.2.0"]])
```

```js
var test = function this_is(){
  console.log("language declared as 'js' instead");
}
```

```bogus_language
var test = function this_is(){
  console.log("language declared as bogus_language");
}
```

> here is blockquote


>[!tip]- Good to Have
> **Geometry**
> - [[Discrete Geometry]]
>   
> **Number Theory - Divisibility and Primes** 
> - [[Factor]]
> - [[GCD]]
> - [[Modulo]]


Red colored text
{style="color: red"}

I have more [^1] to say.

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

This is a <mark>highlighted quote</mark>.

this is ==highlighted quote==.

@test

test@email.com

I :heart: Hugo :smile:

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

| Style                  | Syntax                 | Example                                  | Output                                 |
| ---------------------- | ---------------------- | ---------------------------------------- | -------------------------------------- |
| Bold                   | `** **` or `__ __`     | `**Bold text**`                          | **Bold text**                          |
| Italic                 | `* *` or `_ _`         | `*Italic text*`                          | _Italic text_                          |
| Strikethrough          | `~~ ~~`                | `~~Striked out text~~`                   | ~~Striked out text~~                   |
| Highlight              | `== ==`                | `==Highlighted text==`                   | ==Highlighted text==                   |
| Bold and nested italic | `** **` and `_ _`      | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| Bold and italic        | `*** ***` or `___ ___` | `___Bold and italic text___`             | ___Bold and italic text___             |
| Bold and italic        | `*** ***` or `___ ___` | `***Bold and italic text***`             | ***Bold and italic text***             |



[^1]: Footnote example.