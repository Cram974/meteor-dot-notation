# Dot Notation
This package provide two functions

#### DotNotation.flaten
This function take a deep nested object like 

```javascript
var a = {
	b: {
		c: true
	}	
};
```

and return a flatened version like

```javascript
var a = {'b.c': true};
```

#### DotNotation.deepen
This function take a flat object like 

```javascript
var a = {'b.c': true};
```

and return a deep nested version like

```javascript
var a = {
	b: {
		c: true
	}	
};
```
