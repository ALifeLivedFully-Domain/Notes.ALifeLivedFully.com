<%*
let url = await tp.system.clipboard();
let page = await tp.obsidian.request({url});
let p = new DOMParser();
let doc = p.parseFromString(page, "text/html");
let $ = s => doc.querySelector(s);
%># <%
$("link[itemprop='name']").getAttribute("content") %>, <%
$("meta[itemprop='uploadDate']").content.slice(0, 4) %> ▶ <%
$("meta[property='og:title']").content %>
<%tp.system.prompt("Description: (What do you think this video is gonna be about, and why are you excited to watch it?)", "Description here.", false, true)%>

>[!tldr]
>Summarize points here

![<%
$("link[itemprop='name']").getAttribute("content") %>, <%
$("meta[itemprop='uploadDate']").content.slice(0, 4) %> ▶ <%
$("meta[property='og:title']").content %>](<%$("link[rel='shortLinkUrl']").href %>)

## Timestamps
- YT=00:00 - Start of video

## Notes
