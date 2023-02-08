console.log("nalinkovan");

function pismoTucne() {
    let odstavec = document.querySelector('.odstavec');
    odstavec.style.fontWeight = 'bold';
}

function zmenBarvu() {
    let tlacitko = document.querySelector('.odstavec');
    tlacitko.classList.toggle('red');
}

function zmenVelikost() {
    let tlacitko = document.querySelector('.odstavec');
    //tlacitko.style.fontSize = '20px';
    let computedSize = window.getComputedStyle(tlacitko, null).getPropertyValue('font-size');
    tlacitko.style.fontSize = (parseFloat(computedSize) + 1) + 'px';
}

// let velikost = 16;

// function zvetsi() {
//     let novaVelikost = velikost + 1;
//     console.log(novaVelikost);
// }

function startAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Zapinam piesen...');
    audioFile.play();
  }
  
  function pauseAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Pauzujem piesen...');
    audioFile.pause();
  }
  
  function volMin() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Stišujem pieseň...');
    audioFile.volume = 0;
  }
  
  function volNorm() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Normálna hlasitsť piesne...');
    audioFile.volume = 0.5;
  }
  
  function volMax() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Maximalna hlasitosť piesne...');
    audioFile.volume = 1;
  }
  
  function presunNaZaciatok() {
    let audioFile = document.getElementById('zvukovaStopa');
    console.log('Presúvam pieseň na začiatok...');
    audioFile.currentTime = 0;
  }



