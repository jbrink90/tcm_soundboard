let mainFileDir = './hitch_sounds/';

const hitchAudioFileList = [
  {line: "Aint you shifty", file: "aintYouShifty.mp3"},
  {line: "Back in killin form", file: "backInKillinForm.mp3"},
  {line: "Crazy laugh", file: "crazyLaugh.mp3"},
  {line: "Cry laugh", file: "cryLaugh.mp3"},
  {line: "Ever had head cheese?", file: "everHadHeadCheese.mp3"},
  {line: "Fresh blood!", file: "freshBlood.mp3"},
  {line: "Go ahead and run", file: "goAheadAndRun.mp3"},
  {line: "Got yourself in some trouble", file: "gotSomeTrouble.mp3"},
  {line: "Grandpas the Best", file: "grandpaBest.mp3"},
  {line: "Grandpa taught me this", file: "grandpaTaughtMeThis.mp3"},
  {line: "I'm the best", file: "grandpaThinkImBest.mp3"},
  {line: "Feeding Grandpa", file: "hereGrandpa.mp3"},
  {line: "Hes just a cook!", file: "hesJustACook.mp3"},
  {line: "Hey Sissy", file: "heySissy.mp3"},
  {line: "Howdy!", file: "howdy.mp3"},
  {line: "I'm tryin", file: "imTrying.mp3"},
  {line: "Look at you", file: "lookAtYou.mp3"},
  {line: "Maniac Laugh", file: "maniacLaugh.mp3"},
  {line: "Normal Laugh", file: "normalLaugh.mp3"},
  {line: "Peter out", file: "peterOut.mp3"},
  {line: "Plague taken", file: "plagueTaken.mp3"},
  {line: "*Raspberry*", file: "raspberry.mp3"},
  {line: "Raspberry Laugh", file: "raspberryLaugh.mp3"},
  {line: "Savin you for grandpa", file: "savinYouForGrandpa.mp3"},
  {line: "See something tasty", file: "seeSomethingTasty.mp3"},
  {line: "What you taking pictures?", file: "takingPictures.mp3"},
  {line: "They'll never see this", file: "theyllNeverSeeThis.mp3"},
  {line: "We gotta find em", file: "weGottaFindEm.mp3"},
  {line: "Well looks who's here", file: "wellWellLookWhosHere.mp3"},
  {line: "Why I gotta do everything", file: "whyIGottaDoEverything.mp3"},
  {line: "Why you running", file: "whyYouRunnin.mp3"},
  {line: "You aint gettin out", file: "youAintGettinOut.mp3"},
  {line: "You're just a cook!", file: "youreJustACook.mp3"}
]

function App() {

  function playAudio(fileName) {
    const player = document.getElementById('audioplayer');
    const newFileLocation = mainFileDir + fileName;
    if (player.src !== newFileLocation) {
      player.src = newFileLocation
    }
    player.play();
  }

  return (
    <>
      <h1>Hitchhiker Soundboard</h1>

      <div className="buttonList">
        {hitchAudioFileList.map((item, index)=> {
          return <button data={item.file} key={index} onClick={(e)=>playAudio(e.target.getAttribute('data'))}>{item.line}</button>
        })}
      </div>
      <audio id="audioplayer">
        <source src="" id="" type="audio/mp3"/>
      </audio>
    </>
  )
}

export default App
