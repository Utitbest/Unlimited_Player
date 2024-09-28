let alright = document.querySelector('.alright')
let paradisees1 = document.querySelector('.paradisees1')
let termintorw = document.querySelector('.termintorw')
let currentTap = document.querySelector('.currentTap');
let feel = document.querySelector('.feel2');
let musictime1 = document.querySelector('.musictime1')
let musictime2 = document.querySelector('.musictime2');
let civilmeter = document.querySelector('.civilmeter')
let thewane = document.querySelector('.EYECLASS');
let samething = document.querySelector('.mich1');
let wizkid2 = document.querySelector('.wizkid2')
let samething1 = document.querySelector('.samething');
let inchains = document.querySelector('.inchains');
let videocloset = document.querySelector('.videocloset')
let pine1 = document.querySelector('.pine1');
let volume1 = document.querySelector('.volume1')
let wizkid = document.querySelector('.wizkid')
let pullup = document.querySelector('.pullup')
let uranuim = document.querySelector('.uranuim')
let breakingheart = document.querySelectorAll('.breakingheart')
let ability = document.querySelector('.ability')
let runner = document.querySelectorAll('.runner');
let mynameis = document.querySelector('.mynameis')
let progress_it_self = document.querySelector('.progress_it_self')
let Duration = document.querySelectorAll('.Duration')
let teknoq2 = document.querySelector('.teknoq2')
let onmy = document.querySelector('.onmy');
let london = document.querySelector('.london')
let appolo = document.querySelector('.appolo')
let formation = document.querySelectorAll('.formation');
let slapPolice = document.querySelector('.slapPolice')
let forRandomNaN = document.querySelector('.forRandomNaN')
let forRepeating = document.querySelector('.forRepeating')
let breakingheartvideo = document.querySelectorAll('.breakingheartvideo')

let transquilty = createEle('span')
transquilty.className = 'vibess';

let music_list;
let video_list;
let AudioPlayer = createEle('audio')
let VideoPlayer = createEle('video')
    is_random = false;
let is_playing = false;
let track_index = 0;
let video_index = 0;
let Is_repeat = false;

let InternalMusic = [
    {trackName:'ABBA-I-Have-A-Dream.mp3'},
    {trackName:'AKA-Ft-Nasty-C-Lemons-Lemonade-(TrendyBeatz.com).mp3'},
    {trackName:'Alan_Walker_-_Sing_Me_To_Sleep.mp3'},
    {trackName:'Alan_Walker_-_Time.mp3'},
    {trackName:'Alan_Walker_Ft_Isak_-_Sorry.mp3'},
    {trackName:'ArrDee_-_Come_Go.mp3'},
    {trackName:'ArrDee_-_Flowers_Say_My_Name__Connectloaded.com.mp3'},
    {trackName:'Ayra_Starr_-_Commas.mp3'},
    {trackName:'Busta_Rhymes_ft_Mariah_Carey_-_I_Know_What_You_Want.mp3'},
    {trackName:'Davido_-_Feel.mp3'},
    {trackName:'Diddy_Dirty_Money_ft_Skylar_Grey_-_Coming_Home_Kelgist.com.mp3'},
    {trackName:'Eminem-Gnat.mp3'},
    {trackName:'Heal The World.mp3'},
    {trackName:'Ja Rule - Murder Reigns.mp3'},
    {trackName:'Jonas-Brothers-Sucker-(CeeNaija.com).mp3'},
    {trackName:'King_Promise_-_Terminator.mp3'},
    {trackName:'Kizz_Daniel_-_Too_Busy_To_Be_Bae.mp3'},
    {trackName:'Kizz-Daniel-Anchovy-(JustNaija.com).mp3'},
    {trackName:'Lojay-LV-N-ATTN-Ft-Sarz-And-Wizkid-1(TrendyBeatz.com).mp3'},
    {trackName:'Major-Lazer-Ft-Nasty-C-Ice-Prince-Patoranking-Jidenna-Particular-(TrendyBeatz.com).mp3'},
    {trackName:'Olamide-At-Your-Service-[TrendyBeatz.com].mp3'},
    {trackName:'Rema - Red Potion (Lyric Video).mp3'},
    {trackName:'The Real Prechly x Shallipopi - A Collision Of Two Worlds 2.0 [Ft. Dj Lux and Dj Guti BPM] Official.mp3'},
    {trackName:'Twista-Ft-Jeremih-Next-To-You-1.mp3'},
    {trackName:'Tyla_-_Water.mp3'},
    {trackName:'Wizkid_ft_Burna_Boy_-_Ginger.mp3'}
];
let InternalVideo = [
    {video:'6af645857b17fb84df698069e044b143.mp4'},
    {video:'6c687216dd72f17a279a81c12e86fee1.mp4'},
    {video:'6ec060513c4973d91ad912f49ba6a454.mp4'},
    {video:'0918a3a778f0b8ff9b8077603f4242ac.mp4'},
    {video:'6552010293403cee761d2c4dbd42ffb5.mp4'},
    {video:'d661b2e994e3dea4ed882360e97adb9b.mp4'},
    {video:'fd184d602ca147eab39d1df4ffd25e59.mp4'}
];

