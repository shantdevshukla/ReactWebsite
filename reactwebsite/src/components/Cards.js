import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'
import img6 from '../images/img-6.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Explore Our Services!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                    <CardItem src={img9} label='Cloud Computing' text='Cloud Migration, Cloud Consulting, Cloud Operational Management' path='/services' />
                    <CardItem src={img2} label='Data Intelligence' text='Business Intelligence, Big Data, Data Warehouse, ETL, ' path='/services' />
                    <CardItem src={img3} label='Web Technologies' text='Web Development, Application Modernization, Emerging Technologies' path='/services' />
                    <CardItem src={img4} label='DevOps' text='CI/CD Consulting, Release Automations, Code Quality' path='/services' />
                    <CardItem src={img5} label='Artificial Intelligence' text='Machine Learning, Deep Learning, RPA Consulting' path='/services' />
                    <CardItem src={img6} label='Agile Infrastructure' text='Agile Implementations, Agile Coaching, Process Improvememnts' path='/services' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;