export default function BackgroundVideo() {
  // useEffect(() => {
  //   document.addEventListener(
  //     "click",
  //     () => {
  //       document.getElementById("backgroundMusic").play();
  //     },
  //     { once: true }
  //   );
  // });

  return (
    <div
      className="z-1"
      dangerouslySetInnerHTML={{
        __html: `
        <video
        id="backgroundMusic"
        src="/video/landing_video.mp4"
        className="video"
        autoPlay
        loop
        muted
        playsinline
      />
      <style jsx>{'
        .video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
        }
      '}</style>
    `,
      }}
    ></div>
  );
}
