jQuery PrintIt Plugin
======================================================================================
This plugin for `print()` (*via printer*) part of website. Choose a selector and define `cssURI` (*optional*).

*Websitesinde sizin belirlediðiniz bir alaný Javascript ile yazýcýdan çýkarmak  için kullanýlýr... Örneðin print etmek istediðiniz alaný ekstra bir div içine alýp, (printIt)  click eventý ile aþaðýdaki kullanýma benzer tetikleyebilirsiniz. cssURI parametresi ile de ayrý ayrý css dosyalarý tanýmlayabilirsiniz. Diðer türlü plugin dosyasý içindeki default deðer deðiþtirip her yerde ayný css'i kullanabilirsiniz.*

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