var spinner = "<span class='spinner'></span>";
var pageAtual = 1;
var mmI = 0;

function nextstep(step) {
  switch (pageAtual) {
    case 1:
      console.log(pageAtual);
      var nomeU = $("#nome").val();
      var idadU = $("#idade").val();
      if (nomeU != null && nomeU != "" && idadU != null && idadU != "") {
        localStorage.setItem("nome", nomeU);
        localStorage.setItem("idade", idadU);
        if (idadU < 18) {
          mmI = 2;
        } else {
          mmI = 1;
        }
        console.log("start animation");
        $(".btnNext").toggleClass('loading').html(spinner);
        $("#msg").text("");
        setTimeout(() => {
          console.log("Redirecionado");
          $(".btnNext").toggleClass('loading').text("Continuar");
          $("#formulario1").hide();
          $("#formulario2" + mmI).show();
          if (mmI == 1) {
            $("#bothelp").text("Olá " + nomeU + ", estamos felizes do seu desejo em fazer uma doação, para continuar escolha a forma como deseja doar, se tiver duvidas, pode ler o nosso FAQ no fim dessa página.")
          } else {
            $("#bothelp").text("Olá " + nomeU + ", estamos felizes do seu desejo em fazer uma doação, mas por ser menor de idade, por favor, informe os dados do seu responsavel, depois escolha a forma de doação. Em caso de dúvidas leia o nosso FAQ no fim dessa página.")
          }
        }, 750);
        pageAtual += step;
      } else {
        M.toast({html: 'Preencha todos os campos', classes: 'rounded'});
      }
      break;
    case 2:
      console.log(pageAtual);
      if (mmI == 1) {
        var tipDonate = $("#tipDnate1").val();
        if (tipDonate != null && tipDonate != "") {
          console.log(tipDonate);
          console.log("start animation");
          $(".btnNext").toggleClass('loading').html(spinner);
          $("#msg").text("");
          setTimeout(() => {
            console.log("Redirecionado for 3");
            $(".btnNext").toggleClass('loading').text("Finalizar");
            $("#formulario21").hide();
            switch (tipDonate) {
              case "1":
                $("#bothelp").text("A doação de alimentos é feita de forma presencial, informe sua cidade e escolha um local para doação, e reserve um horário. ");
                $("#formulario31").show();
                localStorage.setItem("valueFIN", "1");
                break;
              case "2":
                $("#bothelp").text("A doação de Materiais de limpeza é feita de forma presencial, informe sua cidade e escolha um local para doação, e reserve um horário. ");
                $("#formulario32").show();
                localStorage.setItem("valueFIN", "2");
                break;
              case "3":
                $("#bothelp").text("A doação de Dinheiro pode ser feita de forma presencial, ou de forma online. ");
                $("#formulario33").show();
                localStorage.setItem("valueFIN", "3");
                break;
              case "4":
                $("#bothelp").text("Para se torna voluntário em uma das instituições, preecha o formulario abaixo e em breve a instituição irá entra em contao com você.");
                $("#formulario34").show();
                localStorage.setItem("valueFIN", "4");
                break;
            }
          }, 1000);
          pageAtual += step;
        } else {
          M.toast({html: 'Preencha todos os campos', classes: 'rounded'});
        }
      } else {
        var tipDonate = $("#tipDnate2").val();
        var nomeRes = $("#nomeR").val();
        var cpfRes = $("#CPFr").val();
        var formFin = 0;
        if (tipDonate != null && tipDonate != "" && nomeRes != null && nomeRes != "" && cpfRes != null && cpfRes != "") {
          console.log("start animation");
          $(".btnNext").toggleClass('loading').html(spinner);
          $("#msg").text("");
          setTimeout(() => {
            console.log("Redirecionado");
            $(".btnNext").toggleClass('loading').text("Finalizar");
            $("#formulario22").hide();
            switch (tipDonate) {
              case "1":
                $("#bothelp").text("A doação de alimentos é feita de forma presencial, informe sua cidade e escolha um local para doação, e reserve um horário. ");
                $("#formulario31").show();
                break;
              case "2":
                $("#bothelp").text("A doação de Materiais de limpeza é feita de forma presencial, informe sua cidade e escolha um local para doação, e reserve um horário. ");
                localStorage.setItem("valueFIN", "2");
                formFin = 2;
                break;
              case "3":
                $("#bothelp").text("A doação de Dinheiro pode ser feita de forma presencial, ou de forma online. ");
                $("#formulario33").show();
                localStorage.setItem("valueFIN", "3");
                break;
              case "4":
                $("#bothelp").text("Para se torna voluntário em uma das instituições, preecha o formulario abaixo e em breve a instituição irá entra em contao com você.");
                $("#formulario34").show();
                localStorage.setItem("valueFIN", "4");
                break;
            }
          }, 1000);
          pageAtual += step;
        } else {
          M.toast({html: 'Preencha todos os campos', classes: 'rounded'});
        }
      }
      break;
    case 3:
      var formFin = localStorage.getItem("valueFIN");
      var estado = $("#est" + formFin).val();
      var cidade = $("#cid" + formFin).val();
      var email = $("#ema" + formFin).val();
      var valueDoante = $("#money3").val();
      if (estado != null && estado != "" && cidade != null && cidade != "" && email != null && email != "") {

        localStorage.setItem("email", email);
        localStorage.setItem("donate", valueDoante);
        localStorage.setItem("est", estado);
        localStorage.setItem("cid", cidade);

        $(".btnNext").toggleClass('loading').html(spinner);
        $("#msg").text("");

        setTimeout(() => {
          console.log("Redirecionado");
          $(".btnNext").hide('loading');
          $("#formulario31").hide();
          $("#formulario32").hide();
          $("#formulario33").hide();
          $("#formulario34").hide();

          $("#formulario4").show();
        }, 500);
        pageAtual += step;
      } else {
        M.toast({html: 'Preencha todos os campos', classes: 'rounded'});
      }
      break;
  }

}



