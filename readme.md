jQuery PrintIt Plugin
======================================================================================
This plugin for `print()` (*via printer*) part of website. Choose a selector and define `cssURI` (*optional*).

*Websitesinde sizin belirledi�iniz bir alan� Javascript ile yaz�c�dan ��karmak  i�in kullan�l�r... �rne�in print etmek istedi�iniz alan� ekstra bir div i�ine al�p, (printIt)  click event� ile a�a��daki kullan�ma benzer tetikleyebilirsiniz. cssURI parametresi ile de ayr� ayr� css dosyalar� tan�mlayabilirsiniz. Di�er t�rl� plugin dosyas� i�indeki default de�er de�i�tirip her yerde ayn� css'i kullanabilirsiniz.*

How to use
--------------------------------------
````
 <script type="text/javascript" src="js/jquery.print.js"></script>
 <script>
        $(document).ready(function() {
            $(".printIt").printIt({
                cssURI: "css/print.css"
            });
        });
    </script>
````


Check out **demo.html**

Changelog
--------------------------------------
- Inital release...