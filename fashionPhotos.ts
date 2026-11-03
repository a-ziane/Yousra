type Crop={src:string,rect:[number,number,number,number]};
const img=(name:string)=>`/images/${name}.jpg`;
const campus=img('campus-linen'),neutral=img('soft-neutrals'),sage=img('summer-sage'),ivory=img('summer-ivory-dress'),rose=img('summer-rose-dress'),stripes=img('summer-stripes');
export const featuredIDs=[1000,1001,1002,1003,0,1];
const covers:{items:number[],src:string}[]=[{items:[0,1,2,3,13],src:campus},{items:[10,7,8,9,6],src:neutral},{items:[1000,1005,2,1001,13],src:sage},{items:[1004,1005,2,1001,13],src:stripes},{items:[1002,8,1001,13],src:ivory},{items:[1003,2,3,6],src:rose}];
export function outfitPhoto(items:number[]){return covers.find(c=>c.items.length===items.length&&c.items.every((id,i)=>items[i]===id))?.src}
export const photoCrops:Record<number,Crop>={
2000:{src:img('malibu-polka-dress'),rect:[0,0,1,1]},2001:{src:img('malibu-polka-dress'),rect:[0,0,1,1]},2002:{src:img('malibu-polka-dress'),rect:[0,0,1,1]},2003:{src:img('malibu-blouse'),rect:[0,0,1,1]},2004:{src:neutral,rect:[.50,.21,.49,.77]},
0:{src:campus,rect:[.025,.01,.52,.68]},1:{src:campus,rect:[.535,.25,.43,.745]},2:{src:stripes,rect:[.71,.055,.28,.43]},3:{src:campus,rect:[.34,.72,.18,.23]},13:{src:campus,rect:[.035,.69,.27,.275]},
10:{src:neutral,rect:[.02,.04,.485,.52]},7:{src:neutral,rect:[.50,.21,.49,.77]},8:{src:neutral,rect:[.48,.025,.265,.45]},9:{src:neutral,rect:[.025,.595,.24,.295]},6:{src:neutral,rect:[.28,.56,.24,.32]},
1000:{src:sage,rect:[.005,.005,.48,.675]},1005:{src:sage,rect:[.37,.19,.43,.79]},1001:{src:sage,rect:[.78,.64,.195,.26]},1002:{src:ivory,rect:[.008,0,.64,.99]},1003:{src:rose,rect:[.055,.005,.59,.99]},1004:{src:stripes,rect:[.015,.035,.435,.68]}
};
const contextual:Record<string,Record<number,[number,number,number,number]>>={
[ivory]:{8:[.605,0,.32,.37],13:[.60,.34,.35,.32],1001:[.665,.675,.23,.295]},
[rose]:{2:[.605,.015,.345,.465],6:[.63,.41,.22,.28],3:[.655,.715,.23,.24]},
[sage]:{2:[.735,.02,.255,.61],13:[.04,.64,.34,.33]},
[stripes]:{1005:[.28,.14,.42,.83],2:[.7,.055,.29,.44],1001:[.075,.725,.185,.23],13:[.67,.505,.325,.37]}
};
export function cropFor(id:number,src?:string):Crop|undefined{const rect=src&&contextual[src]?.[id];return rect?{src:src!,rect}:photoCrops[id]}
