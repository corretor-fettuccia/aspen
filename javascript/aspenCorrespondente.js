
 
 ////-----------dependencias-------
  $(".real").maskMoney({
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',' });
  
    const format = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL' };
////-----------dependencias-------

//##############################################################################################
// Autor .: Roberto de paula fettuccia                                                         #
// Versão .: 3.0                                                                               #
// ###################################[ AVISO ]#################################################
// este código é de propriedade intelectual de aspen informações cadastrais e cobrança ltda    #
// sua utilização não está autorizada.                                                         #
// 51991413897 - Whatsapp                                                                      #
// 5130313792 - fixo                                                                           #
// negocios@correspondenteaspen.com                                                            #
//##############################################################################################
//VARIAVEIS GLOBAIS - presets
var AlvoCidade='#select1';
var AlvoValorTotal='#campo1';
var AlvoFinanciado='#campo2';
var AlvoFGTS='#campo3';
var AlvoSubsidio='#campo4';
var AlvoEntrada='#campo5';
var AlvoModals='#select2';
var AlvoCampoBanco="#taxabanco";
var AlvoCampoDespachante='#despachante';
var AlvoCampoITBI="#itbi";
var AlvoCampoRegistro="#registro";
var AlvoTotalRecursosBANCO="#totalrecursosbanco";
var AlvoTotalCustos="#todascustas";
//------------------NAO-MEXER-------------------------------
var sistemafinanceiro=0; //variavel global [0]=SFH [1]=SFI
var selectElement = document.querySelector(AlvoCidade); //select CIDADE
var selectElementModalid = document.querySelector(AlvoModals); //select MODALIDADE
var cidadeSelecionada=''; //VALOR EM BRANCO
var outputModalid='';
var ITBIbolean=''; //variavel global ITBI [0]=nao [1]=sim
var VarValorTotalIMOVEL=0;
var VarValorFin=0;
var VarValorFGTS=0;
var VarValorSubsidio=0;
var VarValorEntrada=0;
var VarValorITBI=0;       // valor do itbi 
var VarValorTaxaBANCO=0;   // valor taxa do banco (rel+taxa)
var VarValorREGISTRO=0;   // valor registro
var VarValorDESPACHANTE=0;  // valor despachante
var VarValorRecursosBanco=VarValorFin+VarValorFGTS+VarValorSubsidio;
var VarValorTotalDISPESAS=VarValorITBI+VarValorTaxaBANCO+VarValorREGISTRO+VarValorDESPACHANTE;

