// Ilustraciones estilo anime/kawaii originales para MichiGuau.pet
// Funciones: chibi(), ball(), ruffles(), heartPts(), heartPath(), sparkle(), paw(), dots()

const INK='#2e1a3b';
const S=(t,a,inner='')=>{const at=Object.entries(a).map(([k,v])=>`${k}="${v}"`).join(' ');return inner===null?`<${t} ${at}/>`:`<${t} ${at}>${inner}</${t}>`};

// Chibi (anime) animal. type dog|cat. fur, fur2 (ears/patch), eye (iris color)
function chibi({type='dog',x=0,y=0,s=1,fur='#f2c48d',fur2='#b8794a',eye='#5a3a8a',expr='happy',flip=false,extra=''}){
  const sw=7;
  let g='';
  // tail
  if(type==='dog') g+=`<path d="M120 300 q70 -40 60 -110" fill="none" stroke="${INK}" stroke-width="${sw+16}" stroke-linecap="round"/><path d="M120 300 q70 -40 60 -110" fill="none" stroke="${fur}" stroke-width="16" stroke-linecap="round"/>`;
  else g+=`<path d="M120 310 q110 -10 80 -140 q-10 -40 20 -50" fill="none" stroke="${INK}" stroke-width="${sw+18}" stroke-linecap="round"/><path d="M120 310 q110 -10 80 -140 q-10 -40 20 -50" fill="none" stroke="${fur}" stroke-width="18" stroke-linecap="round"/>`;
  // body
  g+=`<ellipse cx="0" cy="290" rx="135" ry="105" fill="${fur}" stroke="${INK}" stroke-width="${sw}"/>`;
  g+=`<ellipse cx="0" cy="310" rx="75" ry="65" fill="#fff" opacity=".85"/>`;
  // paws
  g+=`<ellipse cx="-62" cy="378" rx="42" ry="30" fill="${fur}" stroke="${INK}" stroke-width="${sw}"/><ellipse cx="62" cy="378" rx="42" ry="30" fill="${fur}" stroke="${INK}" stroke-width="${sw}"/>`;
  g+=`<path d="M-72 372 v14 M-52 372 v14 M52 372 v14 M72 372 v14" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
  // ears behind (cat)
  if(type==='cat'){
    g+=`<path d="M-170 -10 L-150 -175 L-40 -105 Z" fill="${fur}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round"/>`;
    g+=`<path d="M170 -10 L150 -175 L40 -105 Z" fill="${fur}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round"/>`;
    g+=`<path d="M-140 -40 L-135 -135 L-70 -95 Z" fill="#ffb3cf"/><path d="M140 -40 L135 -135 L70 -95 Z" fill="#ffb3cf"/>`;
  }
  // head
  g+=`<ellipse cx="0" cy="40" rx="200" ry="170" fill="${fur}" stroke="${INK}" stroke-width="${sw}"/>`;
  // patch / muzzle
  g+=`<ellipse cx="0" cy="110" rx="95" ry="62" fill="#fff8f0"/>`;
  if(type==='dog') g+=`<path d="M-200 30 q20 -120 110 -150 q-40 70 -30 150 z" fill="${fur2}" opacity=".55"/>`;
  // ears (dog) floppy
  if(type==='dog'){
    g+=`<path d="M-150 -90 q-120 10 -105 170 q10 50 60 30 q40 -90 75 -170 z" fill="${fur2}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round"/>`;
    g+=`<path d="M150 -90 q120 10 105 170 q-10 50 -60 30 q-40 -90 -75 -170 z" fill="${fur2}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round"/>`;
  }
  // eyes
  const eyeG=(cx)=>{
    if(expr==='closed') return `<path d="M${cx-38} 40 q38 -34 76 0" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>`;
    if(expr==='serious') return `<path d="M${cx-44} 0 L${cx+40} 14" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>`+
      `<ellipse cx="${cx}" cy="42" rx="34" ry="36" fill="${INK}"/><ellipse cx="${cx}" cy="50" rx="24" ry="24" fill="${eye}"/><circle cx="${cx-10}" cy="32" r="11" fill="#fff"/><circle cx="${cx+12}" cy="60" r="5" fill="#fff"/>`;
    return `<ellipse cx="${cx}" cy="38" rx="40" ry="50" fill="${INK}"/>`+
      `<ellipse cx="${cx}" cy="50" rx="30" ry="36" fill="${eye}"/>`+
      `<ellipse cx="${cx}" cy="62" rx="22" ry="16" fill="#fff" opacity=".25"/>`+
      `<circle cx="${cx-13}" cy="22" r="15" fill="#fff"/><circle cx="${cx+15}" cy="60" r="7" fill="#fff"/>`;
  };
  g+=eyeG(-82)+eyeG(82);
  // blush
  g+=`<ellipse cx="-130" cy="100" rx="32" ry="16" fill="#ff7fb0" opacity=".55"/><ellipse cx="130" cy="100" rx="32" ry="16" fill="#ff7fb0" opacity=".55"/>`;
  g+=`<path d="M-142 96 l8 -10 M-128 96 l8 -10 M118 96 l8 -10 M132 96 l8 -10" stroke="#e0507f" stroke-width="3" stroke-linecap="round"/>`;
  // nose + mouth
  g+=`<path d="M-16 82 q16 -8 32 0 q-6 18 -16 20 q-10 -2 -16 -20z" fill="${INK}"/>`;
  if(expr==='serious') g+=`<path d="M-22 122 q22 -8 44 0" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
  else {
    g+=`<path d="M0 102 v10 M0 112 q-20 22 -38 6 M0 112 q20 22 38 6" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
    if(type==='dog') g+=`<path d="M-14 124 q14 34 28 0 z" fill="#ff6f91" stroke="${INK}" stroke-width="4"/>`;
  }
  // whiskers cat
  if(type==='cat') g+=`<path d="M-110 120 l-80 -6 M-110 135 l-78 14 M110 120 l80 -6 M110 135 l78 14" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
  g+=extra;
  const sx=flip?-s:s;
  return `<g transform="translate(${x} ${y}) scale(${sx} ${s})">${g}</g>`;
}

// ruffle ball (pelota olfativa)
function ball(cx,cy,r,cols){
  let g=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${cols[0]}" stroke="${INK}" stroke-width="7"/>`;
  const rings=[[0.82,18],[0.58,14],[0.33,9]];
  rings.forEach(([f,n],ri)=>{for(let i=0;i<n;i++){const a=i/n*Math.PI*2+ri*0.3;const px=cx+Math.cos(a)*r*f,py=cy+Math.sin(a)*r*f;
    g+=`<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="${(r*0.17).toFixed(1)}" ry="${(r*0.27).toFixed(1)}" transform="rotate(${(a*180/Math.PI+90).toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)})" fill="${cols[(i+ri)%cols.length]}" stroke="${INK}" stroke-width="4"/>`;}});
  g+=`<circle cx="${cx}" cy="${cy}" r="${r*0.14}" fill="${cols[2]}" stroke="${INK}" stroke-width="4"/>`;
  return g;
}
// ruffle mat (rect or heart) - fill area with ruffles
function ruffles(points,cols,rr=26){
  return points.map(([x,y],i)=>`<path d="M${x-rr} ${y} q${rr/2} ${-rr*1.2} ${rr} 0 q${rr/2} ${-rr*1.2} ${rr} 0" fill="${cols[i%cols.length]}" stroke="${INK}" stroke-width="4" transform="rotate(${(i*37)%60-30} ${x} ${y})"/>`).join('');
}
function heartPts(cx,cy,sz,step){
  const pts=[];for(let y=-sz;y<=sz;y+=step)for(let x=-sz*1.1;x<=sz*1.1;x+=step){
    const X=x/sz,Y=-(y/sz)*1.15+0.15; if(Math.pow(X*X+Y*Y-1,3)-X*X*Y*Y*Y<0) pts.push([cx+x+((y/step)%2?step/2:0),cy+y]);}
  return pts;
}
function heartPath(cx,cy,sz){
  let d='';for(let t=0;t<=Math.PI*2+0.01;t+=0.05){const X=16*Math.pow(Math.sin(t),3),Y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);
    d+=(d?'L':'M')+(cx+X*sz/16).toFixed(1)+' '+(cy-Y*sz/16).toFixed(1);}return d+'Z';
}
const sparkle=(x,y,s,c='#fff')=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0 -30 Q4 -4 30 0 Q4 4 0 30 Q-4 4 -30 0 Q-4 -4 0 -30Z" fill="${c}" stroke="${INK}" stroke-width="${4/s}"/>`;
const paw=(x,y,s,c,o=.35)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${c}" opacity="${o}"><ellipse cx="0" cy="18" rx="22" ry="18"/><circle cx="-24" cy="-8" r="9"/><circle cx="-8" cy="-20" r="9"/><circle cx="8" cy="-20" r="9"/><circle cx="24" cy="-8" r="9"/></g>`;
const dots=(c)=>{let g='';for(let i=0;i<14;i++)g+=paw(80+((i*263)%960),180+((i*397)%1100),1+(i%3)*.3,c,.18);return g;};

