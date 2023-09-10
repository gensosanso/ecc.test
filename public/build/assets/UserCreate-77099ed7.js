import{j as E,r as S,b as u,o as l,c as r,d as e,e as U,f as a,h as d,C as V,D as i,H as N,F as C,k as M,i as p,E as c,I as f,G as F,t as D}from"./app-2c444acf.js";import{E as B,d as G}from"./index-32190f06.js";import{u as P}from"./useAuth-71311202.js";import"./vue.runtime.esm-bundler-fc9d968a.js";import"./index-1dd2f180.js";const j={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},z={class:"z-0 w-full p-4"},A=e("div",{class:"flex w-full justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Add User ")],-1),I={class:"mx-auto w-full bg-white p-6"},R={class:"w-full"},T=e("label",null,"Type de profil",-1),$=["value"],H={class:"w-full mt-3"},L={key:0},O={key:1},q={key:2},J={key:3},K={key:4},Q={key:0,class:"w-full mt-3"},W=e("label",null,"Prénom du Fidele",-1),X={key:1,class:"w-full mt-3"},Y=e("label",null,"Chargé paroissial",-1),Z={class:"flex mt-1 items-center space-x-2"},ee=e("label",{for:"yes"},"Oui",-1),se=e("label",{for:"no"},"Non",-1),oe={class:"w-full mt-3"},te=e("label",null,"Adresse mail",-1),le={class:"w-full mt-3"},re=e("label",null,"Mot de passe",-1),ae={class:"relative mt-1"},ie=["type"],ne=["disabled"],de={key:1},he={__name:"UserCreate",setup(ue){const n=E(!1),{errors:_,loading:m,createUser:y,isFinish:h,cleanErrors:b}=P(),w=[{id:"faithful",name:"Fidele"},{id:"prayerGroup",name:"Groupe de prière"},{id:"parish",name:"Paroisse"},{id:"diocese",name:"Diocèse"},{id:"seat",name:"Siège"}],s=S({username:"",lastname:"",email:"",password:"",parish_official:!1,user_type:"faithful"}),g=async()=>{await y({...s})};return(pe,t)=>{const v=u("Error"),x=u("RegisterSuccess"),k=u("Spin");return l(),r("div",j,[e("div",z,[A,e("section",I,[U(v,{errors:a(_),onCleanErrors:a(b)},null,8,["errors","onCleanErrors"]),a(h)?(l(),d(x,{key:0})):(l(),r("form",{key:1,class:"flex flex-col w-full py-3 px-4",onSubmit:t[8]||(t[8]=V(o=>g(),["prevent"]))},[e("div",R,[T,i(e("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.user_type=o),class:"form-select p-2 outline-none mt-1 border block border-gray-300 rounded-lg shadow-sm w-full"},[(l(),r(C,null,M(w,o=>e("option",{key:o.id,value:o.id},D(o.name),9,$)),64))],512),[[N,s.user_type]])]),e("div",H,[e("label",null,[s.user_type==="faithful"?(l(),r("span",L,"Nom du Fidele")):s.user_type==="parish"?(l(),r("span",O,"Nom de la Paroisse")):s.user_type==="prayerGroup"?(l(),r("span",q,"Nom du groupe de prière")):s.user_type==="diocese"?(l(),r("span",J,"Nom du diocèse")):s.user_type==="seat"?(l(),r("span",K,"Nom du Siège")):p("",!0)]),i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.username=o),class:"border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full",type:"text",placeholder:"Ex: Marc"},null,512),[[c,s.username]])]),s.user_type==="faithful"?(l(),r("div",Q,[W,i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.lastname=o),class:"border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full",type:"text",placeholder:"Ex: Emmanuel"},null,512),[[c,s.lastname]])])):p("",!0),s.user_type==="faithful"?(l(),r("div",X,[Y,e("div",Z,[i(e("input",{type:"radio",class:"form-radio border-gray-300",id:"yes","onUpdate:modelValue":t[3]||(t[3]=o=>s.parish_official=o),value:!0},null,512),[[f,s.parish_official]]),ee,i(e("input",{type:"radio",class:"form-radio border-gray-300",id:"no","onUpdate:modelValue":t[4]||(t[4]=o=>s.parish_official=o),value:!1},null,512),[[f,s.parish_official]]),se])])):p("",!0),e("div",oe,[te,i(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.email=o),class:"border-gray-300 border form-input p-2 mt-1 outline-none block rounded-lg shadow-sm w-full",type:"email",placeholder:"Ex: nom@xyz.com"},null,512),[[c,s.email]])]),e("div",le,[re,e("div",ae,[i(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>s.password=o),class:"border-gray-300 border form-input py-2 pr-10 outline-none block rounded-lg shadow-sm w-full",type:n.value?"text":"password",placeholder:"8+ caracteres"},null,8,ie),[[F,s.password]]),e("span",{class:"absolute top-3 right-4 cursor-pointer",onClick:t[7]||(t[7]=o=>n.value=!n.value)},[n.value?(l(),d(a(G),{key:1,class:"w-5 h-5 text-gray-500"})):(l(),d(a(B),{key:0,class:"w-5 h-5 text-gray-500"}))])])]),e("button",{type:"submit",disabled:a(m),class:"p-2 mt-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 disabled:bg-blue-300 text-white font-semibold cursor-pointer flex items-center justify-center"},[a(m)?(l(),d(k,{key:0})):(l(),r("span",de,"S'inscrire"))],8,ne)],32))])])])}}};export{he as default};
