export default function BackgroundVideo({ className }) {
  const html = `<video id="backgroundMusic" src="/video/landing_video.mp4" classname="video" autoplay loop muted playsinline>`;
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