runner.forEach((tools, index) => {
    tools.addEventListener('click', function () {
        let totorime = document.querySelector('.totorime');

        inchains.innerHTML = '';
        samething.innerHTML = '';
        location.hash = this.getAttribute('data');
        currentTap.innerHTML = this.getAttribute('data');
        getTap();
        if (totorime !== null) {
            totorime.classList.remove('totorime')
        }
        tools.classList.add('totorime')
    });
});
function createEle(d) {
    return document.createElement(d)
}
function Menu() {
    let ability = document.querySelector('.ability')
    let particular = createEle('div');
    particular.className = 'uranuim glory seconda ballkall';
    particular.innerHTML = `
            <div class="appolo">
                <div class="onthelow gi">
                    <img  src="./icons/equalizer.png" alt="">
                    <span class="">Equalizer</span>
                </div>
                
                <div class="onthelow onmy gi">
                    <img  src="./icons/fast.png" alt="">
                    <span class="">Speed</span>
                </div>
                <div class="onthelow">
                    <div class="ess">
                        <img  src="./icons/forward.png" alt="">
                    </div>
                    <span class="">Seek forward</span>
                </div>
                <div class="onthelow">
                    <div class="ess">
                        <img  src="./icons/forward.png" alt="">
                    </div>
                    <span class="">Seek backward</span>
                </div>
            </div>
        `
    ability.append(particular)
    New_menu_Book()
    on()
}
Menu()
function New_menu_Book() {
    uranuim = document.querySelector('.uranuim')
    pullup.addEventListener('click', function () {
        if (uranuim.classList.contains('seconda')) {
            uranuim.classList.remove('seconda');
            uranuim.classList.add('glory')
        } else {
            uranuim.classList.add('seconda');
            uranuim.classList.remove('glory')
        }
    })
}
function __get_fromStorage__(type) {
    let data = localStorage.getItem(type);
    return data ? JSON.parse(data) : [];
}
function getTap() {
    let Tap = location.hash.replace('#', '');
    if (Tap === 'Home') {
        currentTap.innerHTML = Tap;
        HomeMaster(Tap);
    } else if (Tap === 'Video') {
        currentTap.innerHTML = Tap;
        VideoSink(Tap)
    } else if (Tap == 'Music') {
        currentTap.innerHTML = Tap;
        MusicMaster(Tap);
    } else if (Tap === 'Queue') {
        currentTap.innerHTML = Tap;
    } else if (Tap === 'Playlist') {
        currentTap.innerHTML = Tap;
    } else {
        currentTap.innerHTML = Tap;
    }
}
function HomeMaster(tap) {
    if (tap.toLowerCase() == 'home') {
        samething.innerHTML = 'Recent Media';
    }
}
function MusicMaster(tap) {
    if (tap.toLowerCase() == 'music') {

        let mich1 = document.querySelector('.mich1')
        let forsorting = createEle('div')
        forsorting.className = 'samething';

        let playallandshuffle1 = createEle('div')
        playallandshuffle1.className = 'andee stock';
        let playandee = createEle('button');
        playandee.innerHTML = `<i class="fa fa-play"></i><p>PlayAll</p>`;
        playandee.className = 'paradisees paradisees1';
        playallandshuffle1.append(playandee)

        let totalofmusic = createEle('div');
        totalofmusic.className = 'howwe';
        totalofmusic.innerHTML = `<p class="wizkid"></p>
                                <p class="wizkid2"></p>
                    `;
        playallandshuffle1.append(totalofmusic)
        forsorting.append(playallandshuffle1)


        let playallandshuffle2 = createEle('div')
        playallandshuffle2.className = 'andee smmae';
        let sortor = createEle('div');
        sortor.className = 'alright';
        let plc = mysort();
        sortor.innerHTML = `SortBy: <p class="slapPolice" id="slapPolice">${plc}</p> <i class="fa fa-angle-down"></i>`;
        playallandshuffle2.append(sortor)
        let imp = createEle('input');
        imp.type = 'file';
        imp.accept = 'audio/*';
        imp.multiple = true;
        imp.className = 'thewane EYECLASS';
        imp.id = 'openbro';
        playallandshuffle2.append(imp);
        let esther = createEle('label')
        esther.className = 'airport';
        esther.setAttribute('for', 'openbro')
        esther.innerHTML = `<img  src="./icons/song.png" alt="">
                    <p>Add files</p>`
        playallandshuffle2.append(esther);
        forsorting.append(playallandshuffle2)
        mich1.append(forsorting);

        ego()
        AudioReciever()
        DropdownMan()
        PlayAllfunction()
    }
}
function ego() {
    if(LoadFromStorage() != 0){
        let realm;
        realm = __get_fromStorage__('ReturnAudio');
        inchains.querySelector('.inchains')
        for (let B = 0; B < realm.length; B++) {
            let forMusic = createEle('div');
            forMusic.className = 'breakingheart';
            forMusic.innerHTML = `
                        <div class="welcomenmen">
                            <img class="fa fa-play" alt="">
                            <p class="musicName">${realm[B].toString().replace('.mp3', '')}</p>
                            <p class="fileSize"></p>
                            <p class="Duration"></p>
                        </div>
                `;
            inchains.append(forMusic);
            wizkid2 = document.querySelector('.wizkid2');
            wizkid2.innerHTML = realm.length;
        }
        clickToPlayFromLIst()
        return
    }
        for (let B = 0; B < InternalMusic.length; B++) {
            let forMusic = createEle('div');
            forMusic.className = 'breakingheart';
            forMusic.innerHTML = `
                        <div class="welcomenmen">
                            <img class="fa fa-play" alt="">
                            <p class="musicName">${InternalMusic[B].trackName.toString().replace('.mp3', '')}</p>
                            <p class="fileSize"></p>
                            <p class="Duration"></p>
                        </div>
                `;
            inchains.append(forMusic);
            wizkid2 = document.querySelector('.wizkid2');
            wizkid2.innerHTML = InternalMusic.length;
        
        }
        clickToPlayFromLIst()
    
}
function VideoSink(tap) {
    if (tap.toLowerCase() == 'video') {
        samething.innerHTML = `<div class="tonight"><div class="shejustagirl">
     <button class="paradisees">
        <i class="fa fa-play"></i><p>PlayAll</p>
     </button>
     </div> <div class="babay">
        <div class="seaman">
            <div class="fight1">
                <div class="paulfa">
                    <p>Sort by:</p>
                    <select class="stillinlove">
                        <option>A-Z</option>
                        <option>Date modified</option>
                    </select>
                </div>
            </div>
            <div class="fight2">
                <input type="file" class="videocloset" multiple="true" accept="Video/*" id="fantacy">
                <label for="fantacy" class="airport">
                    <img  src="./icons/add-video.png" alt="">
                    <p>Add files</p>
                </label>
                <div class="pine">
                    <p class="pine1"></p>
                </div>
            </div>
        </div>
     </div></div>`;
        ToreturnVideostoPlaylist()
        videoThat()
    }
}
function AudioReciever() {
    thewane = document.querySelector('.EYECLASS');
    thewane.addEventListener('change', function () {
        let westcoast = this.files;
        let akara = []
        for (let e = 0; e < westcoast.length; e++) {
            akara.push(westcoast[e].name);
        }
        localStorage.setItem('ReturnAudio', JSON.stringify(akara))
    });
}
function videoThat() {
    videocloset = document.querySelector('.videocloset')
    videocloset.addEventListener('change', function () {
        let selectedFiles = this.files;
        let reciever = [];
        for (let t = 0; t < selectedFiles.length; t++) {
            reciever.push(selectedFiles[t].name)
        }
        localStorage.setItem('returnvideos', JSON.stringify(reciever))

    });
}
function ToreturnVideostoPlaylist() {
    if(VideoFromStorage() != 0){
        let fridays;
        fridays = __get_fromStorage__('returnvideos');
        inchains.querySelector('.inchains');
        transquilty.querySelector('.vibess')
        for (let B = 0; B < fridays.length; B++) {
            let forMusic = createEle('span');
            forMusic.className = 'breakingheartvideo';
            forMusic.innerHTML = `
                    <span class="welcomenmen1">
                        <video class="aunty" src="${VideoLocation() + fridays[B]}"></video>
                    </span>
                     <h4 class="heartattack">${fridays[B]}</h4>
                `;
            transquilty.append(forMusic);
            inchains.append(transquilty)
        }
            pine1 = document.querySelector('.pine1')
            pine1.innerHTML = fridays.length;
            clickToPlayVideo()
            return;
    }

    inchains.querySelector('.inchains');
    transquilty.querySelector('.vibess')
    for (let B = 0; B < InternalVideo.length; B++) {
        let forMusic = createEle('span');
        forMusic.className = 'breakingheartvideo';
        forMusic.innerHTML = `
                    <span class="welcomenmen1">
                        <video class="aunty" src="${NewVideoRoot() + Object.values(InternalVideo[B])}"></video>
                    </span>
                     <h4 class="heartattack">${InternalVideo[B].video}</h4>
            `;
        transquilty.append(forMusic);
        inchains.append(transquilty)
    }
    pine1 = document.querySelector('.pine1')
    pine1.innerHTML = InternalVideo.length;
    clickToPlayVideo()
}
function clickToPlayVideo(){
    if(VideoFromStorage() != 0){
        let breakingheartvideo = document.querySelectorAll('.breakingheartvideo');
            breakingheartvideo.forEach((watkin, drinkup) =>{
                watkin.addEventListener('click', function(){
                    video_index = drinkup;
                    let complain = document.querySelector('.complain')
                    let mynameis = document.querySelector('.mynameis')
                    VideoPlayer.src = VideoLocation() + VideoRoot(video_index);
                    VideoPlayer.play()
                    mynameis.innerHTML = VideoRoot(video_index).toString().replace('.mp4', '');
                    if(complain !== null){
                        complain.classList.remove('complain')
                    }
                    watkin.classList.add('complain')
                })
            });
            // return
    }
}
function clickToPlayFromLIst(){
    if(LoadFromStorage() != 0){
        let breakingheart = document.querySelectorAll('.breakingheart');
        breakingheart.forEach((pre, twopack) => {
        pre.addEventListener('click', function () {
            track_index = twopack
            let dovesst = document.querySelector('.dovesst');
            let mynameis = document.querySelector('.mynameis')
            setInterval(setUpdate, 1000)
            AudioPlayer.src = MusicLocation() + MusicRoot([track_index]);
            mynameis.innerHTML = MusicRoot([track_index]).toString().replace('.mp3', '')
            AudioPlayer.play()
            AudioPlayer.volume = getvolume();
            teknoq2.src = './icons/pause.png';
            if (dovesst !== null) {
                dovesst.classList.remove('dovesst')
            }
            pre.classList.add('dovesst');
            wizkid = document.querySelector('.wizkid');
            wizkid.innerHTML = track_index + 1 + '/';
             })
        })
        return
    }
        let breakingheart = document.querySelectorAll('.breakingheart');
        breakingheart.forEach((pre, twopack) => {
            pre.addEventListener('click', function () {
                track_index = twopack;
                let dovesst = document.querySelector('.dovesst');
                let mynameis = document.querySelector('.mynameis')
                setInterval(setUpdate, 1000)
                AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName;
                mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
                AudioPlayer.play()
                AudioPlayer.volume = getvolume();
                teknoq2.src = './icons/pause.png';
                if (dovesst !== null) {
                    dovesst.classList.remove('dovesst')
                }
                pre.classList.add('dovesst');
                wizkid = document.querySelector('.wizkid');
                wizkid.innerHTML = track_index + 1 + '/';
            })
        })
}
// this function makes the music play after finishing but update is coming for it
AudioPlayer.addEventListener('ended', function () {
    AudioPlayer.volume = getvolume();
    NextTrack()
    playing()
})
function controlspeeding(){
    let jet = localStorage.getItem('Playbackrate');
    AudioPlayer.playbackRate = jet;
}

