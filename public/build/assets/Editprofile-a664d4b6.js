import{j as d,A as b,B as v,r as y,s as w,o as t,c as a,d as e,i as u,D as i,E as p,H as x,F as h,k,f as E,I as _,t as N}from"./app-2c444acf.js";import{a as V}from"./index-1dd2f180.js";import{u as M}from"./useAuth-71311202.js";function R(){const r=d([]),c=b(),m=v(),s=d(!1),f=d(!1),l=d([]);return d([]),{roles:l,errors:r,getRoles:async()=>{r.value=[],s.value=!0,await V.get("/users-permissions/roles").then(n=>{l.value=n.data.roles}).catch(n=>{s.value=!1,n.response.status==400?n.response.data.error.details.errors?n.response.data.error.details.errors.forEach(g=>{r.value.push(g.message)}):r.value.push(n.response.data.error.message):r.value.push(n.response.data.message),c.replace({name:m.name,hash:"#errors"})})},isFinish:f,cleanErrors:()=>{r.value=[]}}}const O={class:"flex items-center justify-center w-full min-h-screen p-3 bg-white"},U={class:"flex flex-col items-center justify-center w-1/2 p-4 h-auto bg-slate-100 rounded-lg shadow"},j=e("div",{class:"relative w-36 h-36 rounded-full overflow-clip shadow"},[e("img",{src:"/assets/bdt.jpg",class:"relative w-full h-full object-cover"}),e("div",{class:"absolute w-6 h-6 rounded-full bg-gray-400"})],-1),F={class:"flex flex-col w-full py-3 px-4"},A={class:"w-full mt-3"},B={class:""},S={key:0},C={key:1},D={key:2},P={key:3},T={key:4},z={key:0,class:"w-full mt-3"},H=e("label",{class:""},"Prénom du Fidele",-1),I={class:"w-full mt-3"},L=e("label",{class:""},"Type de profil",-1),q=["value"],G={key:1,class:"w-full mt-3"},J=e("label",{class:""},"Chargé paroissial",-1),K={class:"flex mt-1 items-center space-x-2"},Q=e("label",{for:"yes"},"Oui",-1),W=e("label",{for:"no"},"Non",-1),X={class:"w-full mt-3"},Y=e("label",{class:""},"Adresse mail",-1),Z=e("input",{class:"p-2 mt-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold cursor-pointer",type:"submit",value:"Modifier"},null,-1),le={__name:"Editprofile",setup(r){d(!1);const{getRoles:c,roles:m}=R();M();const s=y({username:"Sigha",lastname:"Marc",email:"marcsigha@gmail.com",password:"",parishOfficial:1,role:1});return w(async()=>{await c()}),(f,l)=>(t(),a("div",O,[e("div",U,[j,e("form",F,[e("div",A,[e("label",B,[s.role==1?(t(),a("span",S,"Nom du Fidele")):s.role==5?(t(),a("span",C,"Nom de la Paroisse")):s.role==4?(t(),a("span",D,"Nom du groupe de prière ")):s.role==6?(t(),a("span",P,"Nom du diocèse ")):s.role==7?(t(),a("span",T,"Nom du Siège ")):u("",!0)]),i(e("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>s.username=o),class:"border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full",type:"text",placeholder:"Ex: Marc"},null,512),[[p,s.username]])]),s.role==1?(t(),a("div",z,[H,i(e("input",{"onUpdate:modelValue":l[1]||(l[1]=o=>s.lastname=o),class:"border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full",type:"text",placeholder:"Ex: Emmanuel"},null,512),[[p,s.lastname]])])):u("",!0),e("div",I,[L,i(e("select",{"onUpdate:modelValue":l[2]||(l[2]=o=>s.role=o),class:"form-select p-2 outline-none mt-1 border block border-gray-300 rounded-lg shadow-sm w-full"},[(t(!0),a(h,null,k(E(m),o=>(t(),a(h,{key:o.id},[o.name!="Public"&&o.name!="Admin"?(t(),a("option",{key:0,value:o.id},N(o.name),9,q)):u("",!0)],64))),128))],512),[[x,s.role]])]),s.role==1?(t(),a("div",G,[J,e("div",K,[i(e("input",{type:"radio",class:"form-radio border-gray-300",id:"yes","onUpdate:modelValue":l[3]||(l[3]=o=>s.parishOfficial=o),value:{number:1}},null,512),[[_,s.parishOfficial]]),Q,i(e("input",{type:"radio",class:"form-radio border-gray-300",id:"no","onUpdate:modelValue":l[4]||(l[4]=o=>s.parishOfficial=o),value:{number:!1}},null,512),[[_,s.parishOfficial]]),W])])):u("",!0),e("div",X,[Y,i(e("input",{"onUpdate:modelValue":l[5]||(l[5]=o=>s.email=o),class:"border-gray-300 border form-input p-2 mt-1 outline-none block rounded-lg shadow-sm w-full",type:"text",placeholder:"Ex: nom@xyz.com"},null,512),[[p,s.email]])]),Z])])]))}};export{le as default};
