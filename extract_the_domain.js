
// https://www.codewars.com/kata/514a024011ea4fb54200004b


function domainName(url){

  const urlWithoutProtocol = url.split("//").length == 1 ? url : url.split("//")[1];
  console.log(urlWithoutProtocol);
  const domainWithSubDomain = urlWithoutProtocol.split("/")[0];
  const domainSplittedWithDot = domainWithSubDomain.split(".");

  const splittedDomainLength = domainSplittedWithDot.length;

  if(domainSplittedWithDot[0] == "www"){
    return domainSplittedWithDot[1];
  }
  return domainSplittedWithDot[0];
}


console.log(domainName("www.xakep.ru"));