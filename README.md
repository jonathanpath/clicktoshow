# clicktoshow
jQuery plugin to show and hide a block when clicking somewhere

## How to use it

For exemple, if you want to show the block #block2 on click on #button and also hide #step1

```
<div id="step1">
  Step 1
  <a href="#" id="button" data-toshow="block2" data-tohide="block2">Button</a>
</div>
<div id="step2">Step 2</div>
```

```
$("#button").clicktoshow();
```
