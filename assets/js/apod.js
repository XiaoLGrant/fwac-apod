//01-25-2022 video fringe case example
//bug: random date won't populate the first time if you load app and immediately click Take me anywhere. Issue happens when using display none and class List hidden methods. Date info only populates correctly with the display none method.
//for gif: home -> enter 10-02-2010 -> click learn -> take me anywhere 2 more times

//Generate random date
function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '06-20-1995'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()

    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(randomValueBetween(date1,date2)).toLocaleDateString()  

    }
}

//Reformat random date to YYYY-MM-DD
function formatRandomDate(randomDate) {
    let splitRandomDate = randomDate().split('/')
    return `${splitRandomDate[2]}-${splitRandomDate[0]}-${splitRandomDate[1]}`
}

//Find picture from API by searching for a date and display it on the site
function getPicture(){
  const date = document.querySelector('.date').value || formatRandomDate(randomDate)
  const url = `https://api.nasa.gov/planetary/apod?api_key=E6qRRmADWGvd8vqvIcyTLwLq0PghLo2cwIPqMXrW&date=${date}`

  console.log(date)

  const aboutApodImg = document.querySelector('#abtApodImg')
  const background = document.querySelector('#background')
  const aboutApodVideo = document.querySelector('#abtApodVideo')
  const aboutApodVideContainer = document.querySelector('#abtApodVideoContainer')
  const videoNotice =  document.querySelector('.videoWarning')
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
            console.log(data)

            //Hide random date info if user chooses to input a date
            document.getElementById('exact').onclick = function() {
                // document.querySelector('#randomDate').classList.add('hidden') -- this doesn't work correctly
                document.querySelector('#randomDate').style.display = 'none'
            }

            //Display random date info if user chooses to randomize the image shown
            document.getElementById('random').onclick = function() {
                // document.querySelector('#randomDate').classList.remove('hidden') -- this doesn't work correctly
                document.querySelector('#randomDate').style.display = 'block'
                document.querySelector('#randomDate').innerText = data.date
            }
            
            //If data type is an image, display the image as a background and its info in the about area
            if (data.media_type === 'image') {
                aboutApodImg.classList.remove('hidden')
                background.style.background = `url("${data.url}")`;
                aboutApodImg.src = data.url;

                //Hide video from about area
                aboutApodVideo.src = '';
                aboutApodVideo.classList.add('hidden');
                aboutApodVideContainer.classList.add('hidden');
                videoNotice.classList.add('hidden');

            //If data type is a video, display the video and its info in the about area
            } else if (data.media_type === 'video') {
                aboutApodVideo.classList.remove('hidden')
                aboutApodVideContainer.classList.remove('hidden')
                videoNotice.classList.remove('hidden')
                aboutApodVideo.src = data.url;

                //Revert background to original image
                background.style.background = 'url("images/bg2a.jpg")';

                //Hide previous image from about area
                aboutApodImg.classList.add('hidden');
                aboutApodImg.src = '';
            }
        
            //Show picture and video information
            document.querySelector('.title').innerText = !data.copyright ? `${data.title}` : `${data.title} by ${data.copyright}`;
            document.querySelector('#abtApodExplanation').innerText = data.explanation;

      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}


//Run getPicture function when user enters a date
document.querySelector('#exact').addEventListener('click', getPicture)

//Run getPicture function when user opts for random date
document.querySelector('#random').addEventListener('click', function() {
    document.querySelector('#date').value = '' //Clear date input if user filled it out
    getPicture()
    
})