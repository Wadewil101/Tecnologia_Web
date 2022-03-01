function Temperatura()
{
    var numero1 = parseFloat(document.getElementById('Temper').value);
    if (numero1<=15 ) {
         resultado = "Frio";
    } 
    else if (numero1>14|| numero1<=25) {
        resultado = "Templado";
    } 
     if (numero1>=26) {
        resultado = "Calor";
    } 
    document.getElementById('result').value = resultado
}
// Ejercicio 2
 
function factorial (){
    var factorial = 1;
 
        for (var i=1; i <= document.getElementById ('nume1').value; i++){
            factorial *= i;
        }
 
        
        document.getElementById ('exto').innerHTML=`el factorial de ${i-1} es ${factorial}`;
    }

// Ejercicio 3
function fizzbuzz() {
    var display = document.getElementById('disp');
    document.write("ALGORITMO FIZZ BUZZ", "<br>Este algoritmo se basa en que se debe hacer un contador desde el número 1 al número 100, en orden correlativo, pero cada vez que un número sea múltiplo de 3, debe decir Fizz y cada vez que un número sea múltiplo de 5, debe decir Buzz, en el caso que un número sea múltiplo de 3 y 5, debe decir FizzBuzz, si el número no","<br>");
  
    for (i = 1; i < 101; i = i +1){
        if (i % 3 == 0 && i % 5 == 0){
            document.write(i,".-FizzBuzz", "<br>");
        }
        else if (i % 3 == 0){
            document.write(i,".-Fizz", "<br>");
        }
        else if (i % 5 == 0){
            document.write(i,".-Buzz", "<br>");
        }
        else{
            document.write(i, ".-<br>");
        }
    }
    
  }
  //Ejercicio 4
  function Fecha ()
  {
      var fecha = new Date();
      var diaSemana = fecha.getDay();
      var dia = fecha.getDate();
      var mes = fecha.getMonth();
      var año = fecha.getFullYear();
  
      var dia_semana = document.getElementById('fecha_actual');
      var fdia = document.getElementById('fecha_actual');
      var fmes = document.getElementById('fecha_actual');
      var faño = document.getElementById('fecha_actual');
     
      var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
      dia_semana = semana[diaSemana];
      fdia = dia;  
      var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Juio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
      fmes = meses[mes];
      faño = año; 
      var res= dia_semana+", "+fdia+" de "+fmes+" "+" del "+ faño;
      document.getElementById('fecha_actual').value= res;
  }