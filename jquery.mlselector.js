
(function($) {
  return $.fn.mlSelector = function(options) {
    var $this, defaults, mlBrowserLang, mlCount, mlHref, mlLangSet, mlRegArr, mlRegExp, mlResult, setting;
    defaults = {
      'mlLangs': '/ja|en/',
      'mlDefault': 'en'
    };
    setting = $.extend(defaults, options);
    mlHref = window.location.href;
    mlRegArr = mlHref.split('/');
    mlRegExp = new RegExp(setting.mlLangs, "i");
    $this = $(this);
    mlBrowserLang = (function() {
      try {
        return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
      } catch (e) {
        return undefined;
      }
    })();
    if (mlRegExp.test(mlRegArr[3]) && mlRegArr[3].length < 3) {
      mlLangSet = mlRegArr[3];
    } else {
      mlLangSet = setting.mlDefault;
    }
    $this.val(mlLangSet);
    if (mlLangSet === setting.mlDefault) {
      mlCount = 1;
    } else {
      mlCount = 0;
    }
    while (mlCount < 4) {
      mlRegArr.shift();
      mlCount++;
    }
    mlResult = mlRegArr.join('/');
    if (typeof sessionStorage && sessionStorage.getItem('mlLang') === null) {
      if (mlRegExp.test(mlBrowserLang)) {
        if (mlBrowserLang === setting.mlDefault) {
          window.location.href = '/' + mlResult;
        } else {
          window.location.href = '/' + mlBrowserLang + '/' + mlResult;
        }
        sessionStorage.setItem('mlLang', mlBrowserLang);
      }
    }
    return $this.on('change', function() {
      var mlSelectedValue;
      mlSelectedValue = $this.val();
      if (mlSelectedValue === mlLangSet) {
        return false;
      }
      if (typeof sessionStorage) {
        sessionStorage.setItem('mlLang', mlSelectedValue);
      }
      if (mlSelectedValue !== setting.mlDefault) {
        return window.location.href = '/' + mlSelectedValue + '/' + mlResult;
      } else {
        return window.location.href = '/' + mlResult;
      }
    });
  };
})(jQuery);
