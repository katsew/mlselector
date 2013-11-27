author: katsew

USAGE:  
$("your selector").mlSelector();

OPTIONS:

mlDefault is to set default language. Which means that shows on the
root directory such as http://example.com/ 

mlLangs is to detect languages to change with select element or browser language setting.
This option should write with regular expression like "/ja|en|zh|vi.../".

defaults : {
  "mlDefault" : "en",
  "mlLangs" : "/ja|en/"
}
$("your selector").mlSelector({
		"mlDefault" : "en",
		"mlLangs" : "/ja|en/"
});

COMPATIBLE:
IE+8 ( in order to use sessionStorage )
Chrome latest
Firefox latest
Safari latest

