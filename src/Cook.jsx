import './Cook.css'

const currentEnv = import.meta.env.MODE || 'development';
let mainFileDir = './cook_sounds/';

if (currentEnv === "production") {
  mainFileDir = './tcm_soundboard/cook_sounds/';
}
console.log(`Soundboard is running in ${currentEnv}.`)

const cookAudioFileList = [
  {line: "Alright alright alright", file: "alrightAlrightAlright.mp3"},
  {line: "Always messing with those girls", file: "alwaysMessingWithGirls.mp3"},
  {line: "Buncha fools 'round here", file: "bunchaFools.mp3"},
  {line: "Can't count on no one", file: "cantCountOnNoOne.mp3"},
  {line: "Clean your plow", file: "cleanYourPlow.mp3"},
  {line: "C'mon", file: "cmon.mp3"},
  {line: "C'mon back now", file: "cmonBackNow.mp3"},
  {line: "C'mon now", file: "cmonNow.mp3"},
  {line: "Dammit boy", file: "dammitBoy.mp3"},
  {line: "Drink up now", file: "drinkUpNow.mp3"},
  {line: "I'm gettin' fed up", file: "gettingFedUp.mp3"},
  {line: "Goddamn kids", file: "goddamnKids.mp3"},
  {line: "Hold still dangit", file: "holdStillDangit.mp3"},
  {line: "I'mma smack that Johnny", file: "immaSmackJohnny.mp3"},
  {line: "I've had enough", file: "iveHadEnough.mp3"},
  {line: "You've landed in the shithouse", file: "landedInTheShithouse.mp3"},
  {line: "Look what you're doing to the house", file: "lookWhatYoureHouse.mp3"},
  {line: "Lord mercy", file: "lordMercy.mp3"},
  {line: "Can't nobody do a job right", file: "nobodyButMe.mp3"},
  {line: "Plain silly", file: "plainSilly.mp3"},
  {line: "See what you made me do", file: "seeWhatYouMadeMeDo.mp3"},
  {line: "You're shiftier than a", file: "shiftierThanA.mp3"},
  {line: "Stop foolin'", file: "stopFoolin.mp3"},
  {line: "Stop hidin'", file: "stopHiding.mp3"},
  {line: "Stop standin' around", file: "stopStandingAround.mp3"},
  {line: "This ain't personal", file: "thisAintPersonal.mp3"},
  {line: "Told him not to bring those girls", file: "toldNotToBringThose.mp3"},
  {line: "You're as useless as a", file: "uselessAsA.mp3"},
  {line: "We gotta find em quick", file: "weGottaFindEmQuick.mp3"},
  {line: "What's everybody doing", file: "whatEveryoneDoing.mp3"},
  {line: "You big oaf", file: "youBigOaf.mp3"},
  {line: "You think this is a party", file: "youThinkThisAParty.mp3"}
]

function Cook() {

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
      <h1>Cook Soundboard</h1>

      <div className="buttonList">
        {cookAudioFileList.map((item, index)=> {
          return <button data={item.file} key={index} onClick={(e)=>playAudio(e.target.getAttribute('data'))}>{item.line}</button>
        })}
      </div>
      <audio id="audioplayer">
        <source src="" id="" type="audio/mp3"/>
      </audio>
    </>
  )
}

export default Cook
