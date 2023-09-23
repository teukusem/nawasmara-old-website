import BackgroundVideo from "../background-video";

export default function LandingPage() {
  const styles = {
    container: `w-screen h-screen bg-white text-[#504533] md:px-[30vw]`,
    content: `h-screen bg-[#F2EDEB]`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BackgroundVideo />
      </div>
    </div>
  );
}
