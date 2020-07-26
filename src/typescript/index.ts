import { desktopCapturer } from 'electron';
(async () => {
    const sources = await desktopCapturer.getSources({ types: ['screen'] });
    const source = sources[0];
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            //@ts-ignore
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: source.id,
            },
        },
    });
    const video = document.body.appendChild(document.createElement('video'));
    video.srcObject = stream;
    video.play();
    video.height = 200;
})();