function NextTrack() {
    if(LoadFromStorage() != 0){      
        if(localStorage.getItem('repeatingTrack') !== null && JSON.parse(localStorage.getItem('repeatingTrack')) == true){
            let retr = track_index;
            track_index = retr;
            wizkid.innerHTML = track_index + 1 + '/';
            mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
            AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
            playing()
            return;
        }
        if(localStorage.getItem('randomise') !== null && JSON.parse(localStorage.getItem('randomise')) == true){
            is_random = true;
        }     
        if (track_index < __get_fromStorage__('ReturnAudio').length - 1 && is_random == false){
            track_index += 1;
            wizkid = document.querySelector('.wizkid')
            mynameis = document.querySelector('.mynameis')
            wizkid.innerHTML = track_index + 1 + '/';
            mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
            AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
        }else if(track_index < __get_fromStorage__('ReturnAudio').length - 1 && is_random == true){
            let randommings = Math.floor(Math.random() * __get_fromStorage__('ReturnAudio').length);
            track_index = randommings;
            wizkid = document.querySelector('.wizkid')
            mynameis = document.querySelector('.mynameis')
            wizkid.innerHTML = track_index + 1 + '/';
            mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
            AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
        }else if(track_index >= __get_fromStorage__('ReturnAudio').length -1 && is_random == false){
            track_index = 0;
            wizkid = document.querySelector('.wizkid')
            mynameis = document.querySelector('.mynameis')
            wizkid.innerHTML = track_index + 1 + '/';
            mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
            AudioPlayer.src = MusicLocation() + MusicRoot(track_index) 
        }else if(track_index >= __get_fromStorage__('ReturnAudio').length - 1 && is_random == true){
            let randommings = Math.floor(Math.random() * __get_fromStorage__('ReturnAudio').length);
            track_index = randommings;
            wizkid = document.querySelector('.wizkid')
            mynameis = document.querySelector('.mynameis')
            wizkid.innerHTML = track_index + 1 + '/';
            mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
            AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
        }else{
           track_index = 0;
        }
        currPlay(track_index);
        return;
    }

    if(localStorage.getItem('repeatingTrack') !== null && JSON.parse(localStorage.getItem('repeatingTrack')) == true){
        let touch = track_index;
        track_index = touch;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
        playing()
        return;
    }
    if(localStorage.getItem('randomise') !== null && JSON.parse(localStorage.getItem('randomise')) == true){
        is_random = true;
    }
    if(track_index < InternalMusic.length - 1 && is_random == false){
        track_index += 1;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
    }else if(track_index < InternalMusic.length - 1 && is_random == true){
        let randomIndex = Math.floor(Math.random() * InternalMusic.length);
        track_index = randomIndex;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index +1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
    }else if(track_index >= InternalMusic.length - 1 && is_random == false){
        track_index = 0;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
    }else if(track_index >= InternalMusic.length - 1 && is_random == true){
        let randomIndex = Math.floor(Math.random() * InternalMusic.length);
        track_index = randomIndex;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
    }else{
        track_index = 0;
    }
        currPlay(track_index);
    
}

