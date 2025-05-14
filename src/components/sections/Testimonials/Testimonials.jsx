import { React, useState } from 'react'
import CaretUp from '../../icons/CaretUp'
import { testimonials as test } from '../../../utils/content'
import TestimonialsList from './TestimonialsList'

const Testimonials = () => {
    const [expanded, setExpanded] = useState(true);
    return (
        <section className="bg-gradient-to-top">
            <div className="m-auto flex max-w-[90rem] flex-col items-center px-24 py-32">
                <div className="mb-20 flex flex-col items-center gap-y-6">
                    <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8"> 
                        Portfolio</p>
                    <h2 className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter">
                        Bringing design to life
                    </h2>
                    <p className="text-primary-100 px-28 text-center text-xl/loose font-light">
                        This is where aesthetics meet technology. Each page is optimized for all devices—desktop, tablet, and mobile—to ensure an intuitive and powerful experience.
                    </p>
                </div>
                <div className="mb-20 grid grid-cols-12 gap-x-6">
                    <TestimonialsList testimonials={test.slice(0, expanded ? 5 : 2)} />
                    <TestimonialsList testimonials={test.slice(5, expanded ? 10 : 7)} />
                    <TestimonialsList testimonials={test.slice(10, expanded ? 15 : 12)} />
                </div>                
            </div>
        </section>
    )
}

export default Testimonials