/* maps */
var localesMaps = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014.7971198795386!2d-59.977028494712876!3d-3.1002288287758057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c052af27c2365%3A0x1d25daa968addbd5!2sUFAM!5e1!3m2!1spt-BR!2sbr!4v1587157720257!5m2!1spt-BR!2sbr",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.4021755745047!2d-60.02382319381925!3d-3.0926815370429575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1aa7ae4c4e6b%3A0x3861f347c0465da8!2sEscola%20Normal%20Superior%20-%20UEA!5e1!3m2!1spt-BR!2sbr!4v1587158052273!5m2!1spt-BR!2sbr"
  //adicione os endereçoes de doação de alimentos
];
var localesMapsName = [
  "UFAM",
  "UEA"
  //adicione os nomes da intituição dos endereçoes de doação de alimentos
];
var localesMapsDesc = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Uma breve descrição da intituição de coleta para a tab 01 e do endereço 02."
  //uma breve descrição da instituiçãod e doação
];
var localesMapsData = [
  "16/04/2019",
  "17/04/2020"
  //adicione as datas de ingresso da intituição doação de alimentos
];
var largura12 = $(".mapsViewW12").width();

function printLocales(localPprint) {
  for (let contL = 0; contL <= (localesMaps.length - 1); contL++) {
    if (contL == 0) {
      $("#tabs").append("<li class='tab col s3'><a class='active' href='#tabl" + contL + "'>" + localesMapsName[contL] + "</a></li>");
    } else {
      $("#tabs").append("<li class='tab col s3'><a  href='#tabl" + contL + "'>" + localesMapsName[contL] + "</a></li>");
    };
    $("#printMaps" + localPprint).append("<div id='tabl" + contL + "' class='col s12 center'><div class='lineInfoTabs'><div class='row'><div class='col s8'><p>" + localesMapsDesc[contL] + "</p></div><div class='col s4'><span>" + localesMapsData[contL] + "</span></div></div></div><div class='mapsView12'> <iframe src='" + localesMaps[contL] + "' width='" + largura12 + "' height='300' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe> </div></div>");
  }
}
//tabs
