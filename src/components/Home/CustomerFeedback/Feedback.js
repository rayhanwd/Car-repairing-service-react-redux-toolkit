import React, { useState, useEffect } from 'react';
import FeedbackCard from './FeedbackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
const Feedback = () => {

    const [Feedback, setFeedback] = useState([]);
    useEffect(() => {
        const url = 'https://whispering-falls-52253.herokuapp.com/ShowFeedback';
        fetch(url)
            .then((response) => response.json())
            .then(feedbackData => setFeedback(feedbackData))
            
    }, [])
    return (

        <Swiper
            spaceBetween={3}
            slidesPerView={1}
        >
            <SwiperSlide className="w-100">
                <div class="container mt-5">
                    <h2 class="text-center">But don’t just take our word for it</h2>
                    <h6 class="text-center">Find out what other people have to say about HourseVPN.</h6>
                    <div className="row mt-5">
                        {
                            Feedback.map(feedbackData => <FeedbackCard key={feedbackData.username} GetFeedbackData={feedbackData}></FeedbackCard>)
                        }
                    </div>
                </div>


            </SwiperSlide>
      ...
        </Swiper>


    );
};

export default Feedback;