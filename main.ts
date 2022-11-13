input.onSound(DetectedSound.Quiet, function () {
    led.plotBarGraph(
    0,
    0
    )
})
input.onSound(DetectedSound.Loud, function () {
    led.plotBarGraph(
    3,
    3
    )
})
