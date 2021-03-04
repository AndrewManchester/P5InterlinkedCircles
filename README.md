<!DOCTYPE HTML>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>
   Made with Remarkable!
  </title>
  <link href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/styles/github.min.css" rel="stylesheet"/>
  <style type="text/css">
   body,table tr{background-color:#fff}table tr td,table tr th{border:1px solid #ccc;text-align:left;padding:6px 13px;margin:0}pre code,table,table tr{padding:0}hr,pre code{background:0 0}body{font:16px Helvetica,Arial,sans-serif;line-height:1.4;color:#333;word-wrap:break-word;padding:10px 15px}strong,table tr th{font-weight:700}h1{font-size:2em;margin:.67em 0;text-align:center}h2{font-size:1.75em}h3{font-size:1.5em}h4{font-size:1.25em}h1,h2,h3,h4,h5,h6{font-weight:700;position:relative;margin-top:15px;margin-bottom:15px;line-height:1.1}h1,h2{border-bottom:1px solid #eee}hr{height:0;margin:15px 0;overflow:hidden;border:0;border-bottom:1px solid #ddd}a{color:#4183C4}a.absent{color:#c00}ol,ul{padding-left:15px;margin-left:5px}ol{list-style-type:lower-roman}table tr{border-top:1px solid #ccc;margin:0}table tr:nth-child(2n){background-color:#aaa}table tr td :first-child,table tr th :first-child{margin-top:0}table tr td:last-child,table tr th :last-child{margin-bottom:0}img{max-width:100%}blockquote{padding:0 15px;border-left:4px solid #ccc}code,tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px}pre code{margin:0;white-space:pre;border:none}.highlight pre,pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}
  </style>
 </head>
 <body>
  <p>
   On the P5 website is an example Spirograph. This is my version
   <br/>
   of it
  </p>
  <p>
   Its table driven so as to make it easy to change the parameters and see the effects
  </p>
  <pre><code>let showCircles = true
let base = 0.0005
let data = [{radius: 100, speed: base*10,  color: 'white',   show: false, penWidth: 1},
            {radius: 20, speed: base*10,     color: 'red',         show: true, penWidth: 1},            
            {radius: 19, speed: base*10,     color: 'blue',       show: true, penWidth: 1},
            {radius: 18, speed: base*10,     color: 'orange',   show: true, penWidth: 1},
            {radius: 17, speed: base*10,     color: 'grey',       show: true, penWidth: 1},            
            {radius: 16, speed: base*10,     color: 'green',     show: true, penWidth: 10},
            {radius: 150, speed:  base*10,   color: 'yellow',   show: true, penWidth: 1}
          ]

</code></pre>
  <p>
   You can switch between the interinked circles or the trail made by the pens attached
   <br/>
   to each circle by
  </p>
  <pre><code>let showCircles = true //false
</code></pre>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/highlight.min.js">
  </script>
  <script>
   hljs.initHighlightingOnLoad();
  </script>
  <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript">
  </script>
  <script type="text/javascript">
   MathJax.Hub.Config({"showProcessingMessages" : false,"messageStyle" : "none","tex2jax": { inlineMath: [ [ "$", "$" ] ] }});
  </script>
 </body>
</html>
