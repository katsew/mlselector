author: katsew  
license: MIT

USAGE:  
```
	$("your selector").mlSelector();
```
OPTIONS:  

mlDefault is to set default language. Which means that shows on the  
root directory such as "http://example.com/example.html"  

other language will be shown on the URL like following...  
if you choose japanese URL should be "http://example.com/ja/example.html"


mlLangs is to detect languages to change with select element or browser language setting.  
This option should write with regular expression like "/ja|en|zh|vi.../".

```
	defaults : {
	  "mlDefault" : "en",
	  "mlLangs" : "/ja|en/"
	}
	$("your selector").mlSelector({
			"mlDefault" : "en",
			"mlLangs" : "/ja|en/"
	});
```

MARKUP:
You should set the value attribute on option elements like this.
```
	<select id="your selector">
	  <option value="ja">japanese</option>
	  <option value="en">english</option>
	</select>
```



COMPATIBLE:  
IE+8 ( in order to use sessionStorage )  
Chrome latest  
Firefox latest  
Safari latest  
