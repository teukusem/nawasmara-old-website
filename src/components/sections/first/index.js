import Image from "next/image";
import BackgroundVideo from "../../background-video";

export default function FirstSection() {
  const styles = {
    container: `w-screen h-screen bg-white text-[#504533] md:px-[30vw]`,
    content: `h-screen bg-[#F2EDEB]`,
    frame1: `absolute`,
    frame2: `absolute rotate-180 right-0 bottom-0`,
    arrow1: `blink_me flex absolute w-full h-full justify-center items-center pt-[80vh]`,
    arrow2: `blink_me2 flex absolute w-full h-full justify-center items-center pt-[82vh]`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.frame1}>
          <Image
            src="/assets/video-frame.svg"
            alt="frame-2"
            width={250}
            height={250}
          />
        </div>
        <div className={styles.frame2}>
          <Image
            src="/assets/video-frame.svg"
            alt="frame-2"
            width={250}
            height={250}
          />
        </div>
        <div className={styles.arrow1}>
          <Image
            src="/assets/arrow-double.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.arrow2}>
          <Image
            src="/assets/arrow-double.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
        <BackgroundVideo />
      </div>
    </div>
  );
}
