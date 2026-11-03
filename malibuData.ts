export type TripProduct={id:number,name:string,category:string,color:string,hex:string,price:number,store:string,owned?:boolean,preloved?:boolean,size:string,fabric:string,fit:string,season?:string,image?:string};
export const malibuProducts:TripProduct[]=[
{id:2000,name:'Light blue polka-dot summer maxi dress',category:'Dresses',color:'Blue',hex:'#aac9df',price:39,store:'Seaside Studio · sample',size:'M',fabric:'Lined cotton',fit:'Loose · opaque · long sleeves · high neckline',season:'Summer'},
{id:2001,name:'Light blue polka-dot maxi dress — preloved',category:'Dresses',color:'Blue',hex:'#aac9df',price:34,store:'Lina’s closet · sample',preloved:true,size:'M',fabric:'Lined cotton',fit:'Loose · opaque · long sleeves · high neckline',season:'Summer'},
{id:2002,name:'Light blue polka-dot maxi dress — boutique offer',category:'Dresses',color:'Blue',hex:'#aac9df',price:59,store:'Bluebird Modest · sample',size:'M',fabric:'Lined cotton',fit:'Loose · opaque · long sleeves · high neckline',season:'Summer'},
{id:2003,name:'Khadidja’s blush cotton blouse',category:'Tops',color:'Rose',hex:'#cf9caa',price:28,store:'Khadidja’s wardrobe',owned:true,size:'M',fabric:'Cotton',fit:'Loose · opaque · long sleeves · long hem',season:'Summer'},
{id:2004,name:'White cotton maxi skirt',category:'Bottoms',color:'White',hex:'#f5f1e7',price:24,store:'Everyday Edit · sample',size:'M',fabric:'Cotton',fit:'Relaxed · opaque · ankle length',season:'Summer'},
{id:2005,name:'Tan slim waist belt',category:'Accessories',color:'Brown',hex:'#b18b62',price:12,store:'Everyday Edit · sample',size:'M',fabric:'Faux leather',fit:'Adjustable · optional',season:'Summer'}];
export const tripPhoto='/images/malibu-friends.jpg';
export const dressPhoto='/images/malibu-polka-dress.jpg';
export const blousePhoto='/images/malibu-blouse.jpg';
export const MALIBU_QUERY='A light blue polka-dot summer dress for the beach — modest and under $50';
export const wardrobePieces=[{id:2,name:'Cream hijab',category:'Hijab'},{id:8,name:'Rose hijab',category:'Hijab'},{id:1,name:'Blue jeans',category:'Bottoms'},{id:3,name:'White trainers',category:'Shoes'},{id:1001,name:'Tan sandals',category:'Shoes'},{id:6,name:'Espresso bag',category:'Accessories'}];
export const storySteps=[['Find her dress','Search the idea'],['Style her blouse','Start with what she owns'],['Build her looks','Buy only the missing pieces'],['Pack for Malibu','Save, pack, and go']];
export const seedTrip={started:false,stage:0,searched:false,query:MALIBU_QUERY,maxPrice:50,dressId:null as number|null,blouseReady:false,haveSkirt:null as boolean|null,haveBelt:null as boolean|null,useBelt:true,scarf:null as string|null,addTote:false,packed:[] as number[],checked:[] as string[],final:false,likes:['Soft blues','Polka dots','Relaxed fits']};
export type TripState=typeof seedTrip;
export function makeTripLooks(s:TripState){const dress=s.dressId||2000;return[
{id:2100,title:'Malibu beach day',occasion:'Summer',items:[dress,2,1001,...(s.addTote?[13]:[])],note:'The dress she imagined, with her own cream hijab and sandals.'},
{id:2101,title:'Café with the girls',occasion:'Summer',items:[2003,2004,...(s.useBelt!==false&&(s.haveBelt===true||s.haveBelt===false)?[2005]:[]),s.scarf==='Rose hijab'?8:2,1001],note:s.useBelt===false?'Her blush blouse and white maxi skirt, kept relaxed and unbelted.':'Her blush blouse, a white maxi skirt, and a waist belt worn her way.'},
{id:2102,title:'Sunset stroll',occasion:'Summer',items:[2003,1,s.scarf==='Rose hijab'?8:2,3,6],note:'An all-owned look: her blouse, blue jeans, trainers, scarf, and bag.'}
]}
