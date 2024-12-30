<%*
let url = await tp.system.clipboard();
let page = await tp.obsidian.request({url});
let p = new DOMParser();
let doc = p.parseFromString(page, "text/html");
let $ = s => doc.querySelector(s);
%><%
$("link[itemprop='name']").getAttribute("content") %>, <%
$("meta[itemprop='uploadDate']").content.slice(0, 4) %> ▶ <%
$("meta[property='og:title']").content %>