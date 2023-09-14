export default function BackgroundVideo() {
  const html = `<video id="backgroundMusic" src="/video/landing_video.mp4" classname="video" autoplay loop muted playsinline><style jsx></style>`;
  return (
    <div
      className="z-1"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></div>
  );
}
