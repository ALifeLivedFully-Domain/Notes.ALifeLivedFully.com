---
config:
  kanban:
    ticketBaseUrl: 'https://mermaidchart.atlassian.net/browse/#TICKET#'
---

# Markdown reference test
This note can be used as a reference for markdown styling and behavior.

---
## Headings
```markdown
# H1
followed by some text
```

```markdown
## H2
followed by some text
```

```markdown
### H3
followed by some text
```

```markdown
#### H4
followed by some text
```

```markdown
##### H5
followed by some text
```

```markdown
###### H6
followed by some text
```

---
## Tables

| Left-aligned text | Center-aligned text | Right-aligned text |
| :---------------- | :-----------------: | -----------------: |
| Content           |       Content       |            Content |

| First column                                                                      | Second column                                                                                                      |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Internal links](https://help.obsidian.md/Linking+notes+and+files/Internal+links) | Link to a file _within_ your **vault**.                                                                            |
| [Embed files](https://help.obsidian.md/Linking+notes+and+files/Embed+files)       | ![Engelbart.jpg](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg) |

---
## Styling

| Style                  | Syntax                 | Example                                  | Output                                 |
| ---------------------- | ---------------------- | ---------------------------------------- | -------------------------------------- |
| Bold                   | `** **` or `__ __`     | `**Bold text**`                          | **Bold text**                          |
| Italic                 | `* *` or `_ _`         | `*Italic text*`                          | _Italic text_                          |
| Strikethrough          | `~~ ~~`                | `~~Striked out text~~`                   | ~~Striked out text~~                   |
| Highlight              | `== ==`                | `==Highlighted text==`                   | ==Highlighted text==                   |
| Bold and nested italic | `** **` and `_ _`      | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| Bold and italic        | `*** ***` or `___ ___` | `***Bold and italic text***`             | ***Bold and italic text***             |

------
## Code blocks

### 4 space indent
    def this_is
      puts "some #{4-space-indent} code"
    end

### Code tag
<code>
def this_is
  puts "some #{code tag} code"
end
</code>

### Pre-tag
<pre>
def this_is
  puts "some #{pre tag} code"
end
</pre>

### Fenced code
```
def this_is
  puts "some #{fenced} code"
end
```

### Syntax highlighting

#### Ruby
```ruby
class Classy
  def this_is
    puts "some #{colored} ruby code with ruby syntax highlighting"
    @someobj.do_it(1, 2)
  end
end
```

#### Javascript
```javascript
var test = function this_is(){
  console.log("some" + colored + "javascript code with javascript syntax highlighting really long");
}
```

```js
var test = function this_is(){
  console.log("language declared as 'js' instead");
}
```

#### Clojure
```clojure
(defproject myproject "0.5.0-SNAPSHOT"
  :description "Some clojure code with syntax highlighting."
  :dependencies [[org.clojure/clojure "1.5.1"]]
  :plugins [[lein-tar "3.2.0"]])
```

#### Bogus_language
```bogus_language
var test = function this_is(){
  console.log("language declared as bogus_language");
}
```

---

## Call-outs

### Call-out features
#### Fold-able (Default to folded)
> [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
> ```
> > [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
> ```

#### Fold-able (Default to unfolded)
> [!faq]+ Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
> ```
> > [!faq]+ Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
> ```


#### Custom names
> [!tip] Callouts can have custom titles
> Like this one.
> ```
> [!tip] Callouts can have custom titles
> Like this one.
> ```

### Call-out types
#### ✏️ Note
> [!note]
> ```
> > [!note]
> Lorem ipsum dolor sit amet
> ```

#### 📋 Abstract, Summary, TLDR
> [!abstract]
> ```
> > [!abstract]
> Lorem ipsum dolor sit amet
> ```

> [!summary]
> ```
> > [!summary]
> Lorem ipsum dolor sit amet
> ```

> [!tldr]
> ```
> > [!tldr]
> Lorem ipsum dolor sit amet
> ```

#### ℹ️ Info
> [!info]
> ```
> > [!info]
> Lorem ipsum dolor sit amet
> ```

#### ✅ Todo
> [!todo]
> ```
> > [!todo]
> Lorem ipsum dolor sit amet
> ```

#### 🔥 Tip, Hint, Important
> [!tip]
> ```
> > [!tip]
> Lorem ipsum dolor sit amet
> ```

> [!hint]
> ```
> > [!hint]
> Lorem ipsum dolor sit amet
> ```

> [!important]
> ```
> > [!important]
> Lorem ipsum dolor sit amet
> ```

#### ✔️ Success, Check, Done
> [!success]
> ```
> > [!success]
> Lorem ipsum dolor sit amet
> ```

> [!check]
> ```
> > [!check]
> Lorem ipsum dolor sit amet
> ```

> [!done]
> ```
> > [!done]
> Lorem ipsum dolor sit amet
> ```

#### ❓ Question, Help, FAQ
> [!question]
> ```
> > [!question]
> Lorem ipsum dolor sit amet
> ```

> [!help]
> ```
> > [!help]
> Lorem ipsum dolor sit amet
> ```

> [!faq]
> ```
> > [!faq]
> Lorem ipsum dolor sit amet
> ```

#### ⚠️ Warning, Caution, Attention
> [!warning]
> ```
> > [!warning]
> Lorem ipsum dolor sit amet
> ```

> [!caution]
> ```
> > [!caution]
> Lorem ipsum dolor sit amet
> ```

> [!attention]
> ```
> > [!attention]
> Lorem ipsum dolor sit amet
> ```

#### ❌ Failure, Fail, Missing
> [!Failure]
> ```
> > [!failure]
> Lorem ipsum dolor sit amet
> ```

> [!fail]
> ```
> > [!fail]
> Lorem ipsum dolor sit amet
> ```

> [!missing]
> ```
> > [!missing]
> Lorem ipsum dolor sit amet
> ```

#### ⚡ Danger, Error
> [!danger]
> ```
> > [!danger]
> Lorem ipsum dolor sit amet
> ```

> [!error]
> ```
> > [!error]
> Lorem ipsum dolor sit amet
> ```

#### 🪲 Bug
> [!bug]
> ```
> > [!bug]
> Lorem ipsum dolor sit amet
> ```

#### 📄 Example
> [!example]
> ```
> > [!example]
> Lorem ipsum dolor sit amet
> ```

#### " Quote, Cite
> [!quote]
> ```
> > [!quote]
> Lorem ipsum dolor sit amet
> ```

> [!cite]
> ```
> > [!cite]
> Lorem ipsum dolor sit amet
> ```


---

## Footnotes
You can add footnotes to your notes using the following syntax:

### Simple footnote

`This is a simple footnote[^1].`

This is a simple footnote[^1].

### Named footnotes

`this is a named footnote[^note].`

this is a named footnote[^note].

### Referenced text

`[^1]: This is the referenced text.`

[^1]: This is the referenced text.

### Referenced text (Multiple lines)

```
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
```

[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

### Referenced text (Named)

`[^note]: This is the referenced text.`

[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.

---
## Embed image
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

## Mermaid diagrams

### Flowchart
```mermaid
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

### Sequence Diagram
```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```

### Class Diagram
```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
```

### State Diagram
```mermaid
stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```

### Entity Relationship Diagram
```mermaid
erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
```

### Gannt Diagram
```mermaid
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
```

### User Journey
```mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 3: Me
```

### Git Graph
```mermaid
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
```

### Pie Chart
```mermaid
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
```

### Mindmap
```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```

### Zen UML
>[!error]+
>Doesn't work in obsidian

```mermaid
zenuml
    title Order Service
    @Actor Client #FFEBE6
    @Boundary OrderController #0747A6
    @EC2 <<BFF>> OrderService #E3FCEF
    group BusinessService {
      @Lambda PurchaseService
      @AzureFunction InvoiceService
    }

    @Starter(Client)
    // `POST /orders`
    OrderController.post(payload) {
      OrderService.create(payload) {
        order = new Order(payload)
        if(order != null) {
          par {
            PurchaseService.createPO(order)
            InvoiceService.createInvoice(order)      
          }      
        }
      }
    }
```

### Quadrant chart
```mermaid
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
```

### XY Chart
```mermaid

    xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
```

### Block
>[!error]+
>Doesn't work in obsidian

```mermaid
block-beta
    columns 3
    doc>"Document"]:3
    space down1<[" "]>(down) space

  block:e:3
          l["left"]
          m("A wide one in the middle")
          r["right"]
  end
    space down2<[" "]>(down) space
    db[("DB")]:3
    space:3
    D space C
    db --> D
    C --> db
    D --> C
    style m fill:#d6d,stroke:#333,stroke-width:4px
    
```

### Packet Diagram
>[!error]+
>Doesn't work in obsidian

```mermaid
---
title: "TCP Packet"
---
packet-beta
  0-15: "Source Port"
  16-31: "Destination Port"
  32-63: "Sequence Number"
  64-95: "Acknowledgment Number"
  96-99: "Data Offset"
  100-105: "Reserved"
  106: "URG"
  107: "ACK"
  108: "PSH"
  109: "RST"
  110: "SYN"
  111: "FIN"
  112-127: "Window"
  128-143: "Checksum"
  144-159: "Urgent Pointer"
  160-191: "(Options and Padding)"
  192-255: "Data (variable length)"
```

Links:
```mermaid
flowchart LR
    A-->B
    B-->C
    C-->D
    D-->E
    click A "https://www.github.com" _blank
    click B "https://www.github.com" "Open this in a new tab" _blank
    click C href "https://www.github.com" _blank
    click D href "https://www.github.com" "Open this in a new tab" _blank

```




---
## Extra

### Comments
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