//------------------NAO-MEXER-------------------------------
function limpacampos(){
  cidadeSelecionada='';
  ITBIbolean='';
 // document.getElementById(AlvoCampoDespachante).reset();
 // document.getElementById(AlvoCampoBanco).reset();
 // document.getElementById(AlvoCampoITBI).reset();
 // document.getElementById(AlvoCampoRegistro).reset();
}
function leituraParametros(){
  limpacampos();
  cidadeSelecionada = selectElement.options[selectElement.selectedIndex].value;
  outputModalid =  selectElementModalid.options[selectElementModalid.selectedIndex].value;
  VarValorTotalIMOVEL = $(AlvoValorTotal).maskMoney('unmasked')[0]; //VarValorTotalIMOVEL == valor total do imóvel
  VarValorFin = $(AlvoFinanciado).maskMoney('unmasked')[0]; //campo2 == valor financiado
  VarValorFGTS = $(AlvoFGTS).maskMoney('unmasked')[0];
  VarValorSubsidio = $(AlvoSubsidio).maskMoney('unmasked')[0]; //campo4 == 
  VarValorEntrada = $(AlvoEntrada).maskMoney('unmasked')[0]; //campo5 == entrada
  validarmodalidade();
}
function validarmodalidade(){ // INICIO -- VALIDA MODALIDADE
    //seta select da cidade
    //captura o value do select cidade
    //alvo='#campo2';         //campo com valor financiado para calcular taxa do contrato pcva/procotista
    //selectElementModalid = document.querySelector(elemento); // verifica a modalidade setada
    switch (outputModalid) {
      case 'nextStep/ProximosPassos.PCVA.Usado.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcva'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCVA.AqConstrucao.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcva'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCVA.novo.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcva'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCVA.Empreendimento.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcva'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCVA.Leilao.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcva'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCVA.ConstrTerrProprio.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=0;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcva'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;  
      case 'nextStep/ProximosPassos.PCOTISTA.Usado.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcotista'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCOTISTA.AqConstrucao.png': //canoas
        sistemafinanceiro=0;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcotista'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCOTISTA.novo.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcotista'); //precisa passar parametro se pcva ou pró-cotista]
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCOTISTA.Empreendimento.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcotista'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCOTISTA.Leilao.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=1;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcotista'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.PCOTISTA.ConstrTerrProprio.png': //canoas
        sistemafinanceiro=0;
        ITBIbolean=0;
        pcva_pcotista_taxas($(AlvoFinanciado).maskMoney('unmasked')[0],'pcotista'); //precisa passar parametro se pcva ou pró-cotista
        itbicalcular(cidadeSelecionada);
      break;
      case 'nextStep/ProximosPassos.SBPE.Hab.AqConstrucao.png':
        sistemafinanceiro=0;
        ITBIbolean=1;
        produto=1000;
        txcontrato=1200; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.Hab.ConstrTerrProprio.png':
        sistemafinanceiro=0;
        ITBIbolean=0;
        produto=1000;
        txcontrato=1300; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.Hab.Usado.png': 
        sistemafinanceiro=0;
        ITBIbolean=1;
        produto=1000;
        txcontrato=1400; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.Hab.NovoAvulso.png': 
        sistemafinanceiro=0;
        ITBIbolean=1;
        produto=1000;
        txcontrato=1500; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.Hab.NovoEmpreendimento.png': 
        sistemafinanceiro=0;
        ITBIbolean=1;
        produto=1000;
        txcontrato=1600; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.Hab.Leilao.png': 
        sistemafinanceiro=0; //sfh
        ITBIbolean=1;
        produto=1000;
        txcontrato=1700; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.LoteUrbanizado.png':
        sistemafinanceiro=1; //sfi
        ITBIbolean=1; 
        produto=1000;
        txcontrato=1800; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.CRF.png': //nextStep/ProximosPassos.SBPE.Com.Novo.png
        sistemafinanceiro=1;
        ITBIbolean=0;
        window.alert('NAO ESQUECA QUE O IOF DEDUZ DO VALOR FINANCIADO, SALIENTE ISTO COM O CLIENTE!');
        produto=1000;
        txcontrato=1900; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.Com.Novo.png': //nextStep/ProximosPassos.SBPE.Com.Usado.png
        sistemafinanceiro=1;
        ITBIbolean=1;
        window.alert('NAO ESQUECA QUE O IOF DEDUZ DO VALOR FINANCIADO, SALIENTE ISTO COM O CLIENTE!');
        produto=1000;
        txcontrato=1900; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
      case 'nextStep/ProximosPassos.SBPE.Com.Usado.png':
        sistemafinanceiro=1;
        ITBIbolean=1;
        window.alert('NAO ESQUECA QUE O IOF DEDUZ DO VALOR FINANCIADO, SALIENTE ISTO COM O CLIENTE!');
        produto=1000;
        txcontrato=1900; //-----------------ajustar a taxa por tipo de modalidade
        showtaxacontrato(txcontrato,produto);
        itbicalcular(cidadeSelecionada);
        // ---------------------------------falta setar a taxa
      break;
    }
} // FINAL -- VALIDA MODALIDADE

function pcva_pcotista_taxas(Vfinanciado,Vmodalid){ // taxas e produtos para pcva e procotista
  var FatorCCFGTStx='0.015';//taxa pcva e prócotista 1,5% 
  var txcontrato = (Vfinanciado*FatorCCFGTStx); 
  var produto
  if (Vmodalid == 'pcva'){ 
    produto =750; } 
  else {
    produto=1000;
  };
  showtaxacontrato(txcontrato,produto);
}

//funcao que exibe o valor calculado como retorno das demais funcoes - VALOR DAS TAXAS
function showtaxacontrato(txmodal,valproduto){
  VarValorTaxaBANCO=txmodal+valproduto;
  $(AlvoCampoBanco).val((VarValorTaxaBANCO).toLocaleString('pt-BR', format) ); 
}
function showtaxaITBI(impostos){
    showTotaRecursosBanco();
    showTotalcustas();
    $(AlvoCampoITBI).val( (impostos).toLocaleString('pt-BR', format) );
}

function showTotalcustas(){
    VarValorTotalDISPESAS=VarValorITBI+VarValorTaxaBANCO+VarValorREGISTRO+VarValorDESPACHANTE;
    $(AlvoTotalCustos).val( (VarValorTotalDISPESAS).toLocaleString('pt-BR', format) );
}
function showTotaRecursosBanco(){
    VarValorRecursosBanco=VarValorFin+VarValorFGTS+VarValorSubsidio;
    $(AlvoTotalRecursosBANCO).val( (VarValorRecursosBanco).toLocaleString('pt-BR', format) );/////---------------------------------------------asdasdsadasdasdasdsdasd
}

