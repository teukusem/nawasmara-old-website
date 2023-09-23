export default function BackgroundVideo() {
  const html = `<video id="backgroundMusic" src="/video/landing_video.mp4" classname="video" autoplay loop muted playsinline>`;
  return (
    <div
      className="z-1 flex justify-center h-screen items-center"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
