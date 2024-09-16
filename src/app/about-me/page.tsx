import dynamic from 'next/dynamic';

const MotionWrapper = dynamic(() => import('../../components/motion/MotionWrapper'), { ssr: false });


const AboutMePage = () => {
    return (
        <div>
            <MotionWrapper/>
        </div>
    );
};

export default AboutMePage;