function currPlay(d) {
    let list = document.querySelectorAll('.breakingheart');
    list.forEach((ind) => {
        ind.classList.remove('dovesst');
        list[d].classList.add('dovesst');
    });
}
function PlayAllfunction(){
    if(LoadFromStorage() != 0){
        paradisees1 = document.querySelector('.paradisees1')
        paradisees1.addEventListener('click', function(){
        mynameis = document.querySelector('.mynameis')
        wizkid = document.querySelector('.wizkid')
        if (track_index < __get_fromStorage__('ReturnAudio').length){
            track_index = 0;
            AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
            AudioPlayer.play() 
            AudioPlayer.volume = getvolume() 
            setInterval(setUpdate, 1000)
            teknoq2.src = './icons/pause.png';
            wizkid.innerHTML = track_index +1 + '/';
            mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
        }
            currPlay(track_index)
        })
        return;
    }

    paradisees1 = document.querySelector('.paradisees1')
    paradisees1.addEventListener('click', function(){
        mynameis = document.querySelector('.mynameis')
        wizkid = document.querySelector('.wizkid')
        if (track_index < InternalMusic.length){
            track_index = 0;
            AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
            AudioPlayer.play()
            AudioPlayer.volume = getvolume()   
            setInterval(setUpdate, 1000)
            teknoq2.src = './icons/pause.png';
            wizkid.innerHTML = track_index +1 + '/';
            mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        }
        currPlay(track_index)
    })
}
function NextTrackForAll() {
if(LoadFromStorage() != 0){
    
    if(localStorage.getItem('randomise') !== null && JSON.parse(localStorage.getItem('randomise')) == true){
        is_random = true;
    }
    if(track_index < __get_fromStorage__('ReturnAudio').length - 1 && is_random == false){
        track_index += 1;
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
        AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
        playing()
    }else if(track_index < __get_fromStorage__('ReturnAudio').length - 1 && is_random == true){
        let showmeluv = Math.floor(Math.random() * __get_fromStorage__('ReturnAudio').length)
        track_index = showmeluv;
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
        AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
        playing()
    }else if(track_index >= __get_fromStorage__('ReturnAudio').length - 1 && is_random == false){
        track_index = 0;
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
        AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
        playing()
    }else if(track_index >= __get_fromStorage__('ReturnAudio').length - 1 && is_random == true){
        let showmeluv = Math.floor(Math.random() * __get_fromStorage__('ReturnAudio').length)
        track_index = showmeluv;
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
        AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
        playing()
    }else{
        track_index = 0;
    }
        currPlay(track_index);
    return    
}
    if(localStorage.getItem('randomise') !== null && JSON.parse(localStorage.getItem('randomise')) == true){
        is_random = true;
    }
    if(track_index < InternalMusic.length - 1 && is_random == false){
        track_index += 1;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
        playing()
    }else if(track_index < InternalMusic.length - 1 && is_random == true){
        let randomIndex = Math.floor(Math.random() * InternalMusic.length);
        track_index = randomIndex;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
        playing()
    }else if(track_index >= InternalMusic.length - 1 && is_random == false){
        track_index = 0;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
        playing()
    }else if(track_index >= InternalMusic.length - 1 && is_random == true){
        let randomIndex = Math.floor(Math.random() * InternalMusic.length);
        track_index = randomIndex;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
        playing()
    }else{
        track_index = 0;
    }
    currPlay(track_index);
}
function PreviousTrackForAll(){
    if(LoadFromStorage() != 0){
        if (track_index > 0) {
            track_index -= 1;
            wizkid = document.querySelector('.wizkid')
            mynameis = document.querySelector('.mynameis')
            wizkid.innerHTML = track_index + 1 + '/';
            mynameis.innerHTML = MusicRoot(track_index).toString().replace('.mp3', '')
            AudioPlayer.src = MusicLocation() + MusicRoot(track_index)
            playing()
        }
        currPlay(track_index);
        return;
    }
    if (track_index > 0) {
        track_index -= 1;
        wizkid = document.querySelector('.wizkid')
        mynameis = document.querySelector('.mynameis')
        wizkid.innerHTML = track_index + 1 + '/';
        mynameis.innerHTML = InternalMusic[track_index].trackName.toString().replace('.mp3', '')
        AudioPlayer.src = NewMusicRoot() + InternalMusic[track_index].trackName
        playing()
    }
    currPlay(track_index);
}
function RepeatTracks(){
    Is_repeat ? NoRepeat() : RepeatCurrentTrack();
}
function RepeatCurrentTrack(){
    Is_repeat = true;
    forRepeating.src = './icons/no_repeat.png';
    localStorage.setItem('repeatingTrack', JSON.stringify(true))
}
function NoRepeat(){
    Is_repeat = false;
    forRepeating.src = './icons/repeat.png';
    localStorage.setItem('repeatingTrack', JSON.stringify(false))
}
function toUpdateRepeating(){
    Is_repeat = JSON.parse(localStorage.getItem('repeatingTrack'))
    if(Is_repeat == true){
        forRepeating.src = './icons/no_repeat.png';
    }else{
        forRepeating.src = './icons/repeat.png';
    }
}
function PlayingRandomMode(){
    is_random = true;
    forRandomNaN.src = './icons/shuffle.png';
    localStorage.setItem('randomise', JSON.stringify(true))
}
function NotPlayingRandomMode(){
    is_random = false;
    forRandomNaN.src = './icons/exchnage.png';
    localStorage.setItem('randomise', JSON.stringify(false))
}
function randomMiseTrack(){
    is_random ? NotPlayingRandomMode() : PlayingRandomMode();
}
function ToupdateRandom_Logo(){
    is_random = JSON.parse(localStorage.getItem('randomise'))
    if(is_random == true){
        forRandomNaN.src = './icons/shuffle.png';
    }else{
        forRandomNaN.src = './icons/exchnage.png';
    }
}
function setUpdate() {
    let seekpositionee = 0;
    if (!isNaN(AudioPlayer.duration)) {
        seekpositionee = AudioPlayer.currentTime * (100 / AudioPlayer.duration)
        progress_it_self.value = seekpositionee;

        let currentMin = Math.floor(AudioPlayer.currentTime / 60);
        let currentSec = Math.floor(AudioPlayer.currentTime - currentMin * 60);

        let durationMin = Math.floor(AudioPlayer.duration / 60);
        let durationSec = Math.floor(AudioPlayer.duration - durationMin * 60);

        if (currentMin < 10) { currentMin = '0' + currentMin }
        if (currentSec < 10) { currentSec = '0' + currentSec }

        if (durationMin < 10) { durationMin = '0' + durationMin }
        if (durationSec < 10) { durationSec = '0' + durationSec }

        musictime1.innerHTML = currentMin + ':' + currentSec;
        musictime2.innerHTML = durationMin + ':' + durationSec;
    }
}
function MusicRoot(d){
    music_list = LoadFromStorage();
    return music_list[d]
}
function VideoRoot(t){
    video_list = VideoFromStorage()
    return video_list[t]
}
function MusicLocation() {
    return 'C:/Users/UTITOFON PC/Music/'
}
function VideoLocation() {
    return 'C:/Users/UTITOFON PC/Videos/'
}
function NewMusicRoot(){
    return './Ulimited_Musics/'
}
function NewVideoRoot(){
    return './Ulimited_Videos/'
}
function LoadFromStorage() {
    if (localStorage.getItem('ReturnAudio') !== null) {
        return JSON.parse(localStorage.getItem('ReturnAudio'));
    } else {
        return 0;
    }
}
function VideoFromStorage() {
    if (localStorage.getItem('returnvideos') !== null) {
        return JSON.parse(localStorage.getItem('returnvideos'));
    } else {
        return 0;
    }
}
function WowAmplaying() {
    is_playing ? pausing() : playing();
}
function playing() {
    AudioPlayer.play()
    AudioPlayer.volume = getvolume();
    is_playing = true;
    teknoq2.src = './icons/pause.png';
}
function pausing() {
    AudioPlayer.pause();
    is_playing = false
    teknoq2.src = './icons/icons8-video-94.png';
}
function ForwardBackward() {
    let seek = AudioPlayer.duration * (progress_it_self.value / 100);
    AudioPlayer.currentTime = seek;
}
function volumePanel() {
    let akd = document.querySelector('.akd')
    let remember = createEle('div');
    remember.className = 'favour1 adie easy';
    let volume = createEle('input')
    volume.type = 'range';
    volume.min = 0;
    volume.max = 100;
    volume.className = 'volume1';
    volume.setAttribute('onchange', 'volumeproperty()')
    remember.append(volume);
    akd.append(remember);
    ToRemovevolume()
}
function ToRemovevolume() {
    let favour = document.querySelector('.favour');
    favour.addEventListener('click', function () {
        let volte = document.querySelector('.favour1')
        if (volte.classList.contains('adie')) {
            volte.classList.remove('adie')
            volte.classList.add('easy')
        } else {
            volte.classList.add('adie')
            volte.classList.remove('easy')
        }
    })
}
function volumeproperty() {
    volume1 = document.querySelector('.volume1')
    let volume = AudioPlayer.volume = volume1.value / 100;
    this.localStorage.setItem('play_vaolume', volume);
}
function getvolume(){
    let vol = '';
    if (localStorage.getItem('play_vaolume') !== null) {
        vol = parseFloat(this.localStorage.getItem('play_vaolume'));
    } else {
        vol = 1;
    }
    return vol;
}
function updateVolumeSlider() {
    volume1 = document.querySelector('.volume1')
    if (getvolume() == 1) {
        volume1.value = 100;
    } else {
        let vlume = getvolume().toString().replace('0.', '');
        volume1.value = vlume;
    }
}
function on() {
    onmy = document.querySelector('.onmy')
    onmy.addEventListener('click', function(){
       let superman = document.querySelector('.superman')
        if(superman.classList.contains('justof')){
            superman.classList.remove('justof')
            superman.classList.add('fansyon')
        }else{
            superman.classList.add('justof')
            superman.classList.remove('fansyon')
        }
    })
}
function speedmethod() {
    let speed_progree = createEle('div');
    appolo = document.querySelector('.appolo')
        speed_progree.className = 'superman justof fansyon'
        speed_progree.innerHTML =  `
                <div class="speedman1">
                    <div class="speedman2">
                        <p>F</p>
                        <p>-</p>
                        <p>N</p>
                        <p>-</p>
                        <p>S</p>
                    </div>
                    <div class="speedman3">
                        <input type="range" title="speed" min="0" max="100" onchange="speedmeters()" class="civilmeter">
                    </div>
                </div>
            `;
            appolo.append(speed_progree)
}
function speedmeters(){
    civilmeter = document.querySelector('.civilmeter');
    let speedmode = AudioPlayer.playbackRate = civilmeter.value / 100;
    localStorage.setItem('Playbackrate', speedmode);
}
function DropdownMan(){
    alright = document.querySelector('.alright')
    let london = createEle('div');
        london.className = 'london offuin oniun';
        london.innerHTML = `
            <p class="formation" komansa="A-Z">A-Z</p>
            <p class="formation" komansa="Title">Title</p>
            <p class="formation" komansa="Artist">Artist</p>
            <p class="formation" komansa="Data modified">Data modified</p>
        `;
        alright.append(london)
        dropDownList()
        Asake2_30()
}
function dropDownList(){
    alright = document.querySelector('.alright')
    alright.addEventListener('click', function(){
    london = document.querySelector('.london')
        if(london.classList.contains('offuin')){
            london.classList.remove('offuin')
            london.classList.add('oniun')
        }else{
            london.classList.add('offuin')
            london.classList.remove('oniun')
        }
    })
}
function Asake2_30(){
    formation = document.querySelectorAll('.formation');
    formation.forEach((paie)=>{
        paie.addEventListener('click', function(){
            slapPolice = document.querySelector('.slapPolice');
            let mammay = paie.getAttribute('komansa');
            slapPolice.innerHTML = mammay;

            localStorage.setItem('utibestlimitedSort', mammay);
        })
    })
}
function mysort(){
   return localStorage.getItem('utibestlimitedSort');
}
volumePanel();
speedmethod()
updateVolumeSlider()
if(localStorage.getItem('randomise') == null){
    localStorage.setItem('randomise', JSON.stringify(is_random))
}
if(localStorage.getItem('repeatingTrack') == null){
    localStorage.setItem('repeatingTrack', JSON.stringify(Is_repeat))
}
window.onload = function () {
    getTap();
    controlspeeding()
    ToupdateRandom_Logo()
    toUpdateRepeating()
}
window.addEventListener('keydown', function(event){
    if(event.keyCode == 39){
        NextTrackForAll()
    }
    else if(event.keyCode == 32){
        WowAmplaying()
    }
    else if(event.keyCode == 37){
        PreviousTrackForAll()
    }
})








// WASTE BIN FUNCTIONS COMING FOR IT LATER
function Abigail() {
    let Animation = createEle('div')
    Animation.className = 'sunny';
    Animation.innerHTML = `
            <div class="topboy">
                
            </div>
        `
}


function SiteLoading() {
    let wrong = createEle('div');
    wrong.className = 'termintorw';
    document.body.append(wrong);
}
SiteLoading()
function removeidiot() {
    let termintorw = document.querySelector('.termintorw')
    termintorw.remove()
}