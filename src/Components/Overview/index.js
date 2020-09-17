import React from 'react'
import './style.css';
import CardSmall from '../Card-small'

const cardsSmallList = [
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 3,
        id: 1,
        name:'Page Views'
    },
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '52',
        growth: 2,
        id: 2,
        name:'Likes'
    },
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '5262',
        growth: 2257,
        id: 3,
        name:'Likes'
    },
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '52k',
        growth: 1375,
        id: 4,
        name:'Profile Views'
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '117',
        growth: 303,
        id: 5,
        name:'Retweets'
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '507',
        growth: 553,
        id: 6,
        name:'Likes'
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '107',
        growth: 19,
        id: 7,
        name:'Likes'
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '1407',
        growth: 12,
        id: 8,
        name:'Total Views'
    }
]
function Overview() {
    return (
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {
                        cardsSmallList.map(({id,icon, pageViews, growth,name}) => (
                            <CardSmall
                                key={id}
                                icon={icon}
                                pageViews={pageViews}
                                growth={growth}
                                name={name}
                            />
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default Overview;