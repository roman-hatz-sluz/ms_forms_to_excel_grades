javascript:(async function(){window.focus();await new Promise(resolve=>setTimeout(resolve,500));if(!navigator.clipboard){console.error('Clipboard API not supported in this browser.');return;}try{const text=await navigator.clipboard.readText();console.log('Clipboard content:',text);const values=text.trim().split('\n');for(let i=0;i<values.length;i++){console.log('Value '+ (i+1) +':',values[i]);const elem=document.querySelector('#feld_'+(i+1));if(elem){elem.value=values[i];}}}catch(err){console.error('Could not read from clipboard:',err);}})();"
