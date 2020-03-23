const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo)

function displayError(error) {
  console.log(error)
}

function startVideo() {
  navigator.mediaDevices.getUserMedia({
      video: {}
    }).then((stream) => {video.srcObject = stream})
    .catch((error) => {
      document.querySelector("#content-body").removeChild(document.querySelector("#video"))


      const errorMsg = document.createElement('div')
      errorMsg.innerHTML = "È stato riscontrato un <b>problema</b>.<br>Hai una <b>webcam</b> collegata?"
      errorMsg.className = "alert alert-danger mt-5"
      errorMsg.style.width = "350px"

      document.querySelector("#content-body").appendChild(errorMsg)
    })
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = {
    width: video.width,
    height: video.height
  }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 100)
})