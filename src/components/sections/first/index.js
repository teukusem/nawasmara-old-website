import Image from "next/image";
import BackgroundVideo from "../../background-video";

export default function FirstSection() {
  const styles = {
    container: `flex relative p-8 bg-[#F2EDEB] text-[#504533]`,
    frame1: `absolute left-0 top-[-40px] rotate-180`,
    frame2: `absolute right-0 bottom-[-30px]`,
    arrow1: `absolute blink_me flex absolute w-full h-full justify-center items-center pt-[70vh]`,
    arrow2: `absolute blink_me2 flex absolute w-full h-full justify-center items-center pt-[74vh]`,
  };
  return (
    <div className="md:px-[35vw] px-16">
      <div className={styles.container}>
        <div className={styles.frame1}>
          <Image
            src="/assets/pink-flower.svg"
            alt="frame-2"
            width={200}
            height={200}
          />
        </div>
        <BackgroundVideo className="flex justify-center items-center shadow-lg rounded-3xl" />

        <div className={styles.frame2}>
          <Image
            src="/assets/pink-flower.svg"
            alt="frame-2"
            width={200}
            height={200}
          />
        </div>
        {/* <div className={styles.arrow1}>
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
      </div> */}
      </div>
    </div>
  );
}