function showtaxaDESPACHANTE(ValorDesp){
    $(AlvoCampoDespachante).val( (ValorDesp).toLocaleString('pt-BR', format) );
}

function  itbicalcular(city){ // INICIO - ITBICALCULAR
  //função que calcula se a operação tratar de aquisicao do bem
  // se itbi==1 calcula imposto itbi==0 nao calcula e atribui 0
  VarValorREGISTRO=VarValorTotalIMOVEL * 0.01;
  $(AlvoCampoRegistro).val((VarValorREGISTRO).toLocaleString('pt-BR', format));
    switch (city) {
      case 'cid.canoas': //canoas
        if (ITBIbolean == '1'){
          if (sistemafinanceiro == 0){
            VarValorITBI=((VarValorFin * 0.005)+((VarValorTotalIMOVEL-VarValorFin)*0.03));
            showtaxaITBI(VarValorITBI);
          }else{
                VarValorITBI=((VarValorTotalIMOVEL)*0.03);
                showtaxaITBI(VarValorITBI);
          }
        }else{
            VarValorITBI=0;
            showtaxaITBI(VarValorITBI);
        }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);    
      break;
      case 'cid.poa': //porto alegre
        if (ITBIbolean == '1'){
           if (sistemafinanceiro == 0){   
            VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
            showtaxaITBI(VarValorITBI);
            }
            else {
                VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                showtaxaITBI(VarValorITBI);  
           }
        }else {
            VarValorITBI=0; //sem itbi
            showtaxaITBI(VarValorITBI);
        }
        VarValorDESPACHANTE=1000;
        showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.nsr': //nova santa rita
          if (ITBIbolean == '1'){
            VarValorITBI=VarValorTotalIMOVEL*0.025;
            showtaxaITBI(VarValorITBI);
          }else{
            VarValorITBI=0;
            showtaxaITBI(VarValorITBI);
          }
          VarValorDESPACHANTE=800;
        showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.esteio': //esteio
      if (ITBIbolean == '1'){
           if (sistemafinanceiro == 0){   
            VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
            showtaxaITBI(VarValorITBI);
            }
            else {
                VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                showtaxaITBI(VarValorITBI);  
           }
        }else {
            VarValorITBI=0; //sem itbi
            showtaxaITBI(VarValorITBI);
        }
        VarValorDESPACHANTE=800;
        showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.sapucaia': //sapucaia do sul
      if (ITBIbolean == '1'){
           if (sistemafinanceiro == 0){   
            VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
            showtaxaITBI(VarValorITBI);
            }
            else {
                VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                showtaxaITBI(VarValorITBI);  
           }
        }else {
            VarValorITBI=0; //sem itbi
            showtaxaITBI(VarValorITBI);
        }
        VarValorDESPACHANTE=800;
        showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.nh': //novo hamburgo
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.viamao': //viamao
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.saoleo': //sao leopoldo
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=1000;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.capao': //capao da canoa
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.xangrila': //xangrila
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.cachoeirinha': //cachoeirinha
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.gravatai': //gravatai
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.gramado': //gramado
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=1200;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.canela': //canela
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=1200;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.osorio': //osorio
        if (ITBIbolean == '1'){
            if (sistemafinanceiro == 0){   
                VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
                showtaxaITBI(VarValorITBI);
                }
                else {
                    VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                    showtaxaITBI(VarValorITBI);  
            }
            }else {
                VarValorITBI=0; //sem itbi
                showtaxaITBI(VarValorITBI);
            }
            VarValorDESPACHANTE=800;
            showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
      case 'cid.tramandai': //tramandai
      if (ITBIbolean == '1'){
           if (sistemafinanceiro == 0){   
            VarValorITBI=(((VarValorFin + VarValorFGTS)* 0.005)+((VarValorTotalIMOVEL-VarValorFin-VarValorFGTS)*0.025));
            showtaxaITBI(VarValorITBI);
            }
            else {
                VarValorITBI=((VarValorTotalIMOVEL-VarValorFin)*0.025);
                showtaxaITBI(VarValorITBI);  
           }
        }else {
            VarValorITBI=0; //sem itbi
            showtaxaITBI(VarValorITBI);
        }
        VarValorDESPACHANTE=800;
        showtaxaDESPACHANTE(VarValorDESPACHANTE);
      break;
  
      }
      
} // FIM - ITBICALCULAR
