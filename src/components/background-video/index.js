import { useEffect } from "react";

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
    <div className="z-1">
      <video autoPlay loop muted playsinline className="video" id="backgroundMusic">
        <source src="/video/landing_video.mp4" type="video/mp4" />
      </video>
      <style jsx>{`
        .video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
        }
      `}</style>
    </div>
  );
}
