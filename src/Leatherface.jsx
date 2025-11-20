import './Leatherface.css'

let mainFileDir = './lf_sounds/';

const leatherAudioFileList = [
  {line: "Angry", file: "angry.mp3"},
  {line: "Angry 2", file: "angry_2.mp3"},
  {line: "Angry AEIOU", file: "angry_aeiou.mp3"},
  {line: "Charge", file: "charge.mp3"},
  {line: "Comfort", file: "comfort.mp3"},
  {line: "Concerned", file: "concerned.mp3"},
  {line: "Idle", file: "idle.mp3"},
  {line: "Scream", file: "scream.mp3"},
  {line: "Scream once", file: "single_scream.mp3"}
]

function Leatherface() {

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
      <h1>Leatherface Soundboard</h1>

      <div className="buttonList">
        {leatherAudioFileList.map((item, index)=> {
          return <button data={item.file} key={index} onClick={(e)=>playAudio(e.target.getAttribute('data'))}>{item.line}</button>
        })}
      </div>
      <audio id="audioplayer">
        <source src="" id="" type="audio/mp3"/>
      </audio>
    </>
  )
}

export default Leatherface
