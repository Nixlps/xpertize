const sections=document.querySelectorAll("section[id]");function navHighlighter(){let e=window.pageYOffset;sections.forEach((t=>{const n=t.offsetHeight,s=t.offsetTop-50;sectionId=t.getAttribute("id"),e>s&&e<=s+n?document.querySelector(".navigation a[href*="+sectionId+"]").classList.add("active"):document.querySelector(".navigation a[href*="+sectionId+"]").classList.remove("active")}))}window.addEventListener("scroll",navHighlighter);var slider=tns({container:".tns",items:1,startIndex:2,fixedWidth:200,center:!0,autoplay:!0,autoplayTimeout:3e3,autoplayButtonOutput:!1,speed:400,controls:!1,nav:!1,responsive:{1023:{disable:!0}}});const productsSelectors=document.querySelectorAll(".product-selectors div"),productsOptions=document.querySelectorAll(".products .product-content");function sendEmail(){var e={name:document.getElementById("name").value,email:document.getElementById("email").value,phone:document.getElementById("phone").value,message:document.getElementById("message").value};const t=document.querySelector(".form-wrapper"),n=document.querySelector(".sucess-msg");emailjs.send("service_im23dxm","template_8zxluep",e).then((e=>{document.getElementById("name").value,document.getElementById("email").value,document.getElementById("phone").value,document.getElementById("message").value,console.log(e),t.style.display="none",n.style.display="flex"})).catch((e=>console.log(e)))}productsSelectors.forEach((e=>{e.addEventListener("click",(t=>{productsSelectors.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"),productsOptions.forEach((t=>{e.classList.contains(t.id)?t.classList.add("active"):t.classList.remove("active")}))}))})),function(e,t){"function"==typeof define&&define.amd?define(t):e.VMasker=t()}(this,(function(){var e=[8,9,16,17,18,36,37,38,39,40,91,92,93],t=function(t){for(var n=0,s=e.length;s>n;n++)if(t==e[n])return!1;return!0},n=function(e){return(e={precision:(e=e||{}).hasOwnProperty("precision")?e.precision:2,separator:e.separator||",",delimiter:e.delimiter||".",unit:e.unit&&e.unit.replace(/[\s]/g,"")+" "||"",suffixUnit:e.suffixUnit&&" "+e.suffixUnit.replace(/[\s]/g,"")||"",zeroCents:e.zeroCents,lastOutput:e.lastOutput}).moneyPrecision=e.zeroCents?0:e.precision,e},s=function(e){this.elements=e};s.prototype.unbindElementToMask=function(){for(var e=0,t=this.elements.length;t>e;e++)this.elements[e].lastOutput="",this.elements[e].onkeyup=!1,this.elements[e].onkeydown=!1,this.elements[e].value.length&&(this.elements[e].value=this.elements[e].value.replace(/\D/g,""))},s.prototype.bindElementToMask=function(e){for(var n=this,s=function(s){var i=(s=s||window.event).target||s.srcElement;t(s.keyCode)&&setTimeout((function(){n.opts.lastOutput=i.lastOutput,i.value=o[e](i.value,n.opts),i.lastOutput=i.value,i.setSelectionRange&&n.opts.suffixUnit&&i.setSelectionRange(i.value.length,i.value.length-n.opts.suffixUnit.length)}),0)},i=0,r=this.elements.length;r>i;i++)this.elements[i].lastOutput="",this.elements[i].onkeyup=s,this.elements[i].value.length&&(this.elements[i].value=o[e](this.elements[i].value,this.opts))},s.prototype.maskMoney=function(e){this.opts=n(e),this.bindElementToMask("toMoney")},s.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},s.prototype.maskPattern=function(e){this.opts={pattern:e},this.bindElementToMask("toPattern")},s.prototype.unMask=function(){this.unbindElementToMask()};var o=function(e){if(!e)throw new Error("VanillaMasker: There is no element to bind.");var t="length"in e?e.length?e:[]:[e];return new s(t)};return o.toMoney=function(e,t){if((t=n(t)).zeroCents){t.lastOutput=t.lastOutput||"";var s="("+t.separator+"[0]{0,"+t.precision+"})",o=new RegExp(s,"g"),i=e.toString().replace(/[\D]/g,"").length||0,r=t.lastOutput.toString().replace(/[\D]/g,"").length||0;e=e.toString().replace(o,""),r>i&&(e=e.slice(0,e.length-1))}for(var l=e.toString().replace(/[\D]/g,""),a=new RegExp("^(0|\\"+t.delimiter+")"),u=new RegExp("(\\"+t.separator+")$"),c=l.substr(0,l.length-t.moneyPrecision),p=c.substr(0,c.length%3),m=new Array(t.precision+1).join("0"),d=0,h=(c=c.substr(c.length%3,c.length)).length;h>d;d++)d%3==0&&(p+=t.delimiter),p+=c[d];if(p=(p=p.replace(a,"")).length?p:"0",!t.zeroCents){var g=l.length-t.precision,f=l.substr(g,t.precision),v=f.length,y=t.precision>v?t.precision:v;m=(m+f).slice(-y)}return(t.unit+p+t.separator+m+t.suffixUnit).replace(u,"")},o.toPattern=function(e,t){var n,s="object"==typeof t?t.pattern:t,o=s.replace(/\W/g,""),i=s.split(""),r=e.toString().replace(/\W/g,""),l=r.replace(/\W/g,""),a=0,u=i.length;for(n=0;u>n;n++){if(a>=r.length){if(o.length==l.length)return i.join("");break}"9"===i[n]&&r[a].match(/[0-9]/)||"A"===i[n]&&r[a].match(/[a-zA-Z]/)||"S"===i[n]&&r[a].match(/[0-9a-zA-Z]/)?i[n]=r[a++]:("9"===i[n]||"A"===i[n]||"S"===i[n])&&(i=i.slice(0,n))}return i.join("").substr(0,n)},o.toNumber=function(e){return e.toString().replace(/(?!^-)[^0-9]/g,"")},o})),VMasker(document.querySelector(".form #phone")).maskPattern("(99)99999-9999");const formBtn=document.querySelector(".form button");formBtn.addEventListener("click",(e=>{e.preventDefault,sendEmail()}));