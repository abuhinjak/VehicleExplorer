import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import axiosClient from '../../lib/axiosClient'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './make.scss'

function Make() {
  const [make, setMake] = useState({})
  const [models, setModels] = useState({})
  const { makeId } = useParams()

  useEffect(() => {
    axiosClient.get(`/makes/${makeId}`)
      .then(res => {
        console.log(res.data)
        setMake(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axiosClient.get(`/makes/${makeId}/models`)
      .then(res => {
        console.log(res.data)
        setModels(res.data)
      })
      .catch(err => console.log(err))
  }, [make])

  return (
    <main className='make--info-wrap'>
        <h1 className='make--title'>
          {make.name}
        </h1>

        <div className='make--info-content container'>
          <div className='make--info-img-wrap'>
            <img src={make.logo} alt={make.name} />
          </div>
          <div className='make--info-desc'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique natus ad reiciendis doloribus nisi, accusantium inventore incidunt est ab totam fuga minus non magni. Quia, blanditiis consequatur sequi quo fugiat suscipit culpa animi voluptas facere doloribus adipisci eos exercitationem. Explicabo magni possimus neque facere beatae laborum quo nulla rem illo.
            </p>
          </div>
        </div>

        <div className="models--wrap">
          {
            models.length > 0 ? (
              <div className="models--list container">
                <h2 className="models--title">Check Out Our <span className='bold'>Models</span></h2>

                <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {
                      models.map((model) => (
                        <SwiperSlide key={model.id}>
                          <div className="models--item">
                            <div className="models--item-img-wrap">
                              <img src={model.image} alt={model.name} referrerPolicy='no-referrer'/>
                            </div>
                            <h2 className="models--item-title">{model.name}</h2>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
            ) : (
              <div className="models--empty">
                <h2 className="models--title">No Models Found</h2>
              </div>
            )
          }
        </div>
    </main>
  )
}

export default Make