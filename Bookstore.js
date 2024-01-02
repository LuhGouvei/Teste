let day;
switch (new Date().getDay()) {
  case 0:
    day = "domingo";
    break;
  case 1:
    day = "segunda";
    break;
  case 2:
    day = "terça";
    break;
  case 3:
    day = "quarta";
    break;
  case 4:
    day = "quinta";
    break;
  case 5:
    day = "sexta";
    break;
  case  6:
    day = "sábado";
    break;
  default:
     day = "unknown";
}

document.getElementById("demo").innerHTML = "Bem vindo (a), hoje é " + day  +  "🐾";