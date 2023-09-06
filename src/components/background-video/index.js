export default function BackgroundVideo() {
  return (
    <div className="z-1">
      <video autoPlay loop muted>
        <source src="/video/landing_video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
