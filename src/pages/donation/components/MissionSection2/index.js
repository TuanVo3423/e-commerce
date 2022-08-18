import './index.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { dataDonateCard } from '../../../../services';
import { inViewFromLeftShow, donateValueShow } from '../../../../utils/types';
import { motion } from 'framer-motion';

export default function MissionSection2() {
    const { inView, ref } = useInView({
        threshold: 0.2,
    });
    return (
        <motion.div
            variants={inViewFromLeftShow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex lg:flex-row flex-col lg:justify-evenly  bg-green-50 lg:p-24 p-12"
        >
            {dataDonateCard.map((item) => {
                return (
                    <motion.div
                        ref={ref}
                        variants={donateValueShow}
                        initial={'hidden'}
                        animate={inView && 'visible'}
                        key={item.id}
                        className="flex flex-col lg:w-30% w-full p-12 mb-5 items-center relative card-donate bg-white"
                    >
                        <div className="mb-2">{<item.Image />}</div>
                        <p className="font-bold text-xl text-green-500 mb-6">{item.title}</p>
                        <p className="text-base text-center mb-6 text-gray-600">{item.description}</p>
                        <button className="text-green-500 text-xs font-semibold " variant="text">
                            {item.btnTitle}
                        </button>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
