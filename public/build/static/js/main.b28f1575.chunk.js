(this["webpackJsonptwitter-search-appliction"]=this["webpackJsonptwitter-search-appliction"]||[]).push([[0],{138:function(e,a,l){},139:function(e,a,l){},157:function(e,a,l){},158:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),u=l(12),r=l.n(u),i=(l(72),l(17)),b=l(20),s=l.n(b),c=l(24),v=l(3),o=l(34),m=(l(74),l(75),function(e){var a,l=e.id,t=e.label,u=e.placeholder,r=e.value,i=e.onChange,b=e.errorsMessage,s=void 0===b?null:b,c=e.required,v=void 0!==c&&c,o=e.isTouch;return a="form-control".concat(s&&(void 0!==o&&o)?" invalid":""),n.a.createElement("div",{className:"inputwrapper"},n.a.createElement("label",{className:"textLabel"},v&&n.a.createElement("span",{className:"text-danger"},"*")," ",t," :"),n.a.createElement("input",{autoComplete:"off",id:l,value:r,onChange:i,placeholder:u,className:a}),n.a.createElement("div",{className:"text-input-error-message"},s&&n.a.createElement("small",{className:"text-danger"},s)))}),h=l(60),d=l.n(h),g=(l(76),l(77),function(e){var a=e.handleTimeChange,l=e.date,t=e.minDate,u=e.maxDate,r=e.id,i=e.label;return n.a.createElement("div",{className:"datePickerContainer"},n.a.createElement("label",{className:"textLabel"},i," :"),n.a.createElement("div",{className:"datePicker"},n.a.createElement(d.a,{minDate:t,maxDate:u,dateFormat:"yyyy/MM/dd",id:r,selected:l,onChange:a})))}),p=l(66),f=function(e){var a=e.languages,l=e.languageChangeHandler,t=e.label;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"textLabel"},t," :"),n.a.createElement(p.a,{onChange:l,options:a}))},E=(l(138),function(e){var a=e.color,l=e.text,t=e.onClick,u=e.loading;return n.a.createElement("button",{disabled:u,style:a,className:"button",onClick:t},l)}),k=(l(139),function(e){var a=e.tweets,l=e.onClick,t=e.createTweetsTable;return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Body"),n.a.createElement("th",null,"Retweets"))),n.a.createElement("tbody",null,t(a,l))))}),w=l(63),y=l.n(w).a.create({baseURL:"http://ec2-18-185-92-148.eu-central-1.compute.amazonaws.com/api"}),N=function(){var e=Object(c.a)(s.a.mark((function e(a){var l,t,n,u,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=a.url,t=a.method,n=a.payload,u=void 0===n?null:n,e.prev=1,"GET"!==t){e.next=9;break}return e.next=5,y.get(l,u);case 5:return r=e.sent,e.abrupt("return",r);case 9:return e.next=11,y.post(l,u);case 11:return r=e.sent,e.abrupt("return",r);case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(a){return e.apply(this,arguments)}}(),C=l(64),S=l.n(C),T=function(e){var a=new Date(e);return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()},D=function(e){var a=e.languages,l={minDate:new Date(Date.now()-5184e5),maxDate:new Date},u=Object(t.useState)({startDate:l.minDate}),r=Object(i.a)(u,2),b=r[0],h=r[1],d=Object(t.useState)([]),p=Object(i.a)(d,2),w=p[0],y=p[1],C=Object(t.useState)(!1),D=Object(i.a)(C,2),x=D[0],j=D[1],O=Object(t.useState)(!1),L=Object(i.a)(O,2),M=L[0],A=L[1],z=function(e,a){return h(Object(o.a)({},b,Object(v.a)({},a,e)))},B=function(){var e=Object(c.a)(s.a.mark((function e(){var a,l,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={hashtag:b.hashtag,startDate:T(b.startDate),endDate:b.endDate?T(b.endDate):null,reqData:["id_str","text","user","created_at","retweet_count"],language:b.language},l={url:"tweeter/tweets",method:"POST",payload:a},e.prev=2,A(!0),e.next=6,N(l);case 6:if(t=e.sent,!(n=t.data.filteredTweets).length){e.next=13;break}return A(!1),e.abrupt("return",y(n));case 13:return A(!1),y([]),e.abrupt("return",j(!0));case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(2),e.t0;case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),K=function(e){var a=document.getElementById("embedTweet");if("string"===typeof e.id_str)return a.innerHTML="",window.twttr.widgets.createTweet(e.id_str,a,{theme:"dark"})},I=b.hashtag,P=void 0===I?"":I,F=b.startDate,G=b.endDate,q=void 0===G?null:G;b.language;return n.a.createElement("div",{className:"twitterPageContainer"},n.a.createElement("div",{className:"twitterPageTitle"},n.a.createElement("h4",null,"Twitter Search App"),n.a.createElement("div",{className:"logoWrapper"},n.a.createElement("img",{src:S.a}))),n.a.createElement("div",{className:"formContainer"},n.a.createElement("form",{className:"searchTweetsForm",onSubmit:function(e){return e.preventDefault()}},n.a.createElement("div",{className:"hashtagInputContainer"},n.a.createElement(m,{errorsMessage:P.errorsMessage,isTouch:!!P&&P.isTouch,validation:{isRequired:!0,minLength:1},onChange:function(e){return function(e,a){var l=e.target,t=l.id,n=l.value,u=function(e,a,l){var t=null;return l?(l.isRequired&&""===a.trim()&&(t="".concat(e," field is require")),l.minLength&&a.length<l.minLength&&(t="".concat(e," Required min ").concat(l.minLength)),l.maxLength&&a.length>l.maxLength&&(t="".concat(e," Required max length ").concat(l.maxLength)),l.isString&&"string"!==typeof a&&(t="".concat(e," is Not a Text")),t):t}(t,n,a);return h(Object(o.a)({},b,Object(v.a)({},t,{errorsMessage:u,value:n,isTouch:!0})))}(e,{isRequired:!0,minLength:1})},label:"Hashtag",placeholder:"#",id:"hashtag",type:"text",value:P&&P.value})),n.a.createElement("div",{className:"dateContainer"},n.a.createElement(g,{minDate:l.minDate,maxDate:q||l.maxDate,label:"Start Date",id:"startDate",handleTimeChange:function(e){return z(e,"startDate")},date:F}),n.a.createElement(g,{minDate:F||l.minDate,maxDate:l.maxDate,label:"End Date",id:"endDate",handleTimeChange:function(e){return z(e,"endDate")},date:q})),n.a.createElement("div",{className:"selectContainer"},n.a.createElement("div",{className:"selectLang"},n.a.createElement(f,{label:"Language",languageChangeHandler:function(e){console.log(e),h(Object(o.a)({},b,Object(v.a)({},"language",e.value)))},languages:a})),n.a.createElement("div",{className:"buttonContainer"},n.a.createElement(E,{loading:M,onClick:B,text:"Search"}))))),w.length?n.a.createElement("div",{className:"tweetsContainer"},n.a.createElement("div",{className:"tableContainer"},n.a.createElement(k,{formatDateForQuery:T,createTweetsTable:function(e){return e.map((function(e){var a=[];for(var l in e)switch(l){case"user":a[0]=n.a.createElement("td",{key:e[l]},e[l]);break;case"created_at":a[1]=n.a.createElement("td",{key:e[l]},T(e[l]));case"text":a[2]=n.a.createElement("td",{key:e[l]},e[l]);break;case"retweet_count":a[3]=n.a.createElement("td",{key:e[l]},e[l])}return n.a.createElement("tr",{key:e.id_str,onClick:function(){return K(e)}},[].concat(a))}))},onClick:K,tweets:w})),n.a.createElement("div",{className:"embedTweetWrapper"},n.a.createElement("div",{className:"embedTweet",id:"embedTweet"}))):x?n.a.createElement("div",{className:"noTweets"},n.a.createElement("p",null,"Sorry no Tweets found try use other tags or remove date and language filter"," ")):null,M&&n.a.createElement("div",{style:{marginTop:"20px",textAlign:"center"}},n.a.createElement("h1",null,"LOADING..... PLEASE WAIT")))},x=l(65);l(157);var j=function(){var e=Object(t.useState)([]),a=Object(i.a)(e,2),l=a[0],u=a[1];return Object(t.useEffect)((function(){var e=JSON.parse(JSON.stringify(x));console.log(e),u(e)}),[]),console.log(l),n.a.createElement("div",{className:"appContainer"},n.a.createElement(D,{languages:l}))};r.a.render(n.a.createElement(t.Suspense,{fallback:n.a.createElement("div",null,"Loading ~~~")},n.a.createElement(j,null)),document.getElementById("root"))},64:function(e,a,l){e.exports=l.p+"static/media/twitter-logo.87dfb9b3.png"},65:function(e){e.exports=JSON.parse('[{"value":"ab","label":"Abkhaz"},{"value":"aa","label":"Afar"},{"value":"af","label":"Afrikaans"},{"value":"ak","label":"Akan"},{"value":"sq","label":"Albanian"},{"value":"am","label":"Amharic"},{"value":"ar","label":"Arabic"},{"value":"an","label":"Aragonese"},{"value":"hy","label":"Armenian"},{"value":"as","label":"Assamese"},{"value":"av","label":"Avaric"},{"value":"ae","label":"Avestan"},{"value":"ay","label":"Aymara"},{"value":"az","label":"Azerbaijani"},{"value":"bm","label":"Bambara"},{"value":"ba","label":"Bashkir"},{"value":"eu","label":"Basque"},{"value":"be","label":"Belarusian"},{"value":"bn","label":"Bengali; Bangla"},{"value":"bh","label":"Bihari"},{"value":"bi","label":"Bislama"},{"value":"bs","label":"Bosnian"},{"value":"br","label":"Breton"},{"value":"bg","label":"Bulgarian"},{"value":"my","label":"Burmese"},{"value":"ca","label":"Catalan; Valencian"},{"value":"ch","label":"Chamorro"},{"value":"ce","label":"Chechen"},{"value":"ny","label":"Chichewa; Chewa; Nyanja"},{"value":"zh","label":"Chinese"},{"value":"cv","label":"Chuvash"},{"value":"kw","label":"Cornish"},{"value":"co","label":"Corsican"},{"value":"cr","label":"Cree"},{"value":"hr","label":"Croatian"},{"value":"cs","label":"Czech"},{"value":"da","label":"Danish"},{"value":"dv","label":"Divehi; Dhivehi; Maldivian;"},{"value":"nl","label":"Dutch"},{"value":"dz","label":"Dzongkha"},{"value":"en","label":"English"},{"value":"eo","label":"Esperanto"},{"value":"et","label":"Estonian"},{"value":"ee","label":"Ewe"},{"value":"fo","label":"Faroese"},{"value":"fj","label":"Fijian"},{"value":"fi","label":"Finnish"},{"value":"fr","label":"French"},{"value":"ff","label":"Fula; Fulah; Pulaar; Pular"},{"value":"gl","label":"Galician"},{"value":"ka","label":"Georgian"},{"value":"de","label":"German"},{"value":"el","label":"Greek, Modern"},{"value":"gn","label":"Guaran\xc3\xad"},{"value":"gu","label":"Gujarati"},{"value":"ht","label":"Haitian; Haitian Creole"},{"value":"ha","label":"Hausa"},{"value":"he","label":"Hebrew (modern)"},{"value":"hz","label":"Herero"},{"value":"hi","label":"Hindi"},{"value":"ho","label":"Hiri Motu"},{"value":"hu","label":"Hungarian"},{"value":"ia","label":"Interlingua"},{"value":"id","label":"Indonesian"},{"value":"ie","label":"Interlingue"},{"value":"ga","label":"Irish"},{"value":"ig","label":"Igbo"},{"value":"ik","label":"Inupiaq"},{"value":"io","label":"Ido"},{"value":"is","label":"Icelandic"},{"value":"it","label":"Italian"},{"value":"iu","label":"Inuktitut"},{"value":"ja","label":"Japanese"},{"value":"jv","label":"Javanese"},{"value":"kl","label":"Kalaallisut, Greenlandic"},{"value":"kn","label":"Kannada"},{"value":"kr","label":"Kanuri"},{"value":"ks","label":"Kashmiri"},{"value":"kk","label":"Kazakh"},{"value":"km","label":"Khmer"},{"value":"ki","label":"Kikuyu, Gikuyu"},{"value":"rw","label":"Kinyarwanda"},{"value":"ky","label":"Kyrgyz"},{"value":"kv","label":"Komi"},{"value":"kg","label":"Kongo"},{"value":"ko","label":"Korean"},{"value":"ku","label":"Kurdish"},{"value":"kj","label":"Kwanyama, Kuanyama"},{"value":"la","label":"Latin"},{"value":"lb","label":"Luxembourgish, Letzeburgesch"},{"value":"lg","label":"Ganda"},{"value":"li","label":"Limburgish, Limburgan, Limburger"},{"value":"ln","label":"Lingala"},{"value":"lo","label":"Lao"},{"value":"lt","label":"Lithuanian"},{"value":"lu","label":"Luba-Katanga"},{"value":"lv","label":"Latvian"},{"value":"gv","label":"Manx"},{"value":"mk","label":"Macedonian"},{"value":"mg","label":"Malagasy"},{"value":"ms","label":"Malay"},{"value":"ml","label":"Malayalam"},{"value":"mt","label":"Maltese"},{"value":"mi","label":"M\xc4ori"},{"value":"mr","label":"Marathi (Mar\xc4\xe1\xb9\xadh\xc4\xab)"},{"value":"mh","label":"Marshallese"},{"value":"mn","label":"Mongolian"},{"value":"na","label":"Nauru"},{"value":"nv","label":"Navajo, Navaho"},{"value":"nb","label":"Norwegian Bokm\xc3\xa5l"},{"value":"nd","label":"North Ndebele"},{"value":"ne","label":"Nepali"},{"value":"ng","label":"Ndonga"},{"value":"nn","label":"Norwegian Nynorsk"},{"value":"no","label":"Norwegian"},{"value":"ii","label":"Nuosu"},{"value":"nr","label":"South Ndebele"},{"value":"oc","label":"Occitan"},{"value":"oj","label":"Ojibwe, Ojibwa"},{"value":"cu","label":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{"value":"om","label":"Oromo"},{"value":"or","label":"Oriya"},{"value":"os","label":"Ossetian, Ossetic"},{"value":"pa","label":"Panjabi, Punjabi"},{"value":"pi","label":"P\xc4li"},{"value":"fa","label":"Persian (Farsi)"},{"value":"pl","label":"Polish"},{"value":"ps","label":"Pashto, Pushto"},{"value":"pt","label":"Portuguese"},{"value":"qu","label":"Quechua"},{"value":"rm","label":"Romansh"},{"value":"rn","label":"Kirundi"},{"value":"ro","label":"Romanian, [])"},{"value":"ru","label":"Russian"},{"value":"sa","label":"Sanskrit (Sa\xe1\xb9sk\xe1\xb9\u203ata)"},{"value":"sc","label":"Sardinian"},{"value":"sd","label":"Sindhi"},{"value":"se","label":"Northern Sami"},{"value":"sm","label":"Samoan"},{"value":"sg","label":"Sango"},{"value":"sr","label":"Serbian"},{"value":"gd","label":"Scottish Gaelic; Gaelic"},{"value":"sn","label":"Shona"},{"value":"si","label":"Sinhala, Sinhalese"},{"value":"sk","label":"Slovak"},{"value":"sl","label":"Slovene"},{"value":"so","label":"Somali"},{"value":"st","label":"Southern Sotho"},{"value":"az","label":"South Azerbaijani"},{"value":"es","label":"Spanish; Castilian"},{"value":"su","label":"Sundanese"},{"value":"sw","label":"Swahili"},{"value":"ss","label":"Swati"},{"value":"sv","label":"Swedish"},{"value":"ta","label":"Tamil"},{"value":"te","label":"Telugu"},{"value":"tg","label":"Tajik"},{"value":"th","label":"Thai"},{"value":"ti","label":"Tigrinya"},{"value":"bo","label":"Tibetan Standard, Tibetan, Central"},{"value":"tk","label":"Turkmen"},{"value":"tl","label":"Tagalog"},{"value":"tn","label":"Tswana"},{"value":"to","label":"Tonga (Tonga Islands)"},{"value":"tr","label":"Turkish"},{"value":"ts","label":"Tsonga"},{"value":"tt","label":"Tatar"},{"value":"tw","label":"Twi"},{"value":"ty","label":"Tahitian"},{"value":"ug","label":"Uyghur, Uighur"},{"value":"uk","label":"Ukrainian"},{"value":"ur","label":"Urdu"},{"value":"uz","label":"Uzbek"},{"value":"ve","label":"Venda"},{"value":"vi","label":"Vietlabelse"},{"value":"vo","label":"Volap\xc3\xbck"},{"value":"wa","label":"Walloon"},{"value":"cy","label":"Welsh"},{"value":"wo","label":"Wolof"},{"value":"fy","label":"Western Frisian"},{"value":"xh","label":"Xhosa"},{"value":"yi","label":"Yiddish"},{"value":"yo","label":"Yoruba"},{"value":"za","label":"Zhuang, Chuang"},{"value":"zu","label":"Zulu"}]')},67:function(e,a,l){e.exports=l(158)},72:function(e,a,l){},74:function(e,a,l){},75:function(e,a,l){},77:function(e,a,l){}},[[67,1,2]]]);
//# sourceMappingURL=main.b28f1575.chunk.js.map