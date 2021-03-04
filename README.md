On the P5 website is an example Spirograph. This is my version
of it 

Its table driven so as to make it easy to change the parameters and see the effects

~~~javascript
let showCircles = true
let base = 0.0005
let data = [{radius: 100, speed: base*10,    color: 'white',  show: false, penWidth: 1},
            {radius: 20, speed: base*10,     color: 'red',    show: true,  penWidth: 1},            
            {radius: 19, speed: base*10,     color: 'blue',   show: true,  penWidth: 1},
            {radius: 18, speed: base*10,     color: 'orange', show: true,  penWidth: 1},
            {radius: 17, speed: base*10,     color: 'grey',   show: true,  penWidth: 1},            
            {radius: 16, speed: base*10,     color: 'green',  show: true,  penWidth: 10},
            {radius: 150, speed:  base*10,   color: 'yellow', show: true,  penWidth: 1}
          ]

~~~

You can switch between the interinked circles or the trail made by the pens attached
to each circle by 

~~~javascript
let showCircles = true //false
~~~
