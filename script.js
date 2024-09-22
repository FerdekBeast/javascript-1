    //1
        //2
        typeof( calkowita=12)
        document.write("<br> zmienna typu calkowitego o wartosci "+ calkowita)
        typeof( tekstowa="tekst")
        document.write("<br> zmienna typu string o wartosci "+ tekstowa)
        typeof(z_przecinkiem=3.14)
        document.write("<br> zmienna float o wartosci "+ z_przecinkiem)


        //3
        let imie1="1.Alan"
        let imie2="2.Kasia"
        let imie3="3.Julian"
        let imie4="4.Bartłomiej"
        let imie5="5.Marcin"
        document.write(imie1+"<br>"+imie2+"<br>"+imie3+"<br>"+imie4+"<br>"+imie5)

        //4
        let imie="Alan"
        let wiek=16
        document.write("Mam na imie :"+imie+"<br>"+"Mam na imie "+imie+" i mam "+wiek+" lat")

        //5
        let a=parseInt(prompt("(podaj pierwsza liczbe"))
        let b=parseInt(prompt("podaj druga liczbe"))
        let suma=a+b
        document.write("suma liczb a="+a+" i liczby b="+b+" wynosi "+suma)

        //6
        let liczba=parseInt(prompt("podaj liczbe do kontroli "))
        if(liczba<7)
        {
            document.write("liczba jest mniejsza od 7")
        }
        else if(liczba>7)
        {
            document.write("liczba jest wieksza od 7")
        }
        else
        {
            document.write("liczba jest rowna 7")
        }

        //7
        let a=parseInt(prompt("podaj 1 liczbe"))
        let b=parseInt(prompt("podaj 2 liczbe"))
        if(a>b)
        {
            document.write("liczba "+a+" jest wieksza")
        }
        else if(a<b)
        {
            document.write("liczba "+b+" jest wieksza")
        }
        else
        {
            document.write("liczby sa rowne")
        }

        //8
        let czyParzysta = parseInt(prompt("podaj liczbe a sprawdze czy jest parzysta"))
        if(czyParzysta%2==0)
        {
            document.write("liczba jest parzysta")
        }
        else
        {
            document.write("liczba nie jest parzysta")
        }

       //9
         let a=parseInt(prompt("podaj a"))
         let b=parseInt(prompt("podaj b"))
         let c=parseInt(prompt("podaj c"))
         if(a<b && a<c){
             if(b<c){
                 document.write(a+" "+b+" "+c)
             }
             else{
                 document.write(a+" "+c+" "+b)
             }
         }
         else if(b<a && b<c){
             if(a<c){
                 document.write(b+" "+a+" "+c)
             }
            else{
                 document.write(b+" "+c+" "+a)
             }
         }
         else {
             if(a<b){
                 document.write(c+" "+a+" "+b)
             }
             else{
                 document.write(c+" "+b+" "+a)
             }
         }

        //11
        
        let wiek1=parseInt(prompt("podaj wiek 1 osoby"))
        let wiek2=parseInt(prompt("podaj wiek 2 osoby"))
        if (wiek1>wiek2)
        {
            document.write("osoba 1 jest starsza od osoby 2")
        }
        else if(wiek1<wiek2)
        {
            document.write("osoba 2 jest starsza od osoby 1")
        }
        else if(wiek1>100&&wiek2>100)
        {
            document.write("starosc nie radosc")
        }
        else
        {
            document.write("obie osoby sa w tym samym wieku")
        }
        
        let a=parseInt(prompt("podaj 1 liczbe"))
        let b=parseInt(prompt("podaj 2 liczbe"))
        let znak=(prompt("podaj znak ktorym przeprowadzisz operacje na tych liczbach (+,-,*,/)"))
        switch(znak)
        {
            case '+':
                let suma=a+b
                document.write("suma tych liczb wynosi :"+suma)
                break;
            case '-':
                let roznica =a-b
                document.write("roznica liczb "+a+" oraz "+b+" wynosi :"+roznica) 
                break;
            case '*':
                let iloczyn =a*b
                document.write("iloczyn tych liczb wynosi :"+iloczyn)
                break;
            case '/':
                let iloraz=a/b
                document.write("iloraz liczb "+a+" oraz "+b+" wynosi :"+iloraz) 
                break;
            default:
                document.write("z takim znakiem nie wykonasz operacji na tych liczbach")
        